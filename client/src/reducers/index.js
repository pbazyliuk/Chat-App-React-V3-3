// // import initialState from '../store/initialState';

// import INITIAL_APPLICATION_STATE from '../store/initialState.js';

// import {
// 	AUTH_USER,
// 	UNAUTH_USER,
// 	AUTH_ERROR,
// 	GET_ALL_USERS,
// 	SEND_MESSAGE,
// 	GET_MESSAGES,
// 	SEARCH_USER_VAL,
// 	SEARCH_MESSAGE_VAL
// } from '../actionsTypes/index.js';

// export default function(state = INITIAL_APPLICATION_STATE, action) {
// 	switch (action.type) {
// 		case AUTH_USER: {
// 			// console.log(action.payload);
// 			console.log('auth');
// 			action.payload === undefined
// 				? (action.payload = JSON.parse(localStorage.getItem('user')))
// 				: localStorage.setItem('user', JSON.stringify(action.payload));

// 			let clonedState = { ...state };

// 			clonedState.uiState.error = '';
// 			clonedState.uiState.user = action.payload;
// 			clonedState.uiState.authenticated = true;

// 			return clonedState;
// 		}

// 		case UNAUTH_USER: {
// 			console.log('unauth');

// 			let clonedState = { ...state };

// 			clonedState.uiState.authenticated = false;
// 			clonedState.uiState.error = '';
// 			clonedState.storeData.users = [];
// 			clonedState.storeData.chats = [];
// 			clonedState.storeData.messages = [];
// 			clonedState.uiState.user = {};

// 			return clonedState;
// 		}

// 		case AUTH_ERROR:
// 			return { ...state, error: action.payload };

// 		case GET_ALL_USERS: {
// 			console.log('get all users');

// 			let clonedState = { ...state };

// 			clonedState.storeData.users = action.payload;

// 			return clonedState;
// 		}

// 		case SEND_MESSAGE: {
// 			console.log('SEND MESSAGE', action.payload);
// 			// return {
// 			// 	...state,
// 			// 	storeData: {
// 			// 		...state.storeData,
// 			// 		messages: [...state.storeData, messages]
// 			// 	}
// 			// };
// 			{
// 				let clonedState = { ...state };
// 				clonedState.storeData.messages = clonedState.storeData.messages.concat([
// 					action.payload
// 				]);
// 				// console.log(clonedState.storeData.messages);

// 				return clonedState;
// 			}
// 		}

// 		case GET_MESSAGES:
// 			console.log('GET_MESSAGES', action.payload);
// 			{
// 				let clonedState = { ...state };

// 				clonedState.storeData.messages = action.payload;

// 				return clonedState;
// 			}

// 		case SEARCH_USER_VAL:
// 			console.log('SEARCH_USER_VAL');
// 			console.log(action.payload);

// 			{
// 				let clonedState = { ...state };

// 				clonedState.uiState.searchUserValue = action.payload;

// 				return clonedState;
// 			}

// 		case SEARCH_MESSAGE_VAL:
// 			console.log('SEARCH_MESSAGE_VAL');
// 			console.log(action.payload);

// 			{
// 				let clonedState = { ...state };

// 				clonedState.uiState.searchMessageValue = action.payload;

// 				return clonedState;
// 			}

// 		default:
// 			return state;
// 	}
// }

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';
import messageReducer from './message';
import searchReducer from './search';
import usersReducer from './users';

const rootReducer = combineReducers({
	form: formReducer,
	applicationState: 
	authReducer,
	messageReducer,
	searchReducer,
	usersReducer
});

export default rootReducer;
