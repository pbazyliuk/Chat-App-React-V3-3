// Libs

//@flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../actions/index';

import styles from './one.scss';

class App extends React.Component {
	constructor(props) {
		super(props);
	
		
		this.handleSomething = this.handleSomething.bind(this)
	}

	handleSomething() {
		let val = this.props.data.state.isShown;

		console.log(!val);

		this.props.func(!val);
	}

	render() {
		const show = this.props.data.isShown === true ? styles['isShown'] : styles['hidden'];
		
		return (
			<div className="scoreboard">
				<h1>hello it's me - a react starter app file!!!</h1>
				<h2 className={show}>Hidden</h2> 
				<button onClick={this.handleSomething}>Show Hidden</button>
			</div>
		);
	}
}

export default App;
