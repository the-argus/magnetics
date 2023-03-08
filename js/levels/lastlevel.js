import { Player } from '../objects/player.js'
import { Magnet } from '../objects/magnet.js'
import { StaticBody } from '../objects/static-body.js'

export function LastLevel (resources, app, gameEngine) {
  const finalText = new PIXI.Text('you w  n!! :', {
    fill: 0xffffff,
    fontFamily: 'monospace',
    fontSize: 45,
    align: 'center'
  })
  finalText.anchor.set(0.5)
  finalText.x = app.renderer.width / 2
  finalText.y = 100
  finalText.zIndex = 100
  const finalText2 = new PIXI.Text('thanks for playing =)', {
    fill: 0xffffff,
    fontFamily: 'monospace',
    fontSize: 14,
    align: 'center'
  })
  finalText2.anchor.set(0.5)
  finalText2.x = finalText.x
  finalText2.y = finalText.y + 50
  finalText2.zIndex = 100
  gameEngine.makeGameObject(finalText)
  gameEngine.makeGameObject(finalText2)
  // create the level
  const floor = gameEngine.makeGameObject(
    new StaticBody(resources.player.texture)
  )
  floor.width = app.renderer.width
  floor.height = 5
  floor.x = 0
  floor.y = app.renderer.height - 5

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
  hMag.x = 200
  hMag.y = app.renderer.height / 2
  const jMag = gameEngine.makeGameObject(new Magnet(
    gameEngine.globalState.keys,
    player,
    'j',
    resources.magnet.texture)
  )
  jMag.x = 400
  jMag.y = hMag.y
  const kMag = gameEngine.makeGameObject(new Magnet(
    gameEngine.globalState.keys,
    player,
    'k',
    resources.magnet.texture)
  )
  kMag.x = 600
  kMag.y = hMag.y
  const iMag = gameEngine.makeGameObject(new Magnet(
    gameEngine.globalState.keys,
    player,
    'i',
    resources.magnet.texture)
  )
  iMag.x = 425
  iMag.y = finalText.y
  const oMag = gameEngine.makeGameObject(new Magnet(
    gameEngine.globalState.keys,
    player,
    'o',
    resources.magnet.texture)
  )
  oMag.x = 600
  oMag.y = finalText.y

  return {
    player
  }
}
