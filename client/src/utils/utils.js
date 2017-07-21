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
let listeners = {};

function initConnection(message) {
	// console.error('SOCKET', socket);

	if (!socketRoot) {
		// console.error('New Socket');
		connect();
	}

	if (message) {
		send(message);
	}
}

function connect() {
	// console.log('ws connect');
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

function fireListeners(event, payload) {
	console.log('event', event);
	console.log('payload', payload);
	console.log('listeners', listeners);
	if (listeners[event]) {
		console.log([...listeners[event]]);
		[...listeners[event]].forEach(listener => {
			listener(payload);
		});
	}
}

function addListener(event, listener) {
	if (!listeners[event]) {
		listeners[event] = [];
	}
	listeners[event].push(listener);
}
