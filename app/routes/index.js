const Router = require('koa-router');
const _ = require('lodash');
const urllib= require('urllib');
const koaBodyparser = require('koa-bodyparser');
const rooter = new Router();
const querystring = require("querystring");

rooter
.get("/", getUserInfo, function* (next) {
	return yield this.render('index', { store: { user: this.state.user } })
})
.get("/lobby", getUserInfo, function* (next) {
	return yield this.render('index', { store: { user: this.state.user } })
})
.get("/rank", getUserInfo, function* (next) {
	return yield this.render('index', { store: { user: this.state.user } })
})
.get("/mall*", getUserInfo, function* (next) {
	return yield this.render('index', { store: { user: this.state.user } })
})
.get("/order", getUserInfo, function* (next) {
	return yield this.render('index', { store: { user: this.state.user } })
})
.get("/:roomid", getUserInfo, function* (next) {
	const room = yield getPhpApis("/room/getArtistInfo", {room_id: this.params.roomid}, this.headers, this.method);
	if( _.isEmpty(room.data) || _.result(room, "data.code") == 1 ) {
		this.redirect("/");
	}else {
		const knight = yield getPhpApis("/room/getKnightDetail", {room_id: this.params.roomid}, this.headers, this.method );
		const livestate = yield getPhpApis("/room/getlivecode", {room_id: this.params.roomid}, this.headers, this.method );
		const gift = yield getPhpApis("/home/getGiftList", {type: 0}, this.headers, this.method );
		const judgeSub = yield getPhpApis("/subscribe/judgeSub", {artist_id: _.result(room, 'data.data.artist_id')}, this.headers, this.method );
		yield this.render('room', 
			{ store: 
				{ 
					user: this.state.user,
					room: room.data.data,
					room_id: this.params.roomid,
					knight: _.result(knight, "data.data"),
					livestate: _.result(livestate, "data.data"),
					gift: _.result(gift, "data.data"),
					judgeSub: _.result(judgeSub, "data.data")
				}
			})
	}
	
})
.all("/php*", koaBodyparser(), function* (next) {
	if(_.isEmpty(this.params[0])) return false;
	const result = yield getPhpApis(this.params[0], this.method == "GET" ? this.query : this.request.body, this.headers, this.method);
	this.set(result.headers);
	this.body = result.data;
})
.post("/formPhp*", function* (next) {
	"use strict";
	let body = "";
	let ctx = this;
	this.req.on("data", function(data) {
		body += data;
	})

	const queryString = yield new Promise(function(resolve, reject) {
							ctx.req.on("end", function() {
									resolve(body);
							});
						});
	const result = yield getPhpApis(this.params[0], queryString, this.headers, this.method);
	this.body = result.data;
})
.get("/user*", getUserInfo, function*(next) {
	"use strict";
	if(this.state.user == null) {
		this.redirect("/");
	}
	const roomid = _.result(this.state.user, "artist_info.room_id");
	let livestate = null;
	if(!_.isEmpty(roomid)) {
		livestate = yield getPhpApis("/room/getlivecode", {room_id: roomid}, this.headers, this.method );
		
		livestate = _.result(livestate, "data.data")
	}
	
	yield this.render('user', {store: {user:this.state.user, livestate}});
})
.get("*", function* (next) {
	this.redirect("/");
});

/*rooter.redirect('/lobby', '/');
rooter.redirect('/rank', '/');
rooter.redirect('/mall', '/');
rooter.redirect('/order', '/');*/
//rooter.use(index.routes());

const getPhpApis = function* (path, data, headers, method) {
	const url = `http://120.27.199.10:8888${path}`;
	const result = yield urllib.requestThunk(url, {
		method: method,
		dataType: 'json',
		data: data,
		//content: JSON.stringify(data),
		headers: headers
	});
	return result;
}

function* getUserInfo(next) {
	console.log(this.cookies.get('user_id'))
	if( !_.isEmpty(this.cookies.get('user_id')) ) {
		const result = yield getPhpApis("/user/info", null, this.headers, "GET");
		this.state.user = _.isEmpty(_.result(_.result(result, 'data'), 'data'))?null:_.result(_.result(result, 'data'), 'data');
	}else{
		this.state.user = null;
	}
	yield next;
}

module.exports = rooter;