import axios from 'axios';
import { history } from '../history/history';

import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../actionsTypes/index.js';

const ROOT_URL = 'http://localhost:8090';

export function registerUser({ firstname, lastname, email, password }) {
	console.error('action register');
	return function(dispatch) {
		axios
			.post(`${ROOT_URL}/register`, { firstname, lastname, email, password })
			.then(response => {
				dispatch({ type: AUTH_USER, payload: response.data.user });
				localStorage.setItem('token', response.data.token);

				history.push('/chat');
			})
			.catch(() => {
				// If request is bad...
				// - Show an error to the user
				dispatch(authError('Bad Register Info'));
			});
	};
}
