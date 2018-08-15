import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
>>>>>>> dev
import './index.css';
import rootReducer from './Redux/Reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
