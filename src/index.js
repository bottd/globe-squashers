import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import {BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk';
import App from './components/App';
import './index.css';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
