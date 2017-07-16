import React from 'react';

import { history } from '../../history/history';

class Logout extends React.Component {
	componentDidMount() {
		// console.log(this.props);
		// this.props.logoutUser();
		setTimeout(() => { 
			history.push('/');
			this.props.logoutUser();
		}, 2500)
	}

	render() {
		return <div>Sorry to see you go!!!</div>;
	}

}

export default Logout;
