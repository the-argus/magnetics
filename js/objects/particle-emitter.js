import { GameObject } from '../game-object.js'
import { Update, Destroy } from '../components.js'

// this class is a simple container for a particle container
// useful for defining how many particles you want and how long they persist
export class ParticleEmitter extends GameObject {
  constructor (particlesPerSecond, lifetime, ...args) {
    super(...args)
    // basic properties
    this.particlesPerSecond = particlesPerSecond
    this.lifetime = lifetime
    this.age = 0

    // needs to be destructible because it fizzles out after some time
    this.addComponent(Destroy)
    this.addComponent(Update, (self) => {
      self.age += 1
      if (self.age > self.lifetime) {
        this.myDestroy()
      }
    })
  }
}
