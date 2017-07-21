import React from 'react';

import PrivateMessagesNavbar from '../components/PrivateMessagesNavbar/PrivateMessagesNavbar';
import PrivateMessagesList from '../components/PrivateMessagesList/PrivateMessagesList';
import PrivateMessagesInput from '../components/PrivateMessagesInput/PrivateMessagesInput';

class PrivateChatContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<PrivateMessagesNavbar />
				<PrivateMessagesList />
				<PrivateMessagesInput />
			</div>
		);
	}
}

export default PrivateChatContainer;
