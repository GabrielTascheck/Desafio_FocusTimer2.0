import * as actions from './actions.js'
import * as el from './elements.js'
import * as timer from './timer.js'
// import * as sounds from './sounds.js'
import * as modes from './toggle-modes.js'
// let lastSound = sounds.click

timer.updateDisplay()

el.controls.addEventListener('click', function(event){
  
  const action = event.target.dataset.action;

  if(typeof actions[action] === 'function' )
    actions[action]()

})

el.sounds.addEventListener('click', function(event){
  const action = event.target.dataset.action;

  if(typeof action !== 'undefined'){
    modes.themeSounds(action)
    modes.themeColors(action)
  }

})

