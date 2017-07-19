import INITIAL_APPLICATION_STATE from '../store/initialState.js';

import { GET_ALL_USERS } from '../actionsTypes/index.js';

export default function(state = [], action) {
	switch (action.type) {
		case GET_ALL_USERS: {
			return [...action.payload];
		}

		default:
			return state;
	}
}
