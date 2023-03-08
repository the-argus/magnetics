import { MyMath } from './math.js'
import { Constants } from './constants.js'

// this object includes lists of static and dynamic objects
// and functions for iterating the physics simulation and solving constraints
export class PhysicsEngine {
  constructor () {
    this.statics = {}
    this.dynamics = {}
  }

  // called in game engine's update every frame
  step (deltaTime) {
    // do the first iteration, no collision
    for (let i = 0; i < Constants.COLLISION_ITERATIONS; i++) {
      for (const bodyUUID in this.dynamics) {
        const body = this.dynamics[bodyUUID]
        // universal forces like gravity and drag
        this.applyUniversalImpulses(body, deltaTime)
        this.applyImpulses(body)
        // add impulses for collisions
        this.applyConstraintImpulses(body)
        this.applyImpulses(body)
        // actually move the body
        body._applyVelocity()
      }
    }
  }

  // very inefficient way of checking if a body is on the ground (runs an
  // entire new physics iteration on the body after teleporting it down
  // slightly)
  checkIfOnGround (body) {
    let collidedBelow = false
    // movet he body down
    body.y += 1
    const bodyMin = new MyMath.Vector(body.x, body.y)
    const bodyMax = new MyMath.Vector(body.x + body.width, body.y + body.height)

    // check if the body would collide with anything if it were to be moved here
    for (const staticBodyUUID in this.statics) {
      const staticBody = this.statics[staticBodyUUID]
      const staticMin = new MyMath.Vector(staticBody.x, staticBody.y)
      const staticMax = MyMath.addVector(staticMin, new MyMath.Vector(
        staticBody.width,
        staticBody.height)
      )
      const collisionInfo = MyMath.AABBOverlap(
        bodyMin,
        staticMin,
        bodyMax,
        staticMax
      )

      if (collisionInfo.collided && collisionInfo.normal.y === -1) {
        collidedBelow = true
        break
      }
    }
    // return the body to its original position
    body.y -= 1
    return collidedBelow
  }

  // get all the impulses that need to be applied to an object in order to
  // cause it to approach the point of collision between it and any currently
  // overlapping objects
  getCollisionImpulsesFor (body) {
    const impulses = []

    // find all overlapping rectangles
    const bodyMin = new MyMath.Vector(body.x, body.y)
    const bodyMax = new MyMath.Vector(body.x + body.width, body.y + body.height)
    for (const staticBodyUUID in this.statics) {
      const staticBody = this.statics[staticBodyUUID]
      // if the bodies have overlapping bits in their collision masks,
      // skip their collision
      const staticMin = new MyMath.Vector(staticBody.x, staticBody.y)
      const staticMax = MyMath.addVector(staticMin, new MyMath.Vector(
        staticBody.width,
        staticBody.height)
      )
      // call AABBOverlap to get collision boolean, amount, and normal
      const collisionInfo = MyMath.AABBOverlap(
        bodyMin,
        staticMin,
        bodyMax,
        staticMax
      )

      // if collided, add an impulse to correct the collision
      if (collisionInfo.collided) {
        if (staticBody.collisionMask & body.collisionMask) {
        // trigger collision but dont resolve it
          staticBody.collisionHandler(staticBody, body)
          body.collisionHandler(body, staticBody)
          continue
        }
        staticBody.collisionHandler()
        body.collisionHandler()
        body.lastCollisionInfo = collisionInfo
        // this is colliding, now calculate constraints as if the body is a point
        // first, we know the corrective impulse will be applied along the normal
        const impulse = MyMath.copyVector(collisionInfo.normal)
        // multiply in the amount, now this is a vector representing how much
        // we need to correct on each axis in this iteration
        impulse.componentMultiply(collisionInfo.amount)
        // don't correct fully to account for innacuracies
        // also scale with mass (objects should experience similar change in speed
        // regardless of size)
        impulse.componentMultiply(Constants.PHYSICS_CORRECTION_AMOUNT * body.mass)

        // I believe this is the same as reflecting velocity over the normal?
        // but it only works for AABBs
        const mask = MyMath.copyVector(collisionInfo.normal)
        mask.x = Math.abs(mask.x)
        mask.y = Math.abs(mask.y)
        const reverseVel = MyMath.copyVector(body.vel).componentMultiply(mask).componentMultiply(-1)

        impulse.add(reverseVel)

        impulses.push(impulse)
      }
    }

    return impulses
  }

  // applies impulses like gravity, friction, and air drag to all bodies
  // (called in the step function)
  applyUniversalImpulses (body, deltaTime) {
    // always apply gravity to all dynamic bodies
    const gravity = new MyMath.Vector(
      0,
      Constants.GRAVITY * body.mass * deltaTime
    )
    // also drag
    const drag = (new MyMath.Vector(
      body.vel.x,
      body.vel.y
    )).componentMultiply(Constants.UNIVERSAL_DRAG * -1 * deltaTime)

    // apply ground friction only if on the ground
    const groundFriction = new MyMath.Vector(0)
    if (body.vel.x !== 0 && this.checkIfOnGround(body)) {
      const verticalNormalImpulse = gravity.y
      groundFriction.x = Math.min(
        Math.abs(body.vel.x),
        Math.abs(verticalNormalImpulse * Constants.UNIVERSAL_GROUND_KINETIC_FRICTION_COEFFICIENT)
      )
      groundFriction.x *= -1 * (body.vel.x / Math.abs(body.vel.x))
    }

    gravity.componentMultiply(1 / Constants.COLLISION_ITERATIONS)
    drag.componentMultiply(1 / Constants.COLLISION_ITERATIONS)
    groundFriction.componentMultiply(1 / Constants.COLLISION_ITERATIONS)

    body._impulses.add(gravity)
    body._impulses.add(drag)
    body._impulses.add(groundFriction)
  }

  applyConstraintImpulses (body) {
    this.getCollisionImpulsesFor(body)
      .forEach((impulse) => {
        body._impulses.add(impulse)
      })
  }

  // add the impulses on the body to the velocity
  // (scaled downwards by mass because of newtons second law!)
  applyImpulses (body) {
    // mass is constant, so the following is true:
    // impulse = mass * deltaVelocity
    // therefore...
    // deltaVelocity = impulse/mass
    body._impulses.componentMultiply(1 / body.mass)
    body.vel.add(body._impulses)
    // no warm starting (impulses don't carry over)
    body._impulses.x = 0
    body._impulses.y = 0
  }

  // called by game objects with the DynamicBody component
  addDynamicBody (body) {
    this.dynamics[body.uuid] = body
  }

  // called by the game engine in makeGameObject
  addStaticBody (body) {
    this.statics[body.uuid] = body
  }
}
