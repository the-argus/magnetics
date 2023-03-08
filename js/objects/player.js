import { DynamicBody, Update, SoundPlayer } from '../components.js'
import { GameObject } from '../game-object.js'
import { Constants } from '../constants.js'

// the player of the game! needs reference to the key tracker object
// so it can accept control
export class Player extends GameObject {
  constructor (keyObj, physicsEngine, ...args) {
    super(...args)
    this.keys = keyObj

    // object for tracking the playing of sound
    this.players = {
      jump: () => {}
    }

    // add components
    this.addComponent(SoundPlayer, (self) => {
      self.sounds.jump = new Howl({
        src: 'assets/sounds/jump.ogg'
      })
      this.players.jump = () => {
        this.sounds.jump.play()
      }
      return [self.sounds.jump]
    })
    this.addComponent(DynamicBody, physicsEngine, Constants.CollisionMasks.PLAYER)
    this.addComponent(Update, (self) => {
      const aPressed = self.keys.a
      const dPressed = self.keys.d
      const wPressed = self.keys.w
      if (aPressed | dPressed | wPressed) {
        // movement
        const onGround = self.isOnGround()
        if (aPressed) {
          self._impulses.x -= Constants.Player.MOVE_IMPULSE * (1 - (!onGround * (1 - Constants.Player.AIR_CONTROL)))
        }
        if (dPressed) {
          self._impulses.x += Constants.Player.MOVE_IMPULSE * (1 - (!onGround * (1 - Constants.Player.AIR_CONTROL)))
        }

        // jump
        if (wPressed && onGround) {
          self.y -= 1
          self.vel.y = 0
          self._impulses.y -= Constants.Player.JUMP_IMPULSE
          this.players.jump()
        }
      }
    })
  }
}
