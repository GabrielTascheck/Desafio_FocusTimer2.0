// import './sounds'
import * as state from './state.js'
import * as actions from './actions.js'

function start(minutes, seconds)
{
  state.minutes = minutes
  state.seconds = seconds



}

document.getElementById('controls').addEventListener('click', function(event){
  
  const action = event.target.dataset.action;

  console.log('Ação do botão:', action);

  actions[action]()
})
