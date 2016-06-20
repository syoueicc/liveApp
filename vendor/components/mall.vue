<style lang="less">
	@import (css) "../styles/vip.css";
</style>

<template>
<div class="main">
	<div class="main-auto" style="overflow: hidden;zoom:1;">
		<div class="porc-pd" style="overflow: hidden;zoom:1;">
			<ul class="clearfix" style="overflow: hidden;zoom:1;">
				<li :class="{'cur': $route.path == '/mall/vip'}"> <s></s><a v-link='{path: "/mall/vip"}' class="pdd">VIP</a></li>
				<li :class="{'cur': $route.path == '/mall/number'}"><s></s>
					<a v-link='{path: "/mall/number"}' class="pdc">靓号</a>
				</li>
				<li :class="{'cur': $route.path == '/mall/car'}"><s></s>
					<a v-link='{path: "/mall/car"}' class="pdb">进场座驾</a>
				</li>
				<li class="end" :class="{'cur': $route.path == '/mall/guard'}">
					<s></s>
					<a  v-link='{path: "/mall/guard"}' class="pdf">守护</a>
				</li>
			</ul>
		</div>
		
		<router-view keep-alive></router-view>
	</div>
</div>
</template>

<script>

export default {
	data() {
		return {
			data: 'data'
		}
	},
	components: {

	}
}

</script>