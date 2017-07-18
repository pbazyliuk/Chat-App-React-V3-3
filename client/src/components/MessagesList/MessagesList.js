import React from 'react';
import { connect } from 'react-redux';
import Message from '../Message/Message';

import MESSAGES from '../../data/messages.js';
import PropTypes from 'prop-types';

import * as actions from '../../actions/index';

import styles from './MessagesList.scss';

class MessagesList extends React.Component {
	constructor(props) {
		super(props);

		// this.messages = this.messages.bind(this);
	}

	componentWillMount() {
		this.props.getMessages();
	}

	// componentWillReceiveProps() {
	// 	this.props.getMessages();
	// }

	get messages() {
		const { messages, searchMessage } = this.props;

		return (
			<ul className={styles['message-list']}>
				{messages
					.filter(message => {
						// console.log(filterVal);
						if (searchMessage !== '') {
							const regex = new RegExp(searchMessage, 'i');
							if (regex.test(message.text) || regex.test(message.userName)) {
								return true;
							}
							return false;
						}
						return true;
					})
					.map(message => {
						return <Message message={message} />;
					})}
			</ul>
		);
	}

	render() {
		console.error('MESSAGES LIST', this.props);
		// const { searchMessage } = this.props;
		// console.log(searchMessage);
		// console.log(messages);
		return (
			<div>
				{/*<ul>
          {messages.map((message) => {
            return (<li>{message.userName}</li>)
          })}
        </ul>*/}
				{/* <div>ID: {this.props.id}</div> */}
				{this.messages}
			</div>
		);
	}
}

// MessagesList.propTypes = {
//   id: PropTypes.string.isRequired
// }

const mapStateToProps = state => {
	return {
		messages: state.applicationState.storeData.messages,
		searchMessage: state.applicationState.uiState.searchMessageValue
	};
};

export default connect(mapStateToProps, actions)(MessagesList);
