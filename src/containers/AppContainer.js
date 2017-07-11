// Libs

//@flow
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../actions/index';

import App from '../components/App';
import Navbar from '../components/Navbar/Navbar';

import Home from '../components/Home/Home';
import Chat from '../components/Chat/Chat';
// import Login from '../components/Login/Login';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import AuthContainer from './AuthContainer/AuthContainer';

class AppContainer extends React.Component {
	render() {
		// const { dispatch, state } = this.props;
		// const defaultAction = bindActionCreators(actionCreators.defaultAction, dispatch);
		return (
			<BrowserRouter>
				{/*<App data={state} func={defaultAction}/> */}
				<div>
					<Navbar />
					<Switch>
						<Route exact path="/" component={ Home } />
						<Route exact path="/chat" component={ Chat } />
						<Route path="/auth" component={ AuthContainer } />
						
						<Route component={ PageNotFound } />											
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = state => ({
	state: state
});

export default connect(mapStateToProps)(AppContainer);
