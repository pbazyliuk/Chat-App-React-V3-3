// Libs

import React from 'react';
import { Router } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CommonChatContainer from './CommonChatContainer';
import PrivateChatContainer from './PrivateChatContainer';

class MainChatsContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Route exact path="/chat" component={CommonChatContainer} />
				<Route path="/chat/:id" component={PrivateChatContainer} />
			</div>
		);
	}
}

export default MainChatsContainer;
