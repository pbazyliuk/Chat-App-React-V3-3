
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import * as ws from '../utils/utils';

class WebSockets extends React.Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        const { user } = this.props;

		if (user) {
			const { sendMessage, joinChat, leaveChat } = this.props;

			console.error('COMPONENT WILL MOUNT');

			ws.initConnection();

			// ws.addListener('message', sendMessage);
			ws.addListener('join', joinChat);
			ws.addListener('leave', leaveChat);
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
        return (
            null
        )
    }
}


const mapStateToProps = state => {
	return { user: state.applicationState.uiState.user };
};

export default connect(mapStateToProps, actions)(WebSockets);