import Vue from 'vue';
import Room from './components/room.vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);
new Vue({
	el: "#app",
	components: {
		Room
	}
});
