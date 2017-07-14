import React from 'react';

import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from 'react-router-dom';
import Chats from '../Chats/Chats';

const Protected = props => {
	const isProtected = props.data.state.applicationState.uiState.authenticated;
	return isProtected === true ? <Chats /> : <Redirect to="/auth/login" push />;
};

export default Protected;
