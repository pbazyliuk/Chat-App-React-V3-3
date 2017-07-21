import React from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions/index';

import * as ws from '../utils/utils';

import ChatsMenu from '../components/ChatsMenu/ChatsMenu';

class ChatsMenuContainer extends React.Component {
	constructor(props) {
		super(props);

		this.handleAddChat = this.handleAddChat.bind(this);
		this.handleMenuShow = this.handleMenuShow.bind(this);
	}

	handleMenuShow() {
		this.props.onMenuShow();
	}

	handleAddChat(values) {
		console.log(values);
		console.log('999', this.props);
		let curUserId = localStorage.getItem('user');
		if (!values.users.includes(curUserId)) values.users.push(curUserId);

		// this.props.addChat(values);
		ws.sendChat(values);
		this.handleMenuShow();
		this.props.resetAddChatForm('addChat');
	}

	render() {
		return <ChatsMenu onSubmit={this.handleAddChat} {...this.props} />;
	}
}

const mapStateToProps = state => {
	return {
		value: state.auth.get('error')
	};
};

export default connect(mapStateToProps, actions)(ChatsMenuContainer);
