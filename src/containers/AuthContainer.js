// Libs

//@flow
import React, { Component } from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import * as actionCreators from '../actions/index';

import Login from '../components/Login/Login';
import Register from '../components/Register/Register';

class AuthContainer extends React.Component {
	constructor(props) {
		super(props);

	}

	submit(values) {
		console.log(values)
	}

	render() {
		let { match } = this.props;

		return (
			<div>
				<Route exact path={match.path} 	
					render={() => { 
							return ( 
							<div>
								<Login onSubmit={this.submit}/>>
							</div> ) } } />
				
				<Route path={`${this.props.match.url}/login`} 
					render={() => { 
						return ( 
						<div>
							<Login onSubmit={this.submit}/>>
						</div> ) } } />
      	<Route path={`${this.props.match.url}/register`} 
					render={() => { 
						return ( 
						<div>
							<Register onSubmit={this.submit}/>>
						</div> ) } } />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	state: state
});

export default connect(mapStateToProps)(AuthContainer);
