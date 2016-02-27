//import App from '../containers/App';
import Index from '../index';
//import { window, document } from '../tests/window';
//import React from 'react/addons';


/*let rootElement = document.getElementById('root');
let firstChild = rootElement.childNodes ? rootElement.childNodes[0] : null;
let mainId;
if(firstChild && getAttribute){
	mainId = firstChild.getAttribute('data-reactid');
} */

export default function testEvents(state={ clicks:0, others:0, events:[] }, action) {
  console.log('playing event recorded:',action);

  switch (action.type) {
	  case '@@INIT':
	  	
	  	break;
	  case 'click':
	  
	  	if(Index){
				let React = require('react/addons');
				let TestUtils = React.addons.TestUtils;  		
		  	const components = TestUtils.scryRenderedDOMComponentsWithTag(Index, action.tagName);
		  	//const reactId = action.reactId.replace(/^\.[0-Z]*\.(.*)$/, mainId+'.$1');
		  	const reactId = action.reactId;
		  	console.log('Found [',action.tagName,'] components:',components.length,' looking for:',reactId);
		  		
				//const app = TestUtils.scryRenderedComponentWithType(App);
				const component = components.filter((component)=>{
					console.log('component Rid',component.getDOMNode().getAttribute('data-reactid'));
					return component.getDOMNode().getAttribute('data-reactid')===reactId;
				}).pop();

				console.log('Found component: [',action.tagName,reactId,']');
				const isDOMComponent = TestUtils.isDOMComponent(component);
				console.log('isDOMComponent:',isDOMComponent);

				if(isDOMComponent){
					console.log('Found component: ',component.getDOMNode().outerHTML);	
				}
				
				if(action.offsetMillis){
					TestUtils.Simulate.click(component);
					setTimeout(()=>{
						//TestUtils.Simulate.click(component);
					},action.offsetMillis);				
				} else {
					TestUtils.Simulate.click(component);
				}
				
			}

			//const { reactId, tagName } = action;
			//const component = { reactId, tagName }
			state.events.push( { type: action.type, component:action} );

			state = { ...state, clicks:state.clicks+1 };
			break;
	  /*default:
	  	const event = { type: action.type, offsetMillis: Date.now()-initTimestamp }
	  	state.events.push( event );
	  	state = { ...state, others:state.others+1 };
	  	break;*/
  }

  return state;
}

