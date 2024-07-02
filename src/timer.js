import * as state from './state.js'
import * as el from './elements.js'

export function updateDisplay(minutes, seconds){
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  
}

export function countdown(){
  
  clearTimeout(state.countdownId)

  if(!state.isRunning)
    {
      return;
    }

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--

  if(seconds < 0)
  {
    seconds = 59;
    minutes--
  }
  if(minutes < 0)
  {
    reset(); //fazer no actions
    return;
  }

  updateDisplay(minutes,seconds)

  state.countdownId = setTimeout(() => countdown(), 1000)
}