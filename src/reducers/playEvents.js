const React = require('react/addons');
const TestUtils = React.addons.TestUtils;

let rootComponent;

function getTargetReactComponent(action) {

	let components;

	if(action.className) {
		components = TestUtils.scryRenderedDOMComponentsWithClass(rootComponent, action.className);
	} else {
		components = TestUtils.scryRenderedDOMComponentsWithTag(rootComponent, action.tagName);
	}

	//const reactId = action.reactId.replace(/^\.[0-Z]*\.(.*)$/, mainId+'.$1');
	const { reactId, targetId } = action;

	//console.log('Found [',action.tagName,'] components:',components.length,' looking for:',reactId);
		
	//const app = TestUtils.scryRenderedComponentWithType(App);
	const component = components.filter((component)=>{
		
		if(targetId){
			return component.getDOMNode().getAttribute('id')===targetId;
		} else {
			return component.getDOMNode().getAttribute('data-reactid')===reactId;	
		}
	}).pop();

	//console.log('Found component: [',action.tagName,reactId,']');
	const isDOMComponent = TestUtils.isDOMComponent(component);

	//if(isDOMComponent){
	//	console.log('Found component: ',component.getDOMNode().outerHTML);	
	//}

	return component;
}


export default function create(rootReactComponent){

	if(!rootReactComponent || !TestUtils.isCompositeComponent(rootReactComponent)){
			throw new Error('Invalid react root component specified');
	}	

	rootComponent = rootReactComponent;

  return function playEvents(state={ clicks:0, changes:0, others:0 }, action) {

  	if(!action.tagName && !action.className){
  		return state;
  	}

  	//console.log('playing event recorded:',action);  

	  const component = getTargetReactComponent(action);

	  if(!component){
	  	console.error('Target react component not found',action);
	  	throw new Error('Target react component not found, missing id attribute?');
	  }

	  const node = component.getDOMNode();

	  switch (action.type) {
		  case 'topDoubleClick':
				TestUtils.Simulate.doubleClick(component);
				//state.events.push( { type: action.type, component:action} );
				state = { ...state, clicks:state.clicks+1 };
			break;	  	
		  case 'topClick':
		  	if(node.tagName === 'INPUT' && node.type === 'checkbox'){
		  		node.value = action.value;
					TestUtils.Simulate.change(component);
				} else {
					TestUtils.Simulate.click(component);
				}
				//state.events.push( { type: action.type, component:action} );
				state = { ...state, clicks:state.clicks+1 };
			break;
		  case 'topFocus':

				TestUtils.Simulate.focus(component);
				//state.events.push( { type: action.type, component:action} );
				state = { ...state, others:state.others+1 };
			break;			
		  case 'topChange':
			case 'topInput':{
				const eventName = action.type === 'topChange' ? 'change' : 'input';		  	
		  	
		  	if(eventName!=='change' || node.tagName !== 'INPUT' && node.type !== 'checkbox'){
		  		node.value = action.value;
					TestUtils.Simulate.change(node);
					state = { ...state, changes:state.changes+1 };
				}
				//state.events.push( { type: action.type, component:action} );
				
			}
			break;	
			case 'topKeyDown':
		  case 'topKeyUp':{
		  	const eventName = action.type === 'topKeyDown' ? 'keyDown' : 'keyUp';
				TestUtils.Simulate[eventName](node, action.eventData);
				//state.events.push( { type: action.type, component:action} );
				state = { ...state, others:state.others+1 };
			}
			break;					
		}
		
		return state;
	
	}
}

