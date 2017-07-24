import React from 'react';

import MessagesNavbar from '../components/MessagesNavbar/MessagesNavbar';
import MessagesList from '../components/MessagesList/MessagesList';
import MessagesInput from '../components/MessagesInput/MessagesInput';

class CommonChatContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillReceiveProps(newProps) {
		console.log('CommonChatContainer', newProps);
	}

	render() {
		// console.log('CommonChatContainer', this.props);

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
