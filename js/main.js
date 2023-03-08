import { PhysicsEngine } from './physics-engine.js'
import { Constants } from './constants.js'
import { Engine } from './engine.js'

// pre-load initialization
const ASPECT_RATIO = Constants.RENDER_RESOLUTION[0] / Constants.RENDER_RESOLUTION[1]

const app = new PIXI.Application({
  width: Constants.RENDER_RESOLUTION[0],
  height: Constants.RENDER_RESOLUTION[1],
  antialias: false,
  transparent: false,
  resolution: 1
})

let appViewContainer = null

// onload, its okay to call querySelector and interact with the DOM now
window.onload = () => {
  const muteButton = document.querySelector('#mute')
  const audioStatus = document.querySelector('#audio-status')

  appViewContainer = document.querySelector('#app-view')
  appViewContainer.appendChild(app.view)

  // create the physics engine
  const physicsEngine = new PhysicsEngine()

  // create an object that tracks keyboard controls
  const keys = {}
  document.addEventListener('keydown', (event) => { keys[event.key] = true })
  document.addEventListener('keyup', (event) => { keys[event.key] = false })

  // create the game engine (relies on previously created objects)
  const gameEngine = new Engine({
    keys,
    physicsEngine,
    app,
    volumeMuted: true
  })

  // mute button's onclick relies on the game engine
  muteButton.onclick = () => {
    gameEngine.globalState.volumeMuted = !gameEngine.globalState.volumeMuted
    if (gameEngine.globalState.volumeMuted) {
      gameEngine.muted()
      audioStatus.innerHTML = 'Muted'
      muteButton.innerHTML = 'PRESS TO UNMUTE'
    } else {
      gameEngine.unmuted()
      audioStatus.innerHTML = 'Unmuted'
      muteButton.innerHTML = 'PRESS TO MUTE'
    }
  }

  // call app.loader.load and add the grand total of three (3) textures in use
  app.loader
    .add('magnet', 'assets/magnet.png')
    .add('player', 'assets/player.png')
    .add('goal', 'assets/goal.png')
    .load((_, resources) => {
      // set up the game engine's internals
      gameEngine.globalState.resources = resources
      gameEngine.loadLevel()

      // register update for calls every frame
      app.ticker.add(() => {
        gameEngine.update()
      })
    })

  resize()
}

window.onresize = resize

// make the window resizable by changing app.renderer.view.style
function resize () {
  if (!appViewContainer) {
    // return, because setting the appview container should be done once
    // the window has loaded
    return
  }
  let w = Constants.DEFAULT_TARGET_RESOLUTION[0]
  let h = Constants.DEFAULT_TARGET_RESOLUTION[1]
  if (window.innerWidth / window.innerHeight >= ASPECT_RATIO) {
    w = window.innerHeight * ASPECT_RATIO
    h = window.innerHeight
  } else {
    w = window.innerWidth
    h = window.innerWidth / ASPECT_RATIO
  }
  app.renderer.view.style.width = w + 'px'
  app.renderer.view.style.height = h + 'px'
}
