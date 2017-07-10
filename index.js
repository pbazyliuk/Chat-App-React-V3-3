// Libs

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import defaultReducer from './src/reducers/';

// Components
import AppContainer from './src/containers/AppContainer';

// CSS
import './style.scss';

const store = createStore(defaultReducer);

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>, document.getElementById('root'));
