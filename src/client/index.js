import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import Store from './store';

const StoreInstanse = Store();


ReactDOM.render(
  <Provider store={StoreInstanse}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
