// Libs

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../actions/index';

// import styles from './app.scss';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.handleSomething = this.handleSomething.bind(this);
	}

	handleSomething(): void {
		var a = Object.assign({}, this.props.data);
		a.isShown = a.isShown === true ? false : true;
		this.props.func(a.isShown);
	}

	render() {
		const show =
			this.props.data.isShown === true ? styles['isShown'] : styles['hidden'];

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
