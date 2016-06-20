import Vue from 'vue';
import VueRouter from 'vue-router';
import configRouter from './router-config';
import User from './container/user.vue';
import VueResource from 'vue-resource';

Vue.config.debug = true
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
	history: true,
	saveScrollPostion: true
});

configRouter.user(router);

router.start(User, 'app');