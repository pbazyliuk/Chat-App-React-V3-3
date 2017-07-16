import React from 'react';

import { history } from '../../history/history';

class Logout extends React.Component {
	componentDidMount() {
		// console.log(this.props);
		// //this.props.logoutUser();
		// this.props.logout();
		// setTimeout(() => { 
		
		this.props.logout();
		// }, 1500)
		setTimeout(() => { 
		
			history.push('/');
		}, 2000)
	}

	render() {
		return <div>Sorry to see you go!!!</div>;
	}

}

export default Logout;
