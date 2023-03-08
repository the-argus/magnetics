// numbers!
export const Constants = {
  GRAVITY: 3, // positive because negative Y is upwards in PIXI
  COLLISION_ITERATIONS: 3,
  PHYSICS_CORRECTION_AMOUNT: 0.8, // value between 0 and 1
  UNIVERSAL_DRAG: 0.1,
  UNIVERSAL_GROUND_KINETIC_FRICTION_COEFFICIENT: 0.4,
  Player: {
    AIR_CONTROL: 0.2,
    MOVE_IMPULSE: 0.1,
    JUMP_IMPULSE: 2
  },
  MAGNET_IMPULSE: 0.05,
  DEFAULT_TARGET_RESOLUTION: [320, 180],
  RENDER_RESOLUTION: [848, 480],
  CollisionMasks: {
    PLAYER: 0b0001,
    PLATFORMS: 0b0100,
    GOAL: 0b0011 // does not collide with player
  },
  NEXT_LEVEL_DELAY: 300 // number of frames you have to stand on the goal for
}
