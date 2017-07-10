

import * as actionsTypes from '../actionsTypes/index.js';

export const defaultAction = (val) => {
	return {
		type: actionsTypes.DEFAULT_ACTION,
		val
	}
}
