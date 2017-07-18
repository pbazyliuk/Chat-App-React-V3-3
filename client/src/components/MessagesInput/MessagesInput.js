import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import styles from './MessagesInput.scss';
import * as ws from '../../utils/utils';

class MessagesInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			message: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.clearInput = this.clearInput.bind(this);
	}

	handleChange(e) {
		// console.log(e.target.value);

		const msg = e.target.value;

		this.setState({
			message: msg
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		let user = JSON.parse(localStorage.getItem('user'));
		// user.message = this.state.message;
		// user.timestamp = Date.now();

		var obj = {};
		obj.chatId = undefined;
		obj.userId = user._id;
		obj.userName = user.firstname;
		obj.text = this.state.message;
		obj.timestamp = Date.now();

		// console.log(obj);

		ws.sendMessageWS(obj);
		//this.props.sendMessage(obj);
		this.clearInput();
	}

	clearInput() {
		this.setState({
			message: ''
		});
	}

	render() {
		return (
			<div className={styles['message-input-container']}>
				<form action="" onSubmit={this.handleSubmit}>
					<input
						value={this.state.message}
						onChange={this.handleChange}
						className={styles['message-input']}
						placeholder="Input your message"
					/>
					<button className={styles['message-btn-submit']}>Send</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, actions)(MessagesInput);
