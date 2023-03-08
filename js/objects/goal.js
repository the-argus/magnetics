import { GameObject } from '../game-object.js'
import { StaticBody, Update } from '../components.js'
import { Constants } from '../constants.js'

// this is a fun animated sprite which reacts to player collision and loads
// the next level (which is why it needs a reference to the game engine)
export class Goal extends GameObject {
  constructor (goalSize, gameEngine, ...args) {
    super(...args)
    // set up the way the goal looks
    this.width = goalSize
    this.height = goalSize
    this.goalSize = goalSize
    this.anchor.set(0.5, 0.65)
    this.zIndex = 51

    // init variables
    this.timer = 0
    this.collidedLastFrame = false

    // add components
    this.addComponent(StaticBody, Constants.CollisionMasks.GOAL)
    this.addComponent(Update, (self) => {
      this.width = this.goalSize * (1 + (this.timer / Constants.NEXT_LEVEL_DELAY))
      this.height = this.goalSize * (1 + (this.timer / Constants.NEXT_LEVEL_DELAY))
      self.angle += 1 + (10 * (this.timer / Constants.NEXT_LEVEL_DELAY))
      if (!self.collidedLastFrame) {
        this.timer = 0
      }
      self.collidedLastFrame = false
    })

    // set the collision handler to load the next level
    this.collisionHandler = (self, _) => {
      self.timer += 1
      if (self.timer > Constants.NEXT_LEVEL_DELAY) {
        gameEngine.incrementLevel()
        gameEngine.loadLevel()
        console.log(`congrats, welcome to level ${gameEngine.currentLevel + 1}`)
      }
      self.collidedLastFrame = true
    }
  }
}
