// import * as actions from './actions.js'
import * as el from './elements.js'
// import * as timer from './timer.js'
import * as sounds from './sounds.js'

let lastSound = sounds.click
let lastAction = 'default'

export function themeSounds(action) {
  lastSound.pause();
  sounds.click.pause();
  sounds.click.play();

  if (typeof sounds[action] === 'object') {
    if (lastSound !== sounds[action]) {
      lastSound = sounds[action];
      lastSound.play();
    } else {
      lastSound.pause();
      lastSound = sounds.click;
    }
  }
}

export function themeColors(action){
  
  if(lastAction === action){
    el.body.classList.replace(action, 'default')
    lastAction = 'default'
  }
  else{
    el.body.classList.replace(lastAction, action)
    lastAction = action
  }

}