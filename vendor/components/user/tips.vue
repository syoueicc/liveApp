<style scoped>
	.tips {

	}
</style>

<template>
                <div class="title">系统消息</div>
                <div id="tips_page_div">

<div class="system-msg">
	<!--ms-repeat--><!--ms-repeat-end-->
</div>
<div style="display: none;">
<div avalonctrl="tipPage"><div class="ui-pager" onselectstart="return false;" unselectable="on">
<!--ms-if-->
<!--ms-if-->
<!--ms-if-->
<!--ms-repeat--><!--ms-repeat-end-->
<!--ms-if-->
<span class="ui-pager-item " title="Go To Last Page">0</span>
<span class="ui-pager-next" title="Go To Next Page">&gt;</span>
<!--ms-if-->
</div>
</div>
</div>                </div>
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