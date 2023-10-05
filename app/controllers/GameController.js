import { AppState } from "../AppState.js"
import { gameService } from "../services/GameService.js"
import { getFormData } from "../utils/FormHandler.js"
import { setHTML } from "../utils/Writer.js"

function _drawChallenge(jumbleId) {
  const challenge = AppState.jumbles.find(jumble => jumble.id == jumbleId);
  setHTML('challengeJumble', challenge.challengeTemplate);
}

export class GameController {
  constructor() {
  }

  checkResults(event) {
    event.preventDefault();
    const form = event.target;
    const userInput = getFormData(form);
    gameService.checkResults(userInput);
    form.reset();
  }

  startJumble(jumbleId) {
    _drawChallenge(jumbleId);
    document.getElementById('textArena').focus()
    gameService.startJumble(jumbleId);
  }
}