import { AppState } from "../AppState.js";
import { Jumble } from "../models/Jumble.js";
import { jjService } from "../services/JJService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";


function _drawJumbleList() {
  const jumbleList = AppState.jumbles
  let content = ''
  jumbleList.forEach(jumble => content += jumble.ListTemplate)

  setHTML('jumbleList', content)
}

export class JJController {
  constructor() {
    console.log('hello world');
    _drawJumbleList()
    AppState.on('jumbles', _drawJumbleList)
  }


  createJumble(event) {
    event.preventDefault()
    const form = event.target
    const jumbleData = getFormData(form)
    jjService.createJumble(jumbleData)
    form.reset();
  }


}