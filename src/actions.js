// import * as sounds from './sounds.js'
import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'

export function start(){

  if(state.isRunning)
    return
  state.isRunning = true;
  state.default = true;
  console.log(state.isRunning)
  el.body.classList.add('running')
  timer.countdown()

}

export function reset(){
  stop()
  timer.updateDisplay()
}

export function stop(){
  state.default = false
  state.isRunning = false
  console.log(state.isRunning)
  el.body.classList.remove('running')
}

export function plusButton(minutes, seconds){
  minutes = Number(el.minutes.textContent) + 5
  seconds = Number(el.seconds.textContent)

  el.minutes.textContent = minutes 
  if(!state.default)
    state.minutes = minutes
  timer.updateDisplay(minutes, seconds)
}

export function minusButton(minutes, seconds){
  minutes = Number(el.minutes.textContent) - 5
  seconds = Number(el.seconds.textContent)
  el.minutes.textContent = minutes 

  if(!state.default)
    state.minutes = minutes

  if(minutes < 0)
    {
      minutes = 0
      seconds = 0
    }

  timer.updateDisplay(minutes, seconds)
}

