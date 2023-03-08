import { Player } from '../objects/player.js'
import { Magnet } from '../objects/magnet.js'
import { StaticBody } from '../objects/static-body.js'
import { Goal } from '../objects/goal.js'

export function Level2 (resources, app, gameEngine) {
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

  const rightWall = gameEngine.makeGameObject(
    new StaticBody(resources.player.texture)
  )
  rightWall.x = app.renderer.width - 5
  rightWall.y = 0
  rightWall.height = app.renderer.height
  rightWall.width = 5

  const ceiling = gameEngine.makeGameObject(
    new StaticBody(resources.player.texture)
  )
  ceiling.x = 0
  ceiling.y = 0
  ceiling.height = 5
  ceiling.width = app.renderer.width

  const endPlatform = gameEngine.makeGameObject(
    new StaticBody(resources.magnet.texture)
  )
  endPlatform.x = app.renderer.width - 105
  endPlatform.y = app.renderer.height - 120
  endPlatform.height = 100
  endPlatform.width = 100

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
  hMag.x = app.renderer.width - 110
  hMag.y = 70
  // const jMag = gameEngine.makeGameObject(new Magnet(
  //   gameEngine,
  //   gameEngine.globalState.keys,
  //   player,
  //   'j',
  //   resources.magnet.texture)
  // )
  // jMag.x = 600
  // jMag.y = 350

  return {
    player
  }
}
