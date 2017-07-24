import axios from 'axios';
import { history } from '../history/history';
import { reset } from 'redux-form';
import * as ws from '../utils/utils';

import {
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR,
	GET_ALL_USERS,
	JOIN_CHAT,
	SEND_MESSAGE,
	LEAVE_CHAT,
	GET_MESSAGES,
	SEARCH_MESSAGE_VAL,
	SEARCH_USER_VAL,
	SAVE_AUTH_USER,
	ADD_CHAT,
	GET_ALL_CHATS,
	SEND_PRIVATE_MESSAGE,
	UPDATE_CHATNAME
} from '../actionsTypes/index.js';

const ROOT_URL = 'http://localhost:8090';

export function registerUser({ firstname, lastname, email, password }) {
	console.error('action register');
	return function(dispatch) {
		axios
			.post(`${ROOT_URL}/register`, { firstname, lastname, email, password })
			.then(response => {
				localStorage.setItem('token', response.data.token);
				localStorage.setItem('user', JSON.stringify(response.data.user));
				dispatch({ type: AUTH_USER, payload: response.data.user });

				history.push('/chat');
			})
			.catch(() => {
				// If request is bad...
				// - Show an error to the user
				dispatch(authError('Bad Register Info'));
			});
	};
}

export function loginUser({ email, password }) {
	return function(dispatch) {
		// Submit email/password to the server
		axios
			.post(`${ROOT_URL}/login`, { email, password })
			.then(response => {
				// If request is good...
				// - Update state to indicate user is authenticated
				// - Save the JWT token
				localStorage.setItem('token', response.data.token);
				localStorage.setItem('user', JSON.stringify(response.data.user));

				dispatch({ type: AUTH_USER, payload: response.data.user });

				// - redirect to the route '/chats'
				history.push('/chat');
			})
			.catch(() => {
				// If request is bad...
				// - Show an error to the user
				dispatch(authError('Bad Login Info'));
			});
	};
}

export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	};
}

export function logoutUser() {
	localStorage.removeItem('token');
	localStorage.removeItem('user');

	console.log(ws.socket);

	return { type: UNAUTH_USER };
}

export function getAllUsers() {
	return function(dispatch) {
		// Submit email/password to the server
		console.error('get all user action', localStorage.getItem('token'));
		axios
			.get(`${ROOT_URL}/api/users`, {
				headers: {
					'Content-Type': 'application/json',
					authorization: localStorage.getItem('token')
				}
			})
			.then(response => {
				// If request is good...
				// - Update state to indicate user is authenticated
				console.error('Get All Users Action', response.data);
				dispatch({ type: GET_ALL_USERS, payload: response.data });
			})
			.catch(() => {
				// If request is bad...
				// - Show an error to the user
				dispatch(authError('Some problems occurs with users fetch action'));
			});
	};
}

export function sendMessage(data) {
	return function(dispatch) {
		console.log('send message', data);
		dispatch({ type: SEND_MESSAGE, payload: data });
	};
}

export function getMessages() {
	return function(dispatch) {
		axios
			.get(`${ROOT_URL}/api/messages`)
			.then(response => {
				// If request is good...
				// - Update state to indicate user is authenticated
				console.error('Get Messages', response.data);
				dispatch({ type: GET_MESSAGES, payload: response.data });
			})
			.catch(e => {
				console.log('ERROR', e);
				// If request is bad...
				// - Show an error to the user
				dispatch(authError('Some problems occurs with users send message!'));
			});
	};
}

export function searchUserVal(value) {
	return function(dispatch) {
		dispatch({ type: SEARCH_USER_VAL, payload: value });
	};
}

export function searchMessageVal(value) {
	return function(dispatch) {
		dispatch({ type: SEARCH_MESSAGE_VAL, payload: value });
	};
}

export function addChat(data) {
	return function(dispatch) {
		// dispatch({ type: ADD_CHAT, payload: data });
		console.log('add chat action');

		dispatch({ type: ADD_CHAT, payload: data });
	};
}

export function getAllChats(data) {
	return function(dispatch) {
		// dispatch({ type: ADD_CHAT, payload: data });
		console.log('get chat action');
		axios
			.get(`${ROOT_URL}/api/chats`)
			.then(response => {
				// If request is good...
				// - Update state to indicate user is authenticated
				console.error('Get All Chats', response.data);
				// resetAddChatForm('addChat');
				dispatch({ type: GET_ALL_CHATS, payload: response.data });
				// var error = '';
				// dispatch({ type: SEND_MESSAGE, payload: '' });
			})
			.catch(() => {
				// If request is bad...
				// - Show an error to the user
				dispatch(authError('Bad data submited...'));
			});
	};
}

export function resetAddChatForm(name) {
	console.log('911');
	return function(dispatch) {
		dispatch(reset(name));
	};
}

export function sendPrivateMessage(message, room) {
	console.log('send private message action: ' + message + room);
	return function(dispatch) {
		dispatch({ type: SEND_PRIVATE_MESSAGE, payload: [message, room] });
	};
}

export function updateChatname(params) {
	dispatch({ type: UPDATE_CHATNAME, payload: params });
}
