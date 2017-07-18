import INITIAL_APPLICATION_STATE from '../store/initialState.js';

export default function(state = INITIAL_APPLICATION_STATE, action) {
	switch (action.type) {
		case SEND_MESSAGE: {
			console.log('SEND MESSAGE', action.payload);
			// return {
			// 	...state,
			// 	storeData: {
			// 		...state.storeData,
			// 		messages: [...state.storeData, messages]
			// 	}
			// };
			{
				let clonedState = { ...state };
				clonedState.storeData.messages = clonedState.storeData.messages.concat([
					action.payload
				]);
				// console.log(clonedState.storeData.messages);

				return clonedState;
			}
		}

		case GET_MESSAGES:
			console.log('GET_MESSAGES', action.payload);
			{
				let clonedState = { ...state };

				clonedState.storeData.messages = action.payload;

				return clonedState;
			}

		default:
			return state;
	}
}
