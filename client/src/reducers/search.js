// import initialState from '../store/initialState';

import INITIAL_APPLICATION_STATE from '../store/initialState.js';

import { SEARCH_USER_VAL, SEARCH_MESSAGE_VAL } from '../actionsTypes/index.js';

export default function(
	state = { searchUserValue: '', searchMessageValue: '' },
	action
) {
	switch (action.type) {
		case SEARCH_USER_VAL: {
			return {
				...state,
				searchUserValue: action.payload
			};
		}

		case SEARCH_MESSAGE_VAL: {
			return {
				...state,
				searchMessageValue: action.payload
			};
		}

		default:
			return state;
	}
}
