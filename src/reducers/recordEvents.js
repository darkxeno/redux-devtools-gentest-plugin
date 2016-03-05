
//import injectTapEventPlugin from '../events/injectTapEventPlugin'

//injectTapEventPlugin();

export default function recordEvents(state={ clicks:0, changes: 0, others:0, events:[] }, action) {
  console.log('received event received:',action);

  switch (action.type) {
	  case '@@INIT':
	  	
	  	break;
	  case 'topClick':
			console.log('recording event received:',action);
			state = { ...state, clicks:state.clicks+1, events: [...state.events,{ type: action.type, component:action }] };
			break;
	  case 'topChange':
			console.log('recording event received:',action);
			state = { ...state, changes:state.change+1, events: [...state.events,{ type: action.type, component:action }] };
			break;			
	  /*default:
	  	const event = { type: action.type, offsetMillis: Date.now()-initTimestamp }
	  	state.events.push( event );
	  	state = { ...state, others:state.others+1 };
	  	break;*/
  }

  return state;
}
