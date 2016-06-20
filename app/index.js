const koa = require('koa');
const path = require('path');
const render = require('koa-ejs');
const serve = require('koa-static');
const router = require('./routes');
const app = new koa();
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);
const _ = require('lodash');
const moment = require("moment");

render(app, {
	root: path.join(__dirname, '../views'),
	layout: false
});

app.use( serve( path.join(__dirname, '../public') ) );
app.use( router.routes() );
server.listen('9191', () => console.log('server is runing on port: 9191'));

const rooms = {};
let top1 = null;
const top23 = [];
io.on('connection', function(socket) {
	"use strict";
	const url = socket.request.headers.referer;
	const roomid = url.split('/')[url.split("/").length -1];
	let usertemp = "";
	
	socket.on('add user', function(user) {
		usertemp = user;
		if(_.isNil(_.result(rooms, roomid))) {
			rooms[roomid] = [];
		}
		
		if( _.some(rooms[roomid], user) === false ) rooms[roomid].push(user);

		socket.join(roomid);
		io.to(roomid).emit("user joined", user, rooms[roomid], top1, top23);
		//socket.broadcast.emit('user joined', user);
	});

	socket.on('send gift', function(gift, total, user, _room) {
		const coin = parseInt(gift.coin) * parseInt(total);
		
		switch(true) {
			case coin >= (100*1000) && _.isEmpty(top1):
				top1 = {
					coin: coin,
					gift: gift,
					total: total,
					user: user,
					room: _room,
					time: moment()
				};
				io.sockets.emit("update Top", top1);
				break;
			case coin >= (100*1000) && (!!top1 && !!top1.time && moment().isAfter( moment(top1.time).add(3, "minutes") ) || coin > top1.coin ):
				top1 = {
					coin: coin,
					gift: gift,
					total: total,
					user: user,
					room: _room,
					time: moment()
				};
				io.sockets.emit("update Top", top1);
				break;
			case coin >= (20*1000):
				if(_.size(top23) >= 2) top23.shift();
				top23.push( {
					coin: coin,
					gift: gift,
					total: total,
					user: user,
					room: _room,
					time: moment()
				});
				io.sockets.emit("update Top23", top23);
				break;
			default:
				io.to(roomid).emit("send message", _.extend({}, {
						gift: gift,
						total: total,
						type: "gift"
					},
					user
				) );
				break;

		}
		// if(coin >= 1000 * 100) {
		// 	if(_.isEmpty(top1) || !!top1.titme && moment().isAfter( moment(top1.titme).add(3, "minutes") ) ) {
		// 		top1 = {
		// 			coin: coin,
		// 			gift: gift,
		// 			room: _room,
		// 			time: moment()
		// 		};
		// 		socket.broadcast.emit("update Top", top1);
		// 	}else {
		// 		top23.shift();
		// 		top23.push( {
		// 			coin: coin,
		// 			gift: gift,
		// 			room: _room
		// 		});
		// 		socket.broadcast.emit("update Top23", top23);
		// 	}
			
		// }else if( coin >= 1000 * 20 ) {
		// 	if( _.size(top23) > 2 ) top23.shift();
		// 	top23.push(top23);
		// 	socket.broadcast.emit("update Top23", top23);
		// }
		

		if( !_.isEmpty(gift.swf) ) {
			io.to(roomid).emit("send gift", gift);
		}
		
	});
	
	socket.on("leave", function() {
		socket.emit('disconnect');
	});
	
	  socket.on('disconnect', function () {
		const leaveUser = _.filter(rooms[roomid], function(user) {
			return !_.eq(user, usertemp);			
		});
		
		rooms[roomid] = leaveUser;
		// var index = rooms[roomid].indexOf(usertemp);
		// if (index !== -1) {
		// 	rooms[roomid].splice(index, 1);
		// }

		socket.leave(roomid);    // 退出房间
		io.to(roomid).emit('leaveRoom', usertemp);
		console.log(_.result(usertemp, "artist_info.truename") + '退出了' + roomid);
	});
	
	socket.on('send message', function(message) {
		io.to(roomid).emit('send message', message);
	});
	
});