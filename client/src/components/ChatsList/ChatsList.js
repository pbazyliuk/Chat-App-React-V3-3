import React from 'react';

import { connect } from 'react-redux';

import Chat from '../Chat/Chat';

import * as actions from '../../actions/index';
import { Map } from 'immutable';

import styles from './ChatsList.scss';

class ChatsList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const isVisible = {
			display: 'none'
		};

		const { chats, user } = this.props;

		const userFirstname = user.get('firstname');

		console.log('CHAT LIST', chats);

		return (
			<ul
				className={styles['chat-list']}
				style={this.props.data.isMenuShown ? isVisible : {}}
			>
				{chats
					.filter(chat => {
						if (chat.usersNames.includes(userFirstname)) return true;
					})
					.map(function(chat) {
						console.log(chat);
						return <Chat {...chat} key={chat._id} />;
					})}
			</ul>
		);
	}
}

const mapStateToProps = state => {
	return {
		chats: [...state.chats],
		user: state.auth.get('user')
	};
};

export default connect(mapStateToProps, actions)(ChatsList);
