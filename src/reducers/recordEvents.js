
import injectTapEventPlugin from '../events/injectTapEventPlugin'

injectTapEventPlugin();

export default function recordEvents(state={ clicks:0, changes: 0, others:0 }, action) {
  //console.log('received event received:',action);

  switch (action.type) {
	  case '@@INIT':
	  	
	  	break;  	
	  case 'topClick':
	  case 'topDoubleClick':			
			state = { 
				...state, clicks:state.clicks+1, 
				//events: [...state.events,{ type: action.type, component:action }] 
			};
			break;
	  case 'topChange':
	  case 'topInput':			
			state = { 
				...state, changes:state.changes+1, 
				//events: [...state.events,{ type: action.type, component:action }] 
			};
			break;
	  case 'topKeyDown':
	  case 'topKeyUp':
	  case 'topFocus':	  			
			state = { 
				...state, 
				others:state.others+1, 
				//events: [...state.events,{ type: action.type, component:action }] 
			};
			break;			
  }

  return state;
}
