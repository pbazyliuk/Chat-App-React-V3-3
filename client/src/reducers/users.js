import INITIAL_APPLICATION_STATE from '../store/initialState.js';

import {
	GET_ALL_USERS
} from '../actionsTypes/index.js';

export default function(state = INITIAL_APPLICATION_STATE, action) {
	switch (action.type) {
		
		case GET_ALL_USERS: {
			console.log('get all users');

			let clonedState = { ...state };

			clonedState.storeData.users = action.payload;

      return clonedState;
      
    
		}