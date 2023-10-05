import { generateId } from "../utils/GenerateId.js"

export class Jumble {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body
    // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
    this.fastestTime = data.fastestTime ? data.fastestTime : 0
    this.startTime = null
    this.endTime = null
  }

  get ListTemplate() { // a basic list template to get drawing
    return `
              <span class="d-flex justify-content-between align-items-center my-2">
                <button onclick="app.GameController.startJumble('${this.id}')" class="btn yellowBtn">start</button>
                <p class="mb-0">${this.name}</p>
                <p class="mb-0">${this.calcFastestTime}</p>
                <p class="mb-0">${this.wpmCalc}</p>
              </span>
    `
  }

  get challengeTemplate() {
    return `
          <div class="card greenCard">
            <span class="d-flex justify-content-between greenShadow fs-5 mb-3">
              <p class="fw-bold">${this.name}</p>
              <p class="fw-bold">Fastest Time ${this.calcFastestTime}s</p>
            </span>
            <p class="mb-4">${this.body}</p>
          </div>
    `
  }

  get wpmCalc() {
    let words = this.body.split(' ');
    let wpm = (words.length / (this.fastestTime / 1000)) * 60;
    if (!this.fastestTime) return ''
    return `${wpm.toFixed(2)} wpm`
    // console.log(this.name, this.fastestTime, words.length, wpm)
  }

  get calcFastestTime() {
    if (!this.fastestTime) return ''
    return `${(this.fastestTime / 1000).toFixed(2)}s`
  }
}