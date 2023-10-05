import { AppState } from "../AppState.js";
import { Pop } from "../utils/Pop.js";
import { saveState } from "../utils/Store.js";

function _startGame() {
  AppState.activeJumble.startTime = new Date();
}

function _endGame() {
  AppState.activeJumble.endTime = new Date();
  let results = AppState.activeJumble.endTime - AppState.activeJumble.startTime;
  _compareScore(results)

  AppState.activeJumble.startTime = null;
  AppState.activeJumble.endTime = null;
}

function _compareScore(results) {
  if (results < AppState.activeJumble.fastestTime || AppState.activeJumble.fastestTime == null) {
    AppState.activeJumble.fastestTime = results;
    AppState.emit('jumbles')
    _saveJumbles()
  }
}

function _saveJumbles() {
  saveState('jumbles', AppState.jumbles)
}

class GameService {

  checkResults(userInput) {
    // if (userInput.textArena)
    console.log(userInput.textArena);
    if (userInput.textArena != AppState.activeJumble.body) {
      Pop.error('Try again!')
      return
    }
    Pop.success('You got it right!')
    _endGame()
  }

  startJumble(jumbleId) {
    AppState.activeJumble = AppState.jumbles.find(jumble => jumble.id == jumbleId)
    _startGame()
    // console.log(AppState.activeJumble)
  }

}

export const gameService = new GameService() 