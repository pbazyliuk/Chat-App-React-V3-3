import React from 'react';

import MessagesNavbar from '../MessagesNavbar/MessagesNavbar';
import MessagesList from '../MessagesList/MessagesList';
import MessagesInput from '../MessagesInput/MessagesInput';
import ChatsHolder from '../ChatsHolder/ChatsHolder';

import { Route } from 'react-router-dom';

class ChatsDetails extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Route exact path="/chat" component={ChatsHolder} />
				<Route
					path="/chat/:id"
					render={({ match }) =>
						<div>
							<MessagesNavbar />
							<MessagesList id={match.params.id} />
							<MessagesInput />
						</div>}
				/>
			</div>
		);
	}
}

export default ChatsDetails;
