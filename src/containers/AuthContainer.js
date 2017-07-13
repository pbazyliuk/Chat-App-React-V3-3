// Libs

//@flow
import React, { Component } from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

import * as actions from '../actions/index';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import * as actionCreators from '../actions/index';

import Login from '../components/Login/Login';
import Register from '../components/Register/Register';

class AuthContainer extends React.Component {
	constructor(props) {
		super(props);

		this.submit = this.submit.bind(this);
	}

	submit(values) {
		console.log(values);

		this.props.registerUser(values);
		
	}

	render() {
		let { match } = this.props;
		console.log('1111', this.props)
		return (
			<div>
				<Route
					exact
					path={match.path}
					render={() => {
						return (
							<div>
								<Login onSubmit={this.submit} />>
							</div>
						);
					}}
				/>

				<Route
					path={`${this.props.match.url}/login`}
					render={() => {
						return (
							<div>
								<Login onSubmit={this.submit} />>
							</div>
						);
					}}
				/>
				<Route
					path={`${this.props.match.url}/register`}
					render={() => {
						return (
							<div>
								<Register onSubmit={this.submit} />>
							</div>
						);
					}}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	state
});

export default connect(mapStateToProps, actions)(AuthContainer);
