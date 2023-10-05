import { Jumble } from "./models/Jumble.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/IsValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  // SECTION GLOBAL VARIABLES

  /** @type {import('./models/Jumble.js').Jumble[]} */
  jumbles = [
    new Jumble({ name: '🐒 Jumble', body: "Monkeys go bananas for fruit salad, especially when it's filled with juicy pineapples." }),
    new Jumble({ name: '🦍 Jumble', body: "The gorilla juggled berries and grapes, adding them to the fruit salad one-by-one. As nimble as a spider monkey, the typist skillfully typed sentence after sentence." }),
    new Jumble({ name: '🦧 Jumble', body: "Oranges, apples, and bananas danced together in the bowl, creating a harmonious fruit salad. With each keystroke, the orangutan got closer to becoming a typing virtuoso. Hungry for success? Keep peeling away at those keys until you're the fastest typist in the jungle!" })
  ]

  activeJumble = null

  // !SECTION GLOBAL VARIABLES

  // NOTE Used to load initial data
  init() {
    this.jumbles = loadState('jumbles', [Jumble])
  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
