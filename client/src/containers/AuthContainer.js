// Libs

//@flow
import React, { Component } from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

import * as actions from '../actions/index';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import * as actionCreators from '../actions/index';
import Logout from '../components/Logout/Logout';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';

import Protected from '../components/Protected/Protected';

class AuthContainer extends React.Component {
	constructor(props) {
		super(props);

		this.submitLogin = this.submitLogin.bind(this);
		this.submitRegister = this.submitRegister.bind(this);
		// this.submitLogout = this.submitLogout.bind(this);
	}

	submitLogin(values) {
		console.log(values);
		this.props.loginUser(values);
	}

	submitRegister(values) {
		console.log(values);
		this.props.registerUser(values);
	}

	// submitLogout() {
	// 	this.props.logoutUser();
	// }

	render() {
		let { match } = this.props;

		return (
			<div>
				<Route
					exact
					path={match.path}
					render={() => {
						return (
							<div>
								<Login onSubmit={this.submitLogin} />>
							</div>
						);
					}}
				/>

				<Route
					path={`${this.props.match.url}/login`}
					render={() => {
						return (
							<div>
								<Login onSubmit={this.submitLogin} />
							</div>
						);
					}}
				/>
				<Route
					path={`${this.props.match.url}/register`}
					render={() => {
						return (
							<div>
								<Register onSubmit={this.submitRegister} />
							</div>
						);
					}}
				/>

				<Route
					path={`${this.props.match.url}/logout`}
					render={() => {
						console.log(this.props);
						
						//this.submitLogout();
						return (
							
								Protected(this.props, Logout, `/`, true)
						);
					}}
				/>
			</div>
		);
	}
}
{/*<Logout logout={this.submitLogout}/>*/}
const mapStateToProps = state => ({
	state
});

export default connect(mapStateToProps, actions)(AuthContainer);
