import React from 'react'
import Login from '../components/Login/Login';
import {connect} from "react-redux"
import { withRouter } from 'react-router'
class LoginContainer extends React.Component {
	submit(values) {
		console.log(values)
	}

	render() {
		return (
			<Login onSubmit={this.submit} />


		)
	}
}


export default LoginContainer;