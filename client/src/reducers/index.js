// import initialState from '../store/initialState';

import INITIAL_APPLICATION_STATE from '../store/initialState.js';

import {
	AUTH_USER,
  	UNAUTH_USER,
 	AUTH_ERROR
} from '../actionsTypes/index.js';

console.error(INITIAL_APPLICATION_STATE);

export default function (
	state = INITIAL_APPLICATION_STATE,
	action
) {
	switch (action.type) {
		case AUTH_USER:
			return { ...state, error: '', authenticated: true };

		default:
			return state;
	}
}
