// Libs

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import defaultReducer from './src/reducers/';
import { reducer as formReducer } from 'redux-form'

// Components
import AppContainer from './src/containers/AppContainer';

// CSS
import './style.scss';

const rootReducer = combineReducers({
	default: defaultReducer,
	form: formReducer
})


const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>, document.getElementById('root'));
