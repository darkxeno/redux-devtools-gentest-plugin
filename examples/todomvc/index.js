import React from 'react';
import App from './containers/App';
import 'todomvc-app-css/index.css';

const rootComponent = React.render(
  <App />,
  document.getElementById('root')
);

export default rootComponent;