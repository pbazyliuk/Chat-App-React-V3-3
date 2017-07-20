import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../actionsTypes/index.js';
import { Map } from 'immutable';

export default function(
	state = Map({ user: null, authenticated: false, error: '' }),
	action
) {
	switch (action.type) {
		case AUTH_USER: {
			if (!action.payload) {
				action.payload = JSON.parse(localStorage.getItem('user'));
			}

			return state.merge({
				authenticated: true,
				user: Map(action.payload),
				error: ''
			});
		}

		case UNAUTH_USER: {
			return state.merge({
				user: null,
				authenticated: false,
				error: ''
			});
		}
		case AUTH_ERROR:
			return state.set("error", action.payload);
			
		default:
			return state;
	}
}
