<style lang="less" scoped>
	@import (css) "../styles/new-pay.css";
</style>

<template>
<div class="main">
		<div class="main-auto">
		
			<form id="form1" method="post" target="_blank" autocomplete="off">
	    	<div class="porc-pd-list">
	        	<!------充值查询-------->
	        	<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=97260008&amp;site=qq&amp;menu=yes" target="_blank" class="pay-btn-rt"></a>
	        	<div class="porc-pay-tit">
	            	<p class="pry-t01">您的账户余额：<span>10</span>秀币</p>
	                <p class="pry-t02"> 充值账户：<span>198882173</span></p>

	                <p class="pry-t02"><!--  --></p>
	                
	                <p class="pry-t03">
	                    <a href="javascript:void(0);" onclick="openChooseWindow('changeuserdiv');">给他人充值</a>
	                    <!-- 
-->	                </p>
	                
	                
	            </div>
	           <!--  <div class="porc-pay-g" style="display:none;">
	            	<a href="javascript:void(0);" onclick="firstRecharge('10',0);" class="py-g01"></a>
	                <a href="javascript:void(0);" onclick="firstRecharge('20',1);" class="py-g02"></a>
	                <a href="javascript:void(0);" onclick="firstRecharge('50',2);" class="py-g03"></a>
	            </div> -->
	            
	            <!-- <div style="width: 800px;height: 200px;border: none;margin:47px auto 0px auto;">
	            	<a target="_blank" href='/act/huikui'><img src="/images/activity/order_banner.jpg"  /></a>
	            </div> -->
	            <div class="mt10" style="text-align: right;">注：特殊道具不在公会房间显示</div>
	            <a href="/act/fristRecharge" target="_blank" class="new-gif-a"><div class="new-gif">
   					 <img src="/images/activity/firstRecharge/newgif.gif" alt="">
				</div></a>
	            <div class="porc-pay-at">
	            	<span class="pyt-tit">购买金额</span>
	                <div class="porc-at">
	                	<div class="porc-at-g">
	                    	<b>50元</b>
	                        <span>价值50000秀币</span>
	                    </div>
	                    <div class="porc-at-g">
	                    	<b>100元</b>
	                        <span>价值100000秀币</span>
	                    </div>
	                    <div class="porc-at-g">
	                    	<b>300元</b>
	                        <span>价值300000秀币</span>
	                    </div>
	                    <div class="porc-at-g">
	                    	<b>500元</b>
	                        <span>价值500000秀币</span>
	                    </div>
	                    <div class="porc-at-g">
	                    	<b>1000元</b>
	                        <span>价值1000000秀币</span>
	                    </div>
	                    <div class="porc-at-g">
	                    	<b>2000元</b>
	                        <span>价值2000000秀币</span>
	                    </div>
	                    <div class="porc-at-g">
	                    	<b>5000元</b>
	                        <span>价值5000000秀币</span>
	                    </div>
	                    <div class="porc-at-g">
	                    	<b>10000元</b>
	                        <span>价值10000000秀币</span>
	                    </div>
	                    <div class="porc-at-g">
	                    	<b>20000元</b>
	                        <span>价值20000000秀币</span>
	                    </div>
	                    <div class="porc-at-g porc-at-tp porc-at-cur" current="1">
		                    <p class="port-cur-tit1">
		                    	<input type="text" autocomplete="off" class="porc-t-type" maxlength="5" name="orderMoney" value="最低充值RMB1" onblur="blurCheckmoney(this);" onclick="this.select();" onkeyup="checkmoney(this);"><span>元</span>
		                    </p>
		                    <p class="port-cur-tit2">价值<s>50000</s>秀币</p>
	                    </div>
	                </div>
	            </div>
	            
	             
	            <div class="porc-pay-at">
	            	<span class="pyt-tit" style="padding-top:20px;">支付方式</span>
	                <div class="port-pay-bank">
	                	<div class="port-bv-bg">
	                        <div class="port-bank-nav">
	                        	<!-- 
	                            <a href="javascript:void(0);" class="bank-nav-cur">银行卡充值</a>
	                             -->
	                            <a href="javascript:void(0);" class="bank-nav-cur">易宝网银充值</a>
	                            <a href="javascript:void(0);" class="">手机充值</a>
	                            <a href="javascript:void(0);" style="margin:0 0 0 3px;" class="">支付宝充值</a>
	                            <a href="javascript:void(0);" style="margin:0 0 0 10px;" class="">微信充值</a>
	                        </div>
	                    </div>
	                    
	                    <!--
	                    <div class="port-bank-xz">
	                    	<span class="bank-xz-tit">选择银行</span>
	                    	<div class="bank-xz">
	                        	<a href="javascript:void(0);" bank="101"><img src="/images/order/new-pay04.png" width="150" height="52" /></a>
	                            <a href="javascript:void(0);" bank="301"><img src="/images/order/new-pay05.png" width="150" height="52" /></a>
	                            <a href="javascript:void(0);" bank="401"><img src="/images/order/new-pay12.png" width="150" height="52" /></a>
	                            <a href="javascript:void(0);" bank="1201"><img src="/images/order/new-pay06.png" width="150" height="52" /></a>
	                            <a href="javascript:void(0);" bank="1902"><img src="/images/order/new-pay11.png" width="150" height="52" /></a>
	                            <a href="javascript:void(0);" bank="201"><img src="/images/order/new-pay10.png" width="150" height="52" /></a>
	                            <a href="javascript:void(0);" bank="1101"><img src="/images/order/new-pay09.png" width="150" height="52" /></a>
	                            <a href="javascript:void(0);" class="morebank" ><img src="/images/order/new-pay08.png" width="150" height="52" /></a>
	                        	
		                    </div>
	                  	</div>
	                  	-->
	                  
		                  <div class="port-bank-xz" style="display: block;">
		                    	<span class="bank-xz-tit">选择银行</span>
		                        
		                        <div class="bank-xz">
		                        	<a href="javascript:void(0);" bank="ICBC-NET-B2C"><em class="bank-xz-hover"></em><img src="/images/order/new-pay04.png" width="150" height="52"></a>
		                            <a href="javascript:void(0);" bank="CCB-NET-B2C"><img src="/images/order/new-pay05.png" width="150" height="52"></a>
		                            <a href="javascript:void(0);" bank="ABC-NET-B2C"><img src="/images/order/new-pay12.png" width="150" height="52"></a>
		                            <a href="javascript:void(0);" bank="BOC-NET-B2C"><img src="/images/order/new-pay06.png" width="150" height="52"></a>
		                            <a href="javascript:void(0);" bank="POST-NET-B2C"><img src="/images/order/new-pay11.png" width="150" height="52"></a>
		                            <a href="javascript:void(0);" bank="CMBCHINA-NET-B2C"><img src="/images/order/new-pay10.png" width="150" height="52"></a>
		                            <a href="javascript:void(0);" bank="BOCO-NET-B2C"><img src="/images/order/new-pay09.png" width="150" height="52"></a>
		                            <a href="javascript:void(0);" bank="BCCB-NET-B2C"><img src="/images/order/new-pay20.png" width="150" height="52"></a>
		                            <a href="javascript:void(0);" bank="CIB-NET-B2C"><img src="/images/order/new-pay21.png" width="150" height="52"></a>
		                            <a href="javascript:void(0);" bank="CMBC-NET-B2C"><img src="/images/order/new-pay22.png" width="150" height="52"></a>
		                            <a href="javascript:void(0);" bank="CEB-NET-B2C"><img src="/images/order/new-pay23.png" width="150" height="52"></a>
		                            <a href="javascript:void(0);" bank="ECITIC-NET-B2C"><img src="/images/order/new-pay24.png" width="150" height="52"></a>
		                            <a href="javascript:void(0);" bank="SPDB-NET-B2C"><img src="/images/order/new-pay25.png" width="150" height="52"></a>
		                            <a href="javascript:void(0);" bank="SDB-NET-B2C"><img src="/images/order/new-pay26.png" width="150" height="52"></a>
		                            <a href="javascript:void(0);" bank="morebank"><img src="/images/order/new-pay08.png" width="150" height="52"></a>
		                        </div>
		                        	
		                  </div>
		                  
		                  <div class="port-bank-xz" style="display: none;">
		                    	<span class="bank-xz-tit">选择手机卡</span>
		                        
		                        <div class="bank-xz">		                        	
		                            
		                            <a href="javascript:void(0);" cardtype="3" bank="SZX-NET">
			                            <img src="/images/order/new-pay16.png" width="150" height="52">
		                            </a>
		                            <a href="javascript:void(0);" cardtype="4" bank="UNICOM-NET"><img src="/images/order/new-pay17.png" width="150" height="52"></a>
		                            
		                        </div>
		                        	
		                  </div>
		                  
		                  <div class="port-bank-xz" style="display: none;">
		                    	<span class="bank-xz-tit">支付宝</span>
		                        
		                        <div class="bank-xz">		                        	
		                            
		                            <a href="javascript:void(0);" bank="Alipay">
			                            <img src="/images/order/new-pay18.png" width="150" height="52">
		                            </a>
		                            
		                        </div>
		                        	
		                  </div>
		                  
		                  <div class="port-bank-xz" style="display: none;">
		                    	<span class="bank-xz-tit">微信支付</span>
		                        
		                        <div class="bank-xz">		                        	
		                            
		                            <a href="javascript:void(0);" paytype="24" bank="WE-CHAT">
			                            <img src="/images/order/new-pay32.png" width="150" height="52">
		                            </a>
		                            
		                        </div>
		                        	
		                  </div>
		                
	                  
	              </div>
	              <a href="javascript:void(0);" class="bank-pay-btn" onclick="formsubmit('0');">去支付</a>
	            </div> 
	            
	            <div class="alert mt30" style="width:920px;">
	            	<div class="alert-img" style="display: block;">
	            		<em class="mt3"></em>
	            		<strong>温馨提示：</strong>
	            		<p>1.填写充值ID号码时请仔细检查，以免输入错误ID导致误充值到其他帐户。</p>
	            		<p>2.当充值过程中出现网页错误或者打开缓慢的情况，请首先查询银行交易纪录检查扣款是否成功；然后查询自己的个人账户是否已经收到等值秀币。切忌不要刷新页面，防止充值失败。</p> <p>3.如果充值过程中出现因网络或系统繁忙导致扣款成功而秀币没有增加的情况，请与我们的客服人员联系，充值客服QQ:97260009。</p> <p>4.支付完毕之后请一定等待"自动跳转回秀吧"页面，以避免到帐延迟。</p> <p>5.充值时填写的QQ号码与手机号码均为选填项，只用于充值失败等情况下与您取得联系，不作其他用途。</p>
           			</div>
           		</div>
	               
	        </div> 
	        <input type="hidden" name="orderRmb" id="orderRmb" value="50">
           	<input type="hidden" name="buyType" id="buyType" value="1">
           	<input type="hidden" name="rechargeType" id="rechargeType" value="1">
			<input type="hidden" name="roomId" id="roomId" value="0">
			<input type="hidden" name="buyerUid" id="buyerUid" value="198882173">
         	<input type="hidden" name="nick" id="nick" value="">
         	<input type="hidden" name="op_uid" id="op_uid" value="">
         	<input type="hidden" name="proxyId" id="proxyId" value="198882173">
         	<input type="hidden" name="recharge_state" id="recharge_state" value="1">
         	<input type="hidden" name="payType" id="payType" value="2">
         	<input type="hidden" name="bankName" id="bankName" value="ICBC-NET-B2C">
         	
	        </form>  
	        
	    </div> 
	<div class="ui-window" id="message" style="display: none; width: 350px; margin-left: -175px; margin-top: -95px;"><div class="ui-window-header"> <a action-type="window-close" class="ui-window-close" href="javascript:;">×</a> <h3>购买确认</h3> </div><div class="ui-window-body"></div> <div class="ui-window-footer"> <a class="ui-window-ok butn smo-butn" action-type="window-ok" href="javascript:;"><i></i> 确定 </a> </div> </div></div>
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