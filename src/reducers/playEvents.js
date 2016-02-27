
export default function create(rootReactComponent){

  return function playEvents(state={ clicks:0, others:0, events:[] }, action) {
  	console.log('playing event recorded:',action);

  	let React = require('react/addons');
	  let TestUtils = React.addons.TestUtils;  

	  if(!rootReactComponent || !TestUtils.isCompositeComponent(rootReactComponent)){
			throw new Error('Invalid react root component specified');
	  }

	  switch (action.type) {
		  case '@@INIT':
		  	
		  	break;
		  case 'click':
		  	  	  	
		  	const components = TestUtils.scryRenderedDOMComponentsWithTag(rootReactComponent, action.tagName);
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
				
				TestUtils.Simulate.click(component);

				state.events.push( { type: action.type, component:action} );

				state = { ...state, clicks:state.clicks+1 };
				break;
		}
		
		return state;
	
	}
}

