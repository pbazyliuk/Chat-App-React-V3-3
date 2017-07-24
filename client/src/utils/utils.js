import io from 'socket.io-client';
export {
	sendMessageWS,
	initConnection,
	addListener,
	socketRoot,
	disconnect,
	sendChat
};

let socketRoot;
let socketPrivateRoot;
let lastRoom;

let listeners = {};

function initConnection(message) {
	console.error('SOCKET', socketRoot);

	if (!socketRoot) {
		// console.error('New Socket');
		connect();
	}

	if (message) {
		send(message);
	}
}

function connect() {
	console.log('ws connect');
	socketRoot = io('http://localhost:8090/root');

	socketRoot.on('connect', function() {
		socketRoot
			.on('authenticated', function() {
				console.log('authenticated client');
			})
			.emit('authenticate', { token: localStorage.getItem('token') })
			.on('join', function(val) {
				console.log('join', val.user);

				onJoin(val.user);
			})
			.on('leave', function(val) {
				console.log('leave', val.user);

				onLeave(val.user);
			})
			.on('message', function(message) {
				console.log('message', message);

				onMessage(message);
			})
			.on('chat', function(message) {
				console.log('chat', message);

				onChat(message);
			});

		// socket.on('message', onMessage);
		// socket.on('join', onJoin);
		// socket.on('leave', onLeave);
	});
}

function onMessage(msg) {
	console.log('onMessage', msg);
	fireListeners('message', msg);
}

function onChat(msg) {
	console.log('onChat', msg);
	fireListeners('chat', msg);
}

function onJoin(username) {
	console.log('onJoin', username);
	fireListeners('join', username);
}

function onLeave(username) {
	console.log('onLeave');
	fireListeners('leave', username);
}

function disconnect() {
	// socket.close();
	socketRoot.disconnect();
	socketRoot = null;
	listeners = {};
}

function send(message) {
	console.log('send to server', message);
	socketRoot.emit('message', message);
}

function sendChat(chat) {
	console.log('send to server chat', chat);
	socketRoot.emit('chat', chat);
}

function sendMessageWS(message) {
	console.log('send message', message);
	initConnection(message);
}

function fireListeners(event, ...payload) {
	console.log('event', event);
	console.log('payload', ...payload);
	console.log('listeners', listeners);
	if (listeners[event]) {
		console.log([...listeners[event]]);
		[...listeners[event]].forEach(listener => {
			listener(...payload);
		});
	}
}

function addListener(event, listener) {
	if (!listeners[event]) {
		listeners[event] = [];
	}
	listeners[event].push(listener);
}

// function initPrivateConnection(message, room) {
// 	if (lastRoom && lastRoom !== room) {
// 		disconnectPrivate();
// 	}

// 	if (!socketPrivateRoot) {
// 		connectPrivate(room);
// 	}

// 	if (message && room) {
// 		sendPrivate(message, room);
// 	}

// 	lastRoom = room;
// }

// function connectPrivate(room) {
// 	console.log('ws private connect', room);
// 	socketPrivateRoot = io('http://localhost:8090/privatechat');

// 	socketPrivateRoot.on('connect', function() {
// 		socketPrivateRoot
// 			.emit('room', room)
// 			// .on('authenticated', function() {
// 			// 	console.log('authenticated client');
// 			// })
// 			// .emit('authenticate', { token: localStorage.getItem('token') })
// 			.on('join', function(val) {
// 				console.log('join room', val.user);

// 				onJoinRoom(val.user);
// 			})
// 			.on('leave', function(val) {
// 				console.log('leave room', val.user);

// 				onLeaveRoom(val.user);
// 			})
// 			// .on('leave', function(val) {
// 			// 	console.log('leave', val.user);

// 			// 	onLeave(val.user);
// 			// })
// 			.on('private-message', function(message, room) {
// 				console.log('private-message client', message, room);

// 				onPrivateMessage(message, room);
// 			});
// 		// .on('chat', function(message) {
// 		// 	console.log('chat', message);

// 		// 	onChat(message);
// 		// });

// 		// socket.on('message', onMessage);
// 		// socket.on('join', onJoin);
// 		// socket.on('leave', onLeave);
// 	});
// }

// function sendPrivate(message, room) {
// 	console.log('send to server private msg', message, room);
// 	socketPrivateRoot.emit('private-message', message, room);
// }

// function onJoinRoom(username) {
// 	console.log('onJoinRoom', username);
// 	//fireListeners('join', username);
// }

// function onLeaveRoom(username) {
// 	console.log('onLeaveRoom', username);
// 	//fireListeners('join', username);
// }

// function onPrivateMessage(message, room) {
// 	console.log('onPrivateMessage: ', message, room);
// 	fireListeners('private-message', message, room);
// 	// this.sendPrivateMessage(message)
// }

// function disconnectPrivate() {
// 	socketPrivateRoot.disconnect();
// 	socketPrivateRoot = null;
// 	listeners = {};
// }
