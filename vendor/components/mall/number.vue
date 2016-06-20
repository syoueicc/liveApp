<style scoped>
	.number {

	}
</style>

<template>
<div class="porc-pd-list" style="overflow: hidden;zoom:1;">
				<input id="roomId" type="hidden" value="0">
				<div class="porc-list" avalonctrl="shop_number">
					<div class="tit clearfix">
						<p class="fl">商城—靓号</p>
						<!--<span class="nubr">有了道具可以给你带来更好的人气！</span>-->
					</div>
					<a href="http://www.xiu8.com/order/readypay" target="_blank" class="buy-btn conz">充值</a>
					<div class="yue" style="">
						<p>
							<span>您的账户余额：<i id="identity_money">10</i><i>秀币</i></span><a href="javascript:void()">查看已有靓号</a>
						</p>
					</div>
					<div class="mt10">
						<img src="/images/num.jpg">
					</div>
					<div class="search-box" style="background: transparent;">
						<div class="search clearfix">
							<input type="text" class="text" placeholder="输入靓号查询">
							<input type="button" class="buton" value="查询">
						</div>
						<div class="span4" style="display: none;">
							<div class="alert mt10 alert-error">
								<div class="alert-img">
									<em></em><strong id="validate">必须输入5位以上，10位以下数字</strong>
								</div>
							</div>
						</div>
						<div id="alert-fail" class="alert mt10" style="display: none;">
							<div id="alert-img" class="alert-img">
								<em></em> 此靓号还未开放，
								<!-- <a href="/service" target="_blank">请联系客服</a>  -->
								<!-- <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=97260008&amp;site=qq&amp;menu=yes"
									class="custqq">联系客服QQ</a> -->
								<a id="BZQQ1001" class="custqq">联系客服QQ</a>
							</div>
						</div>
						<div id="alert-success" class="alert alert-success mt10" style="display: none;">
							<div id="queryBuy" class="alert-img">
								<em class="mt5"></em> 您搜索到的靓号价格：<i class="pus f14 fb"></i>秀币 <a id="numberBuy" rnickname="至尊〆゛花火の酒吧" href="javascript:void(0)" class="butn smo-butn"><i></i>立即购买</a>
							</div>
						</div>
					</div>
					<div class="number-list clearfix">
						<div class="number-left">

							<input type="hidden" id="recPageCount" value="2"> <input type="hidden" id="recPageNo" value="1"> <input type="hidden" id="fiveNoPageCount" value="9"> <input type="hidden" id="fiveNoPageNo" value="1">


							<p class="numtit clearfix">
								<span>推荐靓号</span><a id="recommend" href="javascript:void(0)">换一组</a>
							</p>
							<div id="rediv" class="number-buy clearfix"><!--ms-repeat--><dl>
									<dt>
										<img src="/images/liang.png" align="absmiddle">
										2100004
									</dt>
									<dd>
										<p>秀币：6000000</p>
										<a href="javascript:void(0)" class="buy">购买</a>
									</dd>
								</dl><dl>
									<dt>
										<img src="/images/liang.png" align="absmiddle">
										2100005
									</dt>
									<dd>
										<p>秀币：6000000</p>
										<a href="javascript:void(0)" class="buy">购买</a>
									</dd>
								</dl><dl>
									<dt>
										<img src="/images/liang.png" align="absmiddle">
										2100003
									</dt>
									<dd>
										<p>秀币：6000000</p>
										<a href="javascript:void(0)" class="buy">购买</a>
									</dd>
								</dl><dl>
									<dt>
										<img src="/images/liang.png" align="absmiddle">
										2100006
									</dt>
									<dd>
										<p>秀币：6000000</p>
										<a href="javascript:void(0)" class="buy">购买</a>
									</dd>
								</dl><dl>
									<dt>
										<img src="/images/liang.png" align="absmiddle">
										2100001
									</dt>
									<dd>
										<p>秀币：6000000</p>
										<a href="javascript:void(0)" class="buy">购买</a>
									</dd>
								</dl><dl>
									<dt>
										<img src="/images/liang.png" align="absmiddle">
										2100002
									</dt>
									<dd>
										<p>秀币：6000000</p>
										<a href="javascript:void(0)" class="buy">购买</a>
									</dd>
								</dl><!--ms-repeat-end--></div>


							<p class="numtit mt30 clearfix">
								<span>5位靓号</span> <a id="fiveNo" href="javascript:void(0)">换一组</a>
							</p>
							<div id="fivediv" class="number-buy clearfix"><!--ms-repeat--><dl>
									<dt>
										<img src="/images/liang.png" align="absmiddle"> 
										3300028
									</dt>
									<dd>
										<p>秀币：100000000</p>
										<a href="javascript:void(0)" class="buy">购买</a>
									</dd>
								</dl><dl>
									<dt>
										<img src="/images/liang.png" align="absmiddle"> 
										5000054
									</dt>
									<dd>
										<p>秀币：588000</p>
										<a href="javascript:void(0)" class="buy">购买</a>
									</dd>
								</dl><dl>
									<dt>
										<img src="/images/liang.png" align="absmiddle"> 
										9000001
									</dt>
									<dd>
										<p>秀币：99999999</p>
										<a href="javascript:void(0)" class="buy">购买</a>
									</dd>
								</dl><dl>
									<dt>
										<img src="/images/liang.png" align="absmiddle"> 
										19970902
									</dt>
									<dd>
										<p>秀币：500000</p>
										<a href="javascript:void(0)" class="buy">购买</a>
									</dd>
								</dl><dl>
									<dt>
										<img src="/images/liang.png" align="absmiddle"> 
										9000002
									</dt>
									<dd>
										<p>秀币：9999999</p>
										<a href="javascript:void(0)" class="buy">购买</a>
									</dd>
								</dl><dl>
									<dt>
										<img src="/images/liang.png" align="absmiddle"> 
										5000060
									</dt>
									<dd>
										<p>秀币：588000</p>
										<a href="javascript:void(0)" class="buy">购买</a>
									</dd>
								</dl><dl>
									<dt>
										<img src="/images/liang.png" align="absmiddle"> 
										5000052
									</dt>
									<dd>
										<p>秀币：588000</p>
										<a href="javascript:void(0)" class="buy">购买</a>
									</dd>
								</dl><dl>
									<dt>
										<img src="/images/liang.png" align="absmiddle"> 
										19970331
									</dt>
									<dd>
										<p>秀币：500000</p>
										<a href="javascript:void(0)" class="buy">购买</a>
									</dd>
								</dl><!--ms-repeat-end--></div>

						</div>
						<div class="number-right mt10">
							<div class="box">
								<p class="tit">靓号特权</p>
								<div class="con">
									<p>
										专属显示：靓号专属标志，特殊号码及<i>独特颜色</i>
									</p>
									<p>
										<img style="display: none" src="/images/u68.jpg">
									</p>
									<p>排序更靠前：落座排序中靓号用户更靠前</p>
								</div>
							</div>
							<div class="box mt15">
								<p class="tit">什么是靓号？</p>
								<div class="con">
									靓号，是区别与用户注册获得的UID序列号码。可以根据个人喜好定制具有特殊意义的专属号码。例如：生日号码，纪念日号码，情侣号码等。
								</div>
							</div>
						</div>
					</div>
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