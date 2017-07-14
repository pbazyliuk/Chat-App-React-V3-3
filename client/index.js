// Libs

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import defaultReducer from './src/reducers/index';
import { reducer as formReducer } from 'redux-form';

// Components
import AppContainer from './src/containers/AppContainer';

// CSS
import './style.scss';

const rootReducer = combineReducers({
	applicationState: defaultReducer,
	form: formReducer
});

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

//const store = createStore(rootReducer);

ReactDOM.render(
	<Provider  store={createStoreWithMiddleware(rootReducer)}>
		<AppContainer />
	</Provider>,
	document.getElementById('root')
);
