// simple class grouping two numbers, x and y
class Vector {
  // constructor allows for supplying 0, 1, or two inputs
  constructor (x = null, y = null) {
    if (x !== null && y === null) {
      this.x = x
      this.y = x
    } else if (x !== null && y !== null) {
      this.x = x
      this.y = y
    } else {
      this.x = 0
      this.y = 0
    }
  }

  // operations that can be called on a vector instance
  subtract (vec) {
    if (typeof vec === 'object') {
      this.x -= vec.x
      this.y -= vec.y
    } else {
    // assume it's an int
      this.x -= vec
      this.y -= vec
    }
    return this
  }

  add (vec) {
    if (typeof vec === 'object') {
      this.x += vec.x
      this.y += vec.y
    } else {
    // assume it's an int
      this.x += vec
      this.y += vec
    }
    return this
  }

  // multiple the vector component-wise, by either an int or another vector
  componentMultiply (vec) {
    if (typeof vec === 'object') {
      this.x *= vec.x
      this.y *= vec.y
    } else {
    // assume it's an int
      this.x *= vec
      this.y *= vec
    }
    return this
  }

  // reduces the magnitude to 1 while maintaining the direction
  normalize () {
    const mag = this.magnitude
    this.x /= mag
    this.y /= mag
  }

  // return the dot product of this vector with another vector
  dot (vec) {
    return (vec.x * this.x) + (vec.y * this.y)
  }

  // getters
  get magnitude () {
    return Math.sqrt((this.x * this.x) + (this.y * this.y))
  }

  get squaredMagnitude () {
    return (this.x * this.x) + (this.y * this.y)
  }
}

export const MyMath = {
  Vector,

  // useful for when you need to operate on a vector but save the original
  copyVector: (vec) => {
    return new Vector(vec.x, vec.y)
  },

  // add vectors without modifying either of the originals
  addVector: (vec1, vec2) => {
    return { x: vec1.x + vec2.x, y: vec1.y + vec2.y }
  },

  // alias for vec.dot()
  dotProduct: (vec1, vec2) => {
    return vec1.dot(vec2)
  },

  // this function is the brunt of physics calculations
  // accepts four vectors: min is the most negative x,y and max is most pos
  AABBOverlap: (min1, min2, max1, max2, collisionHook = (_, __) => {}) => {
    // use min and max to determine overlap
    const min = new MyMath.Vector(Math.max(min1.x, min2.x), Math.max(min1.y, min2.y))
    const max = new MyMath.Vector(Math.min(max1.x, max2.x), Math.min(max1.y, max2.y))
    // bool collided, this is the most important part!
    const collided = min.x < max.x && min.y < max.y

    // now calculate additional information like depth and normal if collided
    if (collided) {
      const amount = max.subtract(min)
      const normal = new Vector(0)
      // simple normal calculations for AABBs
      // normal comes out to (1, 1) if x and y of amount are the same
      // this is always positive (only differentiates between horizontal and vertical collisions)
      if (amount.y !== 0) {
        normal.y = (amount.y / Math.abs(amount.y)) * (amount.x >= amount.y)
      }
      if (amount.x !== 0) {
        normal.x = (amount.x / Math.abs(amount.x)) * (amount.x <= amount.y)
      }
      normal.componentMultiply(new Vector(
        (2 * (min1.x > min2.x)) - 1,
        (2 * (min1.y > min2.y)) - 1
      ))
      normal.normalize()

      // call the collision hook ( unused at time of writing )
      collisionHook(amount, normal)
      return {
      // clamp to 0
        collided,
        amount,
        normal
      }
    } else {
      return {
        // default collision information
        collided,
        amount: null,
        normal: null
      }
    }
  }
}
