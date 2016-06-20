<style scoped>

</style>

<template>
<div class="porc-pd-list" style="overflow: hidden;zoom:1;">
	<div class="porc-list">
					<div class="tit clearfix" style="overflow: hidden;">
						<p class="fl">商城—VIP</p>
						<span class="nubr">有了VIP可以给你带来更好的人气！</span>
					</div>
					<a href="/order/readypay" target="_blank" class="buy-btn conz">充值</a>
					<div class="yue">
						<p>
							<span>您的账户余额：<i id="identity_money">10</i></span><a href="/user/vip">查看我的VIP</a>
						</p>
					</div>
				</div>
				<div class="mt10">
					<img src="/images/vipc.jpg">
				</div>
				<div class="sh_search_bd">
					<b>推荐主播：</b> <input type="text" name="text" class="sh_text01" id="room_id" onkeyup="value=value.replace(/[^\d]/g,'') " onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))">
					<span id="room_id_tips">请输入主播号</span>

				</div>
				<table border="0" cellpadding="0" cellspacing="0" class="sh_table">
					<tbody>
						<tr class="sh_tb_nomg">
							<td width="139" align="center" valign="middle"><h1>
									<img src="/images/goumai_06.jpg" width="139" height="49">
								</h1></td>
							<td width="421" align="center" valign="middle" style="background: #f8f7f5;"><h1>
									<img src="/images/goumai_04.jpg" width="27" height="14">普通vip
								</h1></td>
							<td width="391" align="center" style="background: #f8f7f5;" valign="middle"><h1>
									<img src="/images/goumai_03.jpg" width="27" height="14">至尊vip
								</h1></td>
						</tr>
						<tr>
							<td width="139" align="center" valign="middle">购买</td>
							<td align="center" valign="middle">
								<p class="fb f14 gray3 ml2">
																				<label>
																									<input type="radio" checked="checked" value="120000" goodsid="901" month="6" name="buyVip_h">普通VIP半年版(6个月)：120000秀币</label><br>
																									
																					<label>
																									<input type="radio" value="200000" goodsid="902" month="12" name="buyVip_h">普通VIP全年版(12个月)：200000秀币</label><br>
																									
																			
								</p>
								<div id="tp_vip_gm">
									<!-- 购买 -->
									<input alt="1" type="button" class="sh_btn" value="">
								</div>
							</td>
							<td align="center" valign="middle">
								<p class="fb f14 gray3 ml2">
																																	<input type="radio" checked="checked" value="340000" goodsid="903" month="6" name="buyVip_z">至尊VIP半年版(6个月)：340000秀币<br>
																							<label>
												
																																		<input type="radio" value="600000" goodsid="904" month="12" name="buyVip_z">至尊VIP全年版(12个月)：600000秀币</label><br>
																							<label>
												
																		</label></p>
								<div id="zz_vip_gm">
									<!-- 购买 -->
									<input alt="1" type="button" class="sh_btn" value="">
								</div>
							</td>
						</tr>
						<tr>
							<td width="139" align="center" valign="middle">尊贵标致</td>
							<td align="center" valign="middle">名字前佩戴专属标识&nbsp;&nbsp;<img src="/images/goumai_04.jpg" width="27" height="14"></td>
							<td align="center" valign="middle">名字前佩戴专属标识&nbsp;&nbsp;<img src="/images/goumai_03.jpg" width="27" height="14"></td>
						</tr>
						<tr>
							<td width="139" align="center" valign="middle">专属颜色</td>
							<td align="center" valign="middle">昵称显示拥有<span class="sh_red">专属颜色</span>，更显眼，更独一无二
							</td>
							<td align="center" valign="middle">昵称显示拥有<span class="sh_red">专属颜色</span>，更显眼，更独一无二
							</td>
						</tr>
						<tr>
							<td width="139" align="center" valign="middle">防踢</td>
							<td align="center" valign="middle">防管理踢人（防比自身等级高3级）</td>
							<td align="center" valign="middle">防管理踢人（防比自身等级高5级）</td>
						</tr>
						<tr>
							<td width="139" align="center" valign="middle">防禁言</td>
							<td align="center" valign="middle">防管理禁言（防比自身等级高3级）</td>
							<td align="center" valign="middle">防管理禁言（防比自身等级高5级）</td>
						</tr>
						<tr>
							<td width="139" align="center" valign="middle">发言无限制</td>
							<td align="center" valign="middle">发言无时间限制，无私聊限制，随时随地更自由</td>
							<td align="center" valign="middle">发言无时间限制，无私聊限制，随时随地更自由</td>
						</tr>
						<tr>
							<td width="139" align="center" valign="middle">专属表情</td>
							<td align="center" valign="middle">
								<p>无限使用VIP专属表情</p> <img src="/images/u79.jpg" alt="" width="269" height="175">
							</td>
							<td align="center" valign="middle">
								<p>无限使用VIP专属表情</p> <img src="/images/u79.jpg" alt="" width="269" height="175">
							</td>
						</tr>
						<tr>
							<td width="139" align="center" valign="middle">排名更靠前</td>
							<td align="center" valign="middle">
								<p>排于同等级非VIP用户之上</p> <img src="/images/u_77.jpg" alt="" width="178" height="169">
							</td>
							<td align="center" valign="middle">
								<p>排于同等级普通VIP用户之上</p> <img src="/images/u_77.jpg" alt="" width="178" height="169">
							</td>
						</tr>
						<tr>
							<td width="139" align="center" valign="middle">经验加速</td>
							<td align="center" valign="middle">1.2倍</td>
							<td align="center" valign="middle">1.3倍</td>
						</tr>
						<tr>
							<td width="139" align="center" valign="middle">充值返点</td>
							<td align="center" valign="middle">无</td>
							<td align="center" valign="middle">1%</td>
						</tr>
						<tr>
							<td width="139" height="136" align="center" valign="middle">免费大礼包</td>
							<td align="left" valign="middle">
								<p class="sh_bm_text" style="display: inline;">
									<span>贴条：5个/天</span> <span>世界说：3条/天</span> <span>千纸鹤：5个/天</span>
								</p>
									<input type="button" id="ptVipGift" onclick="Vip.gift(1)" class="sh_btn_lq sh_btn_top" value="">
							</td>
							<td align="left" valign="middle">
								<p class="sh_bm_text" style="display: inline;">
									<span>贴条：10个/天</span> <span>世界说：10条/天</span> <span>千纸鹤：10个/天</span>
								</p>
									<input type="button" id="zzVipGift" onclick="Vip.gift(2)" class="sh_btn_lq sh_btn_top" value="">
							</td>
						</tr>
					</tbody>
				</table>

				<p class="sh_bm_text_001">
					<b>说明：</b><br>
					免费礼包每天可领一次，礼包内容物品限当天领取当天使用。<br>
					普通VIP用户在使用期内可直接升级为至尊VIP用户，根据其剩余使用天数，按每日1300秀币补差价即可。<br>
					至尊用户在使用期可进行续费，但需在使用期结束后方可重新购买普通VIP<br> 充值返点将会以秀币形式自动返还于您的账户上
				</p>
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