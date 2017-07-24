import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import * as ws from '../utils/utils';
import { Map } from 'immutable';

class WebSocketsPrivate extends React.Component {
	constructor(props) {
		super(props);

		// this.paramsVal = this.props.match.params;
	}

	componentDidUpdate() {
		const { user, params } = this.props;

		console.error('PRIVATE CHAT', params);
		console.error('PRIVATE CHAT', this.paramsVal);

		if (user) {
			const { sendPrivateMessage } = this.props;
			// console.log(this.props);
			console.error('COMPONENT PRIVATE WILL MOUNT');
			// if (lastparams && lastparams !== params) {
			// 	ws.disconnectPrivate();
			// 	console.log('lastparams', lastparams);
			// }

			ws.initPrivateConnection('', params.id);
			var lastparams = params.id;
			ws.addListener('private-message', sendPrivateMessage);
		}
	}

	// componentDidUpdate(prevProps) {
	// 	if(prevProps.chatId != this.props.chatId) {

	// 	}
	// }

	componentWillUnmount() {
		console.error('COMPONENT Private WILL Un MOUNT');

		ws.disconnectPrivate();
	}

	// shouldComponentUpdate() {
	// 	return false;
	// }

	render() {
		return null;
	}

	render() {
		return null;
	}
}

const mapStateToProps = state => {
	return { user: state.auth.get('user'), chatId: "" };
};

export default connect(mapStateToProps, actions)(WebSocketsPrivate);
