import {
	ADD_CHAT,
	GET_ALL_CHATS,
	SEND_PRIVATE_MESSAGE
} from '../actionsTypes/index.js';
import { List } from 'immutable';

export default function reducer(state = List([]), action) {
	switch (action.type) {
		case ADD_CHAT: {
			return state.push(action.payload);
		}

		case GET_ALL_CHATS: {
			return List(action.payload);
		}

		case SEND_PRIVATE_MESSAGE: {
			console.log('send private reducer');
			console.log(state);

			var chats = state.get(1);
			console.log(chats);
			return state;
		}

		default:
			return state;
	}
}
