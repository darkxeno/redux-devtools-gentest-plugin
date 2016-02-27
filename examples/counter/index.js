import React from 'react';
import {default as App, store} from './containers/App';
//import { document } from './tests/window';

let rootComponent = React.render(
  <App />,
  document.getElementById('root')
);

/*if(window){
	window.rootComponent = rootComponent;
}*/

//export {store};
export default rootComponent;
