// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// Reducers
import postReducer from './store/reducers/post';

import App from './App';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

// Redux developer tool
const composeEnhancers =
    process.env.NODE_ENV === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        : null;

// Ensure app doesn't crash in production environment
let middleware = applyMiddleware(thunk);

// Redux middleware
if (composeEnhancers) {
    middleware = composeEnhancers(applyMiddleware(thunk));
}

const rootReducer = combineReducers({
    postReducer
});

const store = createStore(rootReducer, middleware);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
