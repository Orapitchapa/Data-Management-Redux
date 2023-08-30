import React from 'react';
import ReactDOM from 'react-dom';
import './i18n'
import { Provider } from 'react-redux';
import App from './App';
import store from '../SRC/components/redux/Store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);