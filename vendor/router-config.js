export default {
	index: function configRouter(router) {
		router.map({
			'/': {
				component: require('./components/index.vue')
			},
			'/lobby': {
				component: require('./components/lobby.vue')
			},
			'/rank': {
				component: require('./components/rank.vue')
			},
			'/clan': {
				component: require('./components/rank.vue')
			},
			'/mall': {
				component: require('./components/mall.vue'),
				subRoutes: {
					'/vip': {
						component: require('./components/mall/vip.vue')
					},
					'/car': {
						component: require('./components/mall/car.vue')
					},
					'/number': {
						component: require('./components/mall/number.vue')
					},
					'/guard': {
						component: require('./components/mall/guard.vue')
					},
				}
			},
			'/order': {
				component: require('./components/order.vue')
			},
			'/login': {
				component: require('./components/rank.vue')
			},
			'/registe': {
				component: require('./components/rank.vue')
			},
			'/about': {
				component: require('./components/about.vue')
			},
			'/links': {
				component: require('./components/links.vue')
			},
			'/help': {
				component: require('./components/help.vue')
			},
	/*		'/room/:roomid': {
				name: 'room',
				component: require('./components/room.vue')
			}*/
		});

		router.redirect({
			'*': '/'
		})
	},
	user: function configRouter(router) {
		router.map({
			'/user/info': {
				component: require('./components/user/userinfo.vue')
			},
			'/user/password': {
				component: require('./components/user/password.vue')
			},
			'/user/tips': {
				component: require('./components/user/tips.vue')
			},
			'/user/myAttention': {
				component: require('./components/user/myAttention.vue')
			},
			'/user/vip': {
				component: require('./components/user/vip.vue')
			},
			'/user/car': {
				component: require('./components/user/car.vue')
			},
			'/user/defence': {
				component: require('./components/user/defence.vue')
			},
			'/user/medal': {
				component: require('./components/user/medal.vue')
			},
			'/user/number': {
				component: require('./components/user/number.vue')
			},
		});

		router.redirect({
			'*': '/user/info'
		})
	}
};