// import initialState from '../store/initialState';

import INITIAL_APPLICATION_STATE from '../store/initialState.js';

import {
	SEARCH_USER_VAL,
	SEARCH_MESSAGE_VAL
} from '../actionsTypes/index.js';

export default function(state = INITIAL_APPLICATION_STATE, action) {
	switch (action.type) {
		case SEARCH_USER_VAL:
			console.log('SEARCH_USER_VAL');
			console.log(action.payload);

			{
				let clonedState = { ...state };

				clonedState.uiState.searchUserValue = action.payload;

				return clonedState;
			}

		case SEARCH_MESSAGE_VAL:
			console.log('SEARCH_MESSAGE_VAL');
			console.log(action.payload);

			{
				let clonedState = { ...state };

				clonedState.uiState.searchMessageValue = action.payload;

				return clonedState;
			}

		default:
			return state;
	}
}
