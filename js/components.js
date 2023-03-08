// components which can be used to extend gameobject
import { MyMath } from './math.js'

// a physics body which MOVES
// requires a reference to the physics engine, and adds itself to it
export const DynamicBody = (parent, physicsEngine, collisionMask) => {
  // methods of component
  parent._addMethod('_applyVelocity', (obj) => {
    obj.x += obj.vel.x
    obj.y += obj.vel.y
  })

  parent._addMethod('isOnGround', (obj) => {
    return obj.physicsEngine.checkIfOnGround(obj)
  })

  physicsEngine.addDynamicBody(parent)

  // variables of component
  return {
    collisionMask,
    vel: new MyMath.Vector(),
    mass: 1,
    _impulses: new MyMath.Vector(),
    // TODO: remove this probably, unused at time of writing
    // also has references in the AABB overlap and physics engine
    lastCollisionInfo: {
      collided: false,
      amount: new MyMath.Vector(),
      normal: new MyMath.Vector()
    },
    physicsEngine,
    collisionHandler: () => {}
  }
}

export const Destroy = (parent) => {
  // has to be called myDestroy because PIXI already defines destroy for sprites
  parent._addMethod('myDestroy', () => {})
}

// having the _update key registers an object as an updater by the game engine
export const Update = (parent, updateFunc) => {
  parent._addMethod('_update', updateFunc)
}

// basic body which gets added to the physics engine by the game engine
// inside of its makeGameObject function
export const StaticBody = (_, collisionMask) => {
  return {
    isStatic: true,
    collisionMask,
    collisionHandler: () => {}
  }
}

// sound init function should accept the parent game object and
// return a list of the created sounds
// this component is heavily handled by the game engine
export const SoundPlayer = (parent, soundInitFunction) => {
  parent._addMethod('_soundInit', soundInitFunction)
  return {
    sounds: {}
  }
}
