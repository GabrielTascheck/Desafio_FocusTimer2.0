// import * as sounds from './sounds.js'
import * as state from './state.js'
import * as timer from './timer.js'

export function start(){
  state.isRunning = true;
  body.classList.add('running')
  timer.countdown()
}

export function reset(){
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
}
