import React from 'react';

import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from 'react-router-dom';
import Chats from '../Chats/Chats';

const Protected = (props, Component, url, isAuthenticated) => {
	// console.log(props)
	let isProtected = isAuthenticated === true ? 
		props.state.applicationState.uiState.authenticated 
		:
		!props.state.applicationState.uiState.authenticated;

		console.log(Component)
		
	return isProtected === true ? <Component {...props} /> : <Redirect to={`${url}`} push />;
};

export default Protected;
