import state from './state.js'
import * as el from './elements.js'
import * as action from './actions.js'

export function updateDisplay(minutes, seconds){
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  if(minutes < 0)
    {
      minutes = 0
    }
  el.minutes.textContent = String(minutes).padStart(2,'0')
  el.seconds.textContent = String(seconds).padStart(2,'0')
}

export function countdown() {
  clearTimeout(state.countdownId);

  if (state.isRunning) {
    let minutes = Number(el.minutes.textContent);
    let seconds = Number(el.seconds.textContent);

    seconds--;

    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }

    if (minutes >= 0) {
      updateDisplay(minutes, seconds);
      state.countdownId = setTimeout(countdown, 1000);
    } else {
      action.reset();
    }
  }
}
