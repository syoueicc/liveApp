<style scoped>
	.defence {

	}
</style>

<template>
				<div class="title">我的守护</div>
				<div class="tab-t mt20">
					<a href="javascript:void(0)" class="cur">当前守护</a> <a href="javascript:void(0)">守护记录</a>
				</div>
				<!--  ----------------    当前守护    ------------------     -->
				<div id="tableing" style="display: block;">
<table class="my-number mt20" id="t1">
	<tbody><tr>
		<th width="37%">主播</th>
		<th width="34%">守护时间</th>
		<th width="16%">花费</th>
		<th width="13%">操作</th>
	</tr>
	</tbody><!--ms-repeat--><!--ms-repeat-end-->
</table>
<div style="display: none;">
<div avalonctrl="defencingPage"><div class="ui-pager" onselectstart="return false;" unselectable="on">
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
</div></div>
				<!--  ----------------    过期守护    ------------------     -->
				<div id="tabled" style="display: none;">

<table class="my-number mt20" id="t1">
	<tbody><tr>
		<th width="37%">主播</th>
		<th width="34%">守护时间</th>
		<th width="16%">花费</th>
		<th width="13%">状态</th>
	</tr>
	</tbody><!--ms-repeat--><!--ms-repeat-end-->
</table>
<div style="display: none;">
<div avalonctrl="defencedPage"><div class="ui-pager" onselectstart="return false;" unselectable="on">
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
</div></div>
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