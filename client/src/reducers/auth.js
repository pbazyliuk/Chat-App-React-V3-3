import INITIAL_APPLICATION_STATE from '../store/initialState.js';

import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../actionsTypes/index.js';

export default function(
	state = { user: null, authenticated: false, error: '' },
	action
) {
	switch (action.type) {
		case AUTH_USER: {
			if (!action.payload) {
				action.payload = JSON.parse(localStorage.getItem('user'));
			}
			return {
				...state,
				user: action.payload,
				error: '',
				authenticated: true
			};
		}
		case UNAUTH_USER: {
			return {
				...state,
				user: null,
				authenticated: false
			};
		}
		case AUTH_ERROR:
			return { ...state, error: action.payload };

		default:
			return state;
	}
}
