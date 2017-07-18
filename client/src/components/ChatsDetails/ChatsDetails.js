import React from 'react';

import { connect } from 'react-redux';

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
				<MessagesNavbar />
				<MessagesList data={this.props.messages} />
				<MessagesInput />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { messages: state.applicationState.uiState.messages };
};

export default connect(mapStateToProps)(ChatsDetails);
