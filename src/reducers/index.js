import initialState from '../store/initialState';

import * as actionsTypes from '../actionsTypes/index.js';

export default function DefaultReducer(state = initialState, action) {
	console.log(actionsTypes.DEFAULT_ACTION);
	console.log(action.type);
	switch (action.type) {

	case actionsTypes.DEFAULT_ACTION:
		console.error(action)

		return [{isShown: action.val}];

	default:
		return state;
	}
}
