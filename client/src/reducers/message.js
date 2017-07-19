import INITIAL_APPLICATION_STATE from '../store/initialState.js';

import { SEND_MESSAGE, GET_MESSAGES } from '../actionsTypes/index.js';

export default function reducer(state = [], action) {
	switch (action.type) {
		case SEND_MESSAGE: {
			return state.concat([action.payload]);
		}
		case GET_MESSAGES: {
			console.log('Get Messages action');
			return action.payload;
		}
		default:
			return state;
	}
}
