const Message = require('./models/message');
const Chat = require('./models/chat');

//Main starting point
const express = require('express');
// import express from 'express';
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const User = require('./models/user');

const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

//DB Setup
mongoose.connect('mongodb://localhost:chat-app/chat-app');

//App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

//a comment

//Server Setup
const port = process.env.PORT || 8090;
const server = http.createServer(app);

const socketioJwt = require('socketio-jwt');
const io = require('socket.io')(server);
const config = require('./config');

//Web Sockets goes here

io.sockets
	.on(
		'connection',
		socketioJwt.authorize({
			secret: config.secret,
			timeout: 15000 // 15 seconds to send the authentication message
		})
	)
	.on('authenticated', function(socket) {
		var obj = { isLogged: true };
		User.findOneAndUpdate({ _id: socket.decoded_token.sub }, obj, function(
			err,
			user
		) {
			io.emit(
				'join',
				{
					user: user.firstname,
					time: Date.now()
				},
				console.log('join', user.firstname)
			);
		});

		socket
			.on('disconnect', disconnectHandler)
			.on('message', chatMessageHandler)
			.on('chat', chatHandler);

		function chatHandler(chat) {
			console.log('chat', chat);

			var obj = {
				name: chat.chatName,
				privateMessages: [],
				usersIds: [],
				usersNames: []
			};

			chat.users = chat.users
				.map(user => {
					return JSON.parse(user);
				})
				.forEach(user => {
					obj.usersIds.push(user._id);
					obj.usersNames.push(user.firstname);
				});

			console.log(obj);

			// console.log('chat', chat);

			Chat.create(obj, function(err, msg) {
				if (err) return err;
			});

			io.emit('chat', {
				name: obj.name,
				privateMessages: [],
				usersIds: obj.usersIds,
				usersNames: obj.usersNames
			});
		}

		function chatMessageHandler(message) {
			console.log('message', message);

			Message.create(message, function(err, msg) {
				if (err) return err;
			});

			io.emit('message', {
				userId: message.userId,
				text: message.text,
				timestamp: message.timestamp,
				userName: message.userName
			});
		}

		function disconnectHandler(val) {
			console.log('disconnect');
			var obj = { isLogged: false };
			User.findOneAndUpdate({ _id: socket.decoded_token.sub }, obj, function(
				err,
				user
			) {
				return io.emit(
					'leave',
					{
						user: user.firstname,
						time: Date.now()
					},
					console.log('leave', user.firstname)
				);
			});
		}
	});

server.listen(port);
console.log('server is listening on: ', port);
