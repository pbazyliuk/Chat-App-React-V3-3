// //@flow
// export type User = {
// 	_id: string,
// 	firstname: string,
// 	lastname: string,
// 	email: string,
// 	isLogged: boolean
// };

// export type UiState = {
// 	user: User,
// 	authenticated: boolean,
// 	currentChat: string
// };

const INITIAL_UI_STATE = {
	user: {},
	error: '',
	authenticated: false,
	currentChat: null,
	searchUserValue: '',
	searchMessageValue: ''
};

export default INITIAL_UI_STATE;
