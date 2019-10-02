import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import createStore from './createStore';
import persistReducers from './persistReducers';
import rootReducer from './modules/rootReducer';

const middlewares = [thunk];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

export { store, persistor };
