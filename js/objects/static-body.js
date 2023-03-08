import { GameObject } from '../game-object.js'
import { StaticBody as staticComponent } from '../components.js'
import { Constants } from '../constants.js'

// very simple class, just manifests the StaticBody component as a game object
export class StaticBody extends GameObject {
  constructor (...args) {
    super(...args)
    this.addComponent(staticComponent, Constants.CollisionMasks.PLATFORMS)
  }
}
