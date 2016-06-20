<style scoped>
</style>

<template>
	<div class="porc-pd-list">
				<div class="porc-list" avalonctrl="shop_guard">
					<div class="tit clearfix">
						<p class="fl">房间守护</p>
						
						<span class="nubr">开通守护等同于礼物消费，守护对象：未选择 <a href="/">立即选择</a></span>
						<!--ms-if-->

					</div>
					<a href="http://www.xiu8.com/order/readypay" target="_blank" class="buy-btn conz">充值</a>
					<div class="yue" style="">
						<p>
							<span>您的账户余额：<i id="identity_money">10</i><i>秀币</i></span><a href="javascript:void(0)">查看已守护主播</a>
						</p>
					</div>
					<div class="mt10">
						<img src="/images/baner.jpg" width="960">
					</div>
					<div class="shouhu mt20">
						<table>
							<tbody>
								<tr>
									<th>特权</th>
									<th>特权详情</th>
									<th>使用范围</th>
								</tr>
								<tr>
									<td><span class="gray3">尊贵标识</span></td>
									<td><img src="/images/safeAngel_v8.png"></td>
									<td>被守护房内</td>
								</tr>
								<tr>
									<td><span class="gray3">价格</span></td>
									<td>
										<div style="width: 170px; margin: auto; text-align: left" id="guardBox"><!--ms-repeat--><p style="width: 150px;">
												<label><input name="radio" type="radio" day="30" price="160000" value="1">30天：160000秀币</label>
												
											</p>
											<!--ms-if-->
											
											<!--ms-if--><!--ms-if-->
											<p style="width: 260px;">
												<label><input name="radio" type="radio" checked="checked" value="2" day="90" price="420000">90天：420000秀币（赠送10天）</label>
											</p>
											
											<!--ms-if--><!--ms-if-->
											<p style="width: 260px;">
												<label><input name="radio" type="radio" checked="checked" value="3" day="180" price="800000">180天：800000秀币（赠送20天）</label>
											</p>
											
											<p class="mt15">
												<a id="defendBuy" href="javascript:void(0)" class="buy-btn">立即购买</a>
											</p><!--ms-repeat-end--></div>
									</td>
									<td></td>
								</tr>
								<tr>
									<td><span class="gray3">贵宾席落座</span></td>
									<td>
										<p>进入房间自动落座专属坐席</p>
										<p class="mt10">
											<img src="/images/u70.jpg">
										</p>
									</td>
									<td>被守护房内</td>
								</tr>
								<tr>
									<td><span class="gray3">进场提示</span></td>
									<td>
										<p>进入房间醒目提示，伴有奢华座驾（劳斯莱斯），身份更尊贵</p>
										<p class="mt10">
											<img src="/images/u72.png">
										</p>
									</td>
									<td>全站</td>
								</tr>
								<tr>
									<td><span class="gray3">专属礼物</span></td>
									<td>
										<p>拥有专属守护礼物</p>
										<p class="mt10">
											<img style="width: 260px;" src="/images/u74.jpg">
										</p>
									</td>
									<td>被守护房内</td>
								</tr>
								<tr>
									<td><span class="gray3">千纸鹤累积加速</span></td>
									<td>
										<p>千纸鹤累积速度加倍，每日领取上限加倍</p>
										<p class="mt10">
											<img src="/images/u80.jpg" width="200">
										</p>
									</td>
									<td>全站</td>
								</tr>
								<tr>
									<td><span class="gray3">财富等级加速</span></td>
									<td>原财富经验值累积规则上加速0.1</td>
									<td>被守护房内</td>
								</tr>
								<tr>
									<td><span class="gray3">房间特权</span></td>
									<td>防管理禁言/踢人</td>
									<td>被守护房内</td>
								</tr>
								<tr>
									<td><span class="gray3">发言无限，随意私聊</span></td>
									<td>发言不受限制、随意私聊、尽情互动、享受快乐</td>
									<td>被守护房内</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="porc-list">
						<div class="tit mt30 clearfix">
							<p class="fl">如何开通守护</p>
						</div>
					</div>
					<div class="shouhu">
						<table>
							<tbody>
								<tr>
									<td><img src="/images/u104.jpg"></td>
									<td style="text-align: left">
										<p>1 登录状态下进入要守护的主播房间，点击直播窗口左侧的“开通守护”，如图所示：</p>
										<p class="mt10">2
											进入守护开通购买页，请注意确认守护对象，选择守护类型，勾选守护天数，完成购买即可。</p>
									</td>
								</tr>
							</tbody>
						</table>
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