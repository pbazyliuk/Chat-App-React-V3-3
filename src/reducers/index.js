// import initialState from '../store/initialState';

import INITIAL_APPLICATION_STATE from '../store/applicationState';

import * as actionsTypes from '../actionsTypes/index.js';

console.error(INITIAL_APPLICATION_STATE);

export default function DefaultReducer(
	state = INITIAL_APPLICATION_STATE,
	action
) {
	switch (action.type) {
		case actionsTypes.DEFAULT_ACTION:
			return Object.assign({}, { isShown: action.val });

		default:
			return state;
	}
}
