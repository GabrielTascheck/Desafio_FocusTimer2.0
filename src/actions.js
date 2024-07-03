import * as sounds from './sounds.js'
import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'

export function start(){

  if(state.minutes <= 0 && state.seconds <= 0){
    alert("Tempo inválido")
    return
  }
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
  sounds.time.pause()
  sounds.button.play()
  state.default = false
  state.isRunning = false
  el.body.classList.remove('running')
}

export function plusButton(minutes, seconds){
  
  // sounds.click.pause()
  sounds.click.load()
  sounds.click.play()
  
  minutes = Number(el.minutes.textContent) + 5
  seconds = Number(el.seconds.textContent)
  
  el.minutes.textContent = minutes 
  if(!state.default)
    state.minutes = minutes
  timer.updateDisplay(minutes, seconds)
}

export function minusButton(minutes, seconds){
  
  sounds.click.load()
  sounds.click.play()

  minutes = Number(el.minutes.textContent) - 5
  seconds = Number(el.seconds.textContent)
  el.minutes.textContent = minutes 

  if(!state.default){
    state.minutes = minutes
    state.seconds = seconds
  }

  if(minutes < 0)
    {
      minutes = 0
      seconds = 0
      state.seconds = 0
      state.minutes = 0
    }

  timer.updateDisplay(minutes, seconds)
}

