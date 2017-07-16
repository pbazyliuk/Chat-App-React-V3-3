// import initialState from '../store/initialState';

import INITIAL_APPLICATION_STATE from '../store/initialState.js';

import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../actionsTypes/index.js';

console.error(INITIAL_APPLICATION_STATE);

export default function(state = INITIAL_APPLICATION_STATE, action) {
	switch (action.type) {
		case AUTH_USER:
			{console.log(action.payload);
			
			let clonedState = { ...state };
			
			console.error(clonedState);

			clonedState.uiState.user = action.payload;
			clonedState.uiState.authenticated = true;

			return clonedState;}

		case UNAUTH_USER:
			{console.log('unauth');
			
			let clonedState = { ...state };
			
			clonedState.uiState.authenticated = false;
			clonedState.uiState.user = {};
			return clonedState;}

		case AUTH_ERROR:
			return { ...state, error: action.payload };

		default:
			return state;
	}
}
