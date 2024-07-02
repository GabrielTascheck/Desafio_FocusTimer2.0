import * as sounds from './sounds.js'
import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'

export function start(){

  if(state.isRunning)
    return
  sounds.time.play()
  state.isRunning = true;
  state.default = true;
  el.body.classList.add('running')
  timer.countdown()

}

export function reset(){
  stop()
  sounds.button.pause()
  sounds.alarm.play()
  timer.updateDisplay()
}

export function stop(){
  if(!state.isRunning)
    return
  sounds.button.play()
  state.default = false
  state.isRunning = false
  el.body.classList.remove('running')
}

export function plusButton(minutes, seconds){
  sounds.click.play()
  
  minutes = Number(el.minutes.textContent) + 5
  seconds = Number(el.seconds.textContent)
  
  el.minutes.textContent = minutes 
  if(!state.default)
    state.minutes = minutes
  timer.updateDisplay(minutes, seconds)
}

export function minusButton(minutes, seconds){
  sounds.click.play()

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

