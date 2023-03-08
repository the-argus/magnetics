import { Update, SoundPlayer } from '../components.js'
import { GameObject } from '../game-object.js'
import { MyMath } from '../math.js'
import { Constants } from '../constants.js'

// lil square that attracts the player when its corresponding key is pressed
export class Magnet extends GameObject {
  constructor (keyObj, player, key, ...args) {
    super(...args)
    // passthrough variables
    this.keys = keyObj
    this.player = player

    // set up appearance (text and size)
    // also the variables for the pulsing effect
    this.originalSize = 40
    this.pulseTime = 0
    this.width = this.originalSize
    this.height = this.originalSize
    this.textContainer = new PIXI.Container()
    this.text = new PIXI.Text(key.toUpperCase(), {
      fontFamily: 'monospace',
      fontSize: 90,
      fill: 0xffffff,
      align: 'center'
    })
    this.text.y = 5
    this.addChild(this.textContainer)
    this.textContainer.addChild(this.text)
    this.textContainer.visible = true
    this.textContainer.zIndex = 1

    this.anchor.set(0.5)
    this.text.anchor.set(0.5)

    // object for tracking playing of sound
    this.players = {
      attract: {
        play: () => {},
        completed: true
      }
    }
    // add initializer for sound
    this.addComponent(SoundPlayer, (self) => {
      self.sounds.attract = new Howl({
        src: 'assets/sounds/attract.ogg',
        onend: () => { self.players.attract.completed = true }
      })
      self.sounds.attract._initialVolume = 0.2

      self.players.attract.play = () => {
        if (self.players.attract.completed) {
          self.sounds.attract.play()
          self.players.attract.completed = false
        }
      }
      return [self.sounds.attract]
    })

    // add update component
    // exert impulse on player if key is being pressed
    this.addComponent(Update, (self) => {
      if (self.keys[key]) {
        const pull = new MyMath.Vector(self.x - self.player.x, self.y - self.player.y)
        pull.normalize()
        pull.componentMultiply(Constants.MAGNET_IMPULSE)
        self.player._impulses.add(pull)
        self.players.attract.play()
        self.pulseTime++
        const size = self.originalSize * (1 + 0.4 * (Math.abs(Math.sin(this.pulseTime / 40))))
        self.width = size
        self.height = size
      } else {
        self.pulseTime = 0
        const newSize = lerp(self.width, self.originalSize, 0.05)
        this.width = newSize
        this.height = newSize
      }
    })
  }
}

function lerp (a, b, t) {
  return (1 - t) * a + t * b
}
