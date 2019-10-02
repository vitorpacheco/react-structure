import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './App.css';

import Routes from './routes';

import history from './services/history';

import { persistor, store } from './store';
import GlobalStyle from './styles/global';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<h1>Loading</h1>}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
