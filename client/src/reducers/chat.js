import { ADD_CHAT, GET_ALL_CHATS } from '../actionsTypes/index.js';
import { List } from 'immutable';

export default function reducer(state = List([]), action) {
	switch (action.type) {
		case ADD_CHAT: {
			return state.push(action.payload);
		}

		case GET_ALL_CHATS: {
			return List(action.payload);
		}

		default:
			return state;
	}
}
