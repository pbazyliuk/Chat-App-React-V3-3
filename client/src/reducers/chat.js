import { ADD_CHAT } from '../actionsTypes/index.js';
import { List } from 'immutable';

export default function reducer(state = List([]), action) {
	switch (action.type) {
		case ADD_CHAT: {
			return state.push(action.payload);
			// return state.concat([action.payload]);
		}
		default:
			return state;
	}
}
