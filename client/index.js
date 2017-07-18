// Libs

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import defaultReducer from './src/reducers/index';
import { reducer as formReducer } from 'redux-form';

import {
	AUTH_USER,
	GET_MESSAGES
}	from './src/actionsTypes/index';

// Components
import AppContainer from './src/containers/AppContainer';

// CSS
import './style.scss';

const rootReducer = combineReducers({
	applicationState: defaultReducer,
	form: formReducer
});

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const token = localStorage.getItem('token');

const store = createStoreWithMiddleware(rootReducer);

if(token) {
	store.dispatch( {type: AUTH_USER} );
	// store.dispatch( {type: GET_MESSAGES });
}

ReactDOM.render(
	<Provider  store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('root')
);
