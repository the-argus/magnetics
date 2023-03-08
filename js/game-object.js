// very simple class that can be extended by components
export class GameObject extends PIXI.Sprite {
  constructor (...args) {
    super(...args)
    this.uuid = crypto.randomUUID()
  }

  _addMethod (name, method) {
    this[name] = (...args) => {
      return method(this, ...args)
    }
  }

  addComponent (component, ...args) {
    Object.assign(this, component(this, ...args))
  }
}

// soooort of a game object (cant use components but has a UUID)
export class TextObject extends PIXI.Text {
  constructor (...args) {
    super(...args)
    this.uuid = crypto.randomUUID()
  }
}
