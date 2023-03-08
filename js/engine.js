import { Level1 } from './levels/level1.js'
import { Level2 } from './levels/level2.js'
import { Level3 } from './levels/level3.js'
import { LastLevel } from './levels/lastlevel.js'
import { Constants } from './constants.js'

// simple class which contains references to big import objects
// like the dictionaries of objects and the physics engine
export class Engine {
  constructor (globalState) {
    // Big Variables
    this.globalState = globalState
    this.updaters = []
    this.sounds = []
    this.soundInitializers = []
    this.levels = [Level1, Level2, Level3, LastLevel]
    this.currentlyLoadedObjects = {}
    this.currentLevel = 0

    // set up the stage and add some filters
    this.globalState.app.stage.sortableChildren = true
    const RGBSplit = new PIXI.filters.RGBSplitFilter()
    RGBSplit.red = [-2, 0]
    RGBSplit.green = [0, 2]
    RGBSplit.blue = [0, 0]
    this.globalState.app.stage.filters = [
      new PIXI.filters.AdvancedBloomFilter({
        threshold: 0.8,
        pixelSize: 0.5,
        quality: 10,
        blur: 6
      }),
      new PIXI.filters.CRTFilter({
        time: 1,
        curvature: 1,
        vignettingAlpha: 0.3
      }),
      new PIXI.filters.MotionBlurFilter(),
      RGBSplit
    ]
  }

  // used for removing all the objects at loadLevel
  dereferenceObjects () {
    // basically the reverse of makeGameObject?
    this.updaters = []
    this.globalState.physicsEngine.statics = []
    this.globalState.physicsEngine.dynamics = []
    for (const uuid in this.currentlyLoadedObjects) {
      this.globalState.app.stage.removeChild(this.currentlyLoadedObjects[uuid])
    }
    this.currentlyLoadedObjects = {}
  }

  // world's most unecessary function
  incrementLevel () {
    this.currentLevel += 1
  }

  // clear out all reference to objects and re-initialize everything, basically
  loadLevel () {
    this.dereferenceObjects()
    const info = this.levels[this.currentLevel](this.globalState.resources, this.globalState.app, this)
    this.globalState.player = info.player
    if (!this.globalState.volumeMuted) {
      this.unmuted()
    }
  }

  // big important function that sets up certain game object components and
  // registers game objects with the engine for removal when the level reloads
  makeGameObject (gameObject) {
    if ('_update' in gameObject) {
      // this will all be updated during this.update
      this.updaters.push(gameObject)
    }
    if ('myDestroy' in gameObject) {
      // make it so that the myDestroy func actually dereferences the object
      // in ever possible place
      gameObject.myDestroy = () => {
        this.globalState.app.stage.removeChild(gameObject)
        delete this.currentlyLoadedObjects[gameObject.uuid]
        if (gameObject.uuid in this.globalState.physicsEngine.dynamics) {
          delete this.globalState.physicsEngine.dynamics[gameObject.uuid]
        }
        if (gameObject.uuid in this.globalState.physicsEngine.statics) {
          delete this.globalState.physicsEngine.statics[gameObject.uuid]
        }
      }
    }
    if ('_soundInit' in gameObject) {
      // register this initialization function for calling later when the player
      // unmutes the game
      this.soundInitializers.push({
        lambda: gameObject._soundInit,
        object: gameObject
      })
    }
    if ('isStatic' in gameObject) {
      if (gameObject.isStatic) {
        this.globalState.physicsEngine.addStaticBody(gameObject)
      }
    }
    // no need to add dynamic bodies, those already add themselves to the
    // physics engine

    // register object in the engine and the PIXI stage
    this.globalState.app.stage.addChild(gameObject)
    this.currentlyLoadedObjects[gameObject.uuid] = gameObject
    return gameObject
  }

  // called in main.js by app.ticker
  update () {
    this.globalState.physicsEngine.step(1 / 60)
    this.updaters.forEach((obj) => {
      obj._update()
    })

    // restart level if player goes over the edge
    const player = this.globalState.player
    if (player.x > Constants.RENDER_RESOLUTION[0] ||
      player.x < -player.width ||
      player.y < -player.height ||
      player.y > Constants.RENDER_RESOLUTION[1]) {
      this.loadLevel()
    }
  }

  // called in main.js during button onclick
  unmuted () {
    // initialze any sounds that may need it
    for (const init of this.soundInitializers) {
      const createdSounds = init.lambda(init.object)
      if (!createdSounds) {
        throw new Error(`${init.object}'s soundInit does not return a list.`)
      }
      for (const sound of createdSounds) {
        this.sounds.push(sound)
      }
    }
    // we finished intializing, just clear everything out
    this.soundInitializers = []
    // unmute all sounds (included those that may have already been inited)
    if (this.sounds.length > 0) {
      this.sounds.forEach((sound) => {
        if ('_initialVolume' in sound) {
          sound.volume = sound._initialVolume
        } else {
          sound.volume = 0.5
        }
      })
    }
  }

  // called in main.js during button onclick
  muted () {
    this.sounds.forEach((sound) => { sound.volume = 0 })
  }
}
