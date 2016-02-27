
export default function testEvents(state={ clicks:0, others:0, events:[] }, action) {
  console.log('recording event received:',action);

  switch (action.type) {
	  case '@@INIT':
	  	
	  	break;
	  case 'click':
		
			state = { ...state, clicks:state.clicks+1, events: [...state.events,{ type: action.type, component:action }] };
			break;
	  /*default:
	  	const event = { type: action.type, offsetMillis: Date.now()-initTimestamp }
	  	state.events.push( event );
	  	state = { ...state, others:state.others+1 };
	  	break;*/
  }

  return state;
}
