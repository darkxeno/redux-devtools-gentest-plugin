const React = require('react/addons');
const TestUtils = React.addons.TestUtils;

let rootComponent;

function getTargetReactComponent(action) {

	const components = TestUtils.scryRenderedDOMComponentsWithTag(rootComponent, action.tagName);
	//const reactId = action.reactId.replace(/^\.[0-Z]*\.(.*)$/, mainId+'.$1');
	const { reactId, targetId } = action;

	console.log('Found [',action.tagName,'] components:',components.length,' looking for:',reactId);
		
	//const app = TestUtils.scryRenderedComponentWithType(App);
	const component = components.filter((component)=>{
		
		if(targetId){
			console.log('component Rid',component.getDOMNode().getAttribute('id'));
			return component.getDOMNode().getAttribute('id')===targetId;
		} else {
			console.log('component Rid',component.getDOMNode().getAttribute('data-reactid'));
			return component.getDOMNode().getAttribute('data-reactid')===reactId;	
		}
	}).pop();

	console.log('Found component: [',action.tagName,reactId,']');
	const isDOMComponent = TestUtils.isDOMComponent(component);
	console.log('isDOMComponent:',isDOMComponent);

	if(isDOMComponent){
		console.log('Found component: ',component.getDOMNode().outerHTML);	
	}

	return component;
}


export default function create(rootReactComponent){

	if(!rootReactComponent || !TestUtils.isCompositeComponent(rootReactComponent)){
			throw new Error('Invalid react root component specified');
	}	

	rootComponent = rootReactComponent;

  return function playEvents(state={ clicks:0, changes:0, others:0, events:[] }, action) {

  	if(!action.tagName){
  		return state;
  	}

  	console.log('playing event recorded:',action);  

	  const component = getTargetReactComponent(action);

	  if(!component){
	  	throw new Error('Target react component not found',action);
	  }

	  switch (action.type) {
		  case 'topClick':

				TestUtils.Simulate.click(component);
				state.events.push( { type: action.type, component:action} );
				state = { ...state, clicks:state.clicks+1 };
			break;
		  case 'topChange':
		  	const node = component.getDOMNode();
		  	node.value = action.value;
				TestUtils.Simulate.change(node);
				state.events.push( { type: action.type, component:action} );
				state = { ...state, changes:state.changes+1 };
			break;			
		}
		
		return state;
	
	}
}

