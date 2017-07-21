import React from 'react';

import MessagesNavbar from '../components/MessagesNavbar/MessagesNavbar';
import MessagesList from '../components/MessagesList/MessagesList';
import MessagesInput from '../components/MessagesInput/MessagesInput';

class CommonChatContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<MessagesNavbar />
				<MessagesList />
				<MessagesInput />
			</div>
		);
	}
}

export default CommonChatContainer;
