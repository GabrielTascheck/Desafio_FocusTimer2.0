import * as actions from './actions.js'
import * as el from './elements.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'

let lastSound = sounds.click

timer.updateDisplay()

el.controls.addEventListener('click', function(event){
  
  const action = event.target.dataset.action;

  if(typeof actions[action] != 'function' )
    return

  actions[action]()
  

})

el.sounds.addEventListener('click', event => {
  lastSound.pause()
  sounds.click.pause()
  sounds.click.play()

  const action = event.target.dataset.action;
  if(typeof sounds[action] != 'object')
    return

  if(lastSound === sounds[action]){
    lastSound.pause()
    lastSound = sounds.click
    return
  }
  
  lastSound = sounds[action]
  lastSound.play()
})

