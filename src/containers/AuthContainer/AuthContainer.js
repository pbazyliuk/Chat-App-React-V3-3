// Libs

//@flow
import React, { Component } from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import * as actionCreators from '../actions/index';

import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

class AuthContainer extends React.Component {
	constructor(props) {
		super(props);

	}
	render() {
		let { match } = this.props;
		// const { dispatch, state } = this.props;
		// const defaultAction = bindActionCreators(actionCreators.defaultAction, dispatch);
		return (
			<div>
				<Route exact path={match.path} component={ Login }  />
				
				<Route path={`${this.props.match.url}/login`} component={ Login } />
      	<Route path={`${this.props.match.url}/register`} component={ Register } />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	state: state
});

export default connect(mapStateToProps)(AuthContainer);
