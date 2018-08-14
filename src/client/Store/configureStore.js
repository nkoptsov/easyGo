import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));
  const persistor = persistStore(store);

  return { store, persistor };
};

// const configureStore = () => {
//   const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//   return { store };
// };



export default configureStore;
