import { Player } from '../objects/player.js'
import { Magnet } from '../objects/magnet.js'
import { StaticBody } from '../objects/static-body.js'
import { Goal } from '../objects/goal.js'

export function Level3 (resources, app, gameEngine) {
  // create the level
  const floor = gameEngine.makeGameObject(
    new StaticBody(resources.magnet.texture)
  )
  floor.width = 100
  floor.height = 100
  floor.x = 0
  floor.y = app.renderer.height - 3

  const leftWall = gameEngine.makeGameObject(
    new StaticBody(resources.player.texture)
  )
  leftWall.x = 0
  leftWall.y = 0
  leftWall.height = app.renderer.height
  leftWall.width = 5

  const ceiling = gameEngine.makeGameObject(
    new StaticBody(resources.player.texture)
  )
  ceiling.x = 0
  ceiling.y = 0
  ceiling.height = 5
  ceiling.width = app.renderer.width

  const rightWall = gameEngine.makeGameObject(
    new StaticBody(resources.player.texture)
  )
  rightWall.x = app.renderer.width - 5
  rightWall.y = 0
  rightWall.height = app.renderer.height
  rightWall.width = 5

  const endPlatform = gameEngine.makeGameObject(
    new StaticBody(resources.magnet.texture)
  )
  endPlatform.x = app.renderer.width - 105
  endPlatform.y = app.renderer.height - 100
  endPlatform.height = 200
  endPlatform.width = 40

  const blockingPlatform = gameEngine.makeGameObject(
    new StaticBody(resources.magnet.texture)
  )
  blockingPlatform.x = app.renderer.width / 2
  blockingPlatform.y = app.renderer.height - 300
  blockingPlatform.height = 400
  blockingPlatform.width = 20

  // goal on top of end platform
  const goal = gameEngine.makeGameObject(
    new Goal(40, gameEngine, resources.goal.texture)
  )
  goal.x = endPlatform.x + (endPlatform.width / 2)
  goal.y = endPlatform.y - (goal.goalSize / 2)

  // create the player
  const player = gameEngine.makeGameObject(
    new Player(
      gameEngine.globalState.keys,
      gameEngine.globalState.physicsEngine,
      resources.player.texture)
  )
  player.x = 20
  player.y = app.renderer.height / 2
  player.height = 40
  player.width = player.height
  player.zIndex = 50

  // create a magnet
  const hMag = gameEngine.makeGameObject(new Magnet(
    gameEngine.globalState.keys,
    player,
    'h',
    resources.magnet.texture)
  )
  hMag.x = 150
  hMag.y = 110
  const jMag = gameEngine.makeGameObject(new Magnet(
    gameEngine.globalState.keys,
    player,
    'j',
    resources.magnet.texture)
  )
  jMag.x = app.renderer.width - 150
  jMag.y = 110

  return {
    player
  }
}
