<style>
	.about {

	}
</style>

<template>
	<div class="about">
		<p>about page</p>
		<p><button @click='increment'>+</button> <button @click='decrement'>-</button></p>
	</div>
</template>

<script>
import {increment, decrement} from '../vuex/actions';

export default {
	vuex: {
		getters: {
			count: ({count}) => count
		},
		actions: {
			increment,
			decrement
		}
	},
	data() {
		return {
			data: 'data'
		}
	},
	components: {

	}
}

</script>