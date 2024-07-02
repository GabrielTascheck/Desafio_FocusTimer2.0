import * as sounds from './sounds'
import state from './state.js'
import * as actions from './actions.js'
import * as el from './elements.js'

function defaultTime(){
  el.minutes.textContent = String(state.minutes).padStart(2,"0")
  el.seconds.textContent = String(state.seconds).padStart(2,"0")
}

document.getElementById('controls').addEventListener('click', function(event){
  
  const action = event.target.dataset.action;

  console.log('Ação do botão:', action);
  if(typeof actions[action] != 'function' )
    return

  actions[action]()

})

defaultTime()