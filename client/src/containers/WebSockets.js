import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import * as ws from '../utils/utils';
import { Map } from 'immutable';

class WebSockets extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		const { user } = this.props;
		const chatName = this.props.chatName;

		console.log('wschatName, ', chatName);

		if (user) {
			const {
				sendMessage,
				joinChat,
				leaveChat,
				getAllUsers,
				getMessages,
				getAllChats,
				addChat
			} = this.props;

			console.error('COMPONENT WILL MOUNT');

			if (chatName === 'general') {
				console.log('initConnection');
				ws.initConnection();

				ws.addListener('message', sendMessage);
				ws.addListener('chat', addChat);

				ws.addListener('join', getAllUsers);
				ws.addListener('join', getMessages);
				ws.addListener('join', getAllChats);

				ws.addListener('leave', getAllUsers);
				ws.addListener('leave', getMessages);
			} else {
				ws.disconnect();
			}
		}
	}

	componentWillUnmount() {
		console.error('COMPONENT WILL Un MOUNT');

		ws.disconnect();
	}

	shouldComponentUpdate() {
		return false;
	}

	render() {
		return null;
	}

	render() {
		return null;
	}
}

const mapStateToProps = state => {
	return { user: state.auth.get('user'), chatName: state.auth.get('chatName') };
};

export default connect(mapStateToProps, actions)(WebSockets);
