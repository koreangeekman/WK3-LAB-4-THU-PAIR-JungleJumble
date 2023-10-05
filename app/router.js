import { GameController } from "./controllers/GameController.js";
import { JJController } from "./controllers/JJController.js";


export const router = [
  {
    path: '',
    controller: [JJController, GameController],
    view: null
  }
]