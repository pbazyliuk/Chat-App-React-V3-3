// Libs

//@flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../actions/index';
import App from '../components/App';


class AppContainer extends React.Component {
	render() {
		const { dispatch, state } = this.props;
		const defaultAction = bindActionCreators(actionCreators.defaultAction, dispatch);
		return (
			<App data={state} func={defaultAction}/>
		);
	}
}

const mapStateToProps = (state) => ({
	state: state
})

export default connect(mapStateToProps)(AppContainer);
