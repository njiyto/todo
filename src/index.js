import React from 'react';
import { render } from 'react-dom';
import App from './Hello';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import redusers from './redusers/index';

const store = createStore(redusers);

render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('root'));

