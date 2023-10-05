import { AppState } from "../AppState.js"
import { Jumble } from "../models/Jumble.js"
import { Pop } from "../utils/Pop.js";
import { saveState } from "../utils/Store.js";

function _saveJumbles() {
  saveState('jumbles', AppState.jumbles)
}

class JJService {

  createJumble(jumbleData) {
    AppState.jumbles.push(new Jumble(jumbleData))
    AppState.emit('jumbles')
    _saveJumbles();
  }

}

export const jjService = new JJService()