<style scoped>
</style>

<template>
	<div class="main" style="min-height: 129px;">
	<div class="main-auto clearfix">
 		<div class="left" avalonctrl="userleft">
		<dl class="zb-info clearfix">
		<dt class="inmg">
			<img id="user_photo_1" align="absmiddle" style="width: 55px; height: 55px" src="http://image.cache.xiu8.com/avatar/55/55/198882173.jpg?_=1461504922383">
		</dt>
		<dd>
			<p>
				<a href="javascript:void(0)" class="name" style="height:20px;line-height:20px;">上海五香豆_CPnC
				</a> 
				<b class="purple">198882173</b>
			</p>
			<p class="mt5">
				 <span class="ul ul01"></span>
			</p>
		</dd>
	</dl>
	<div class="user-msg">
		<p id="p1" class="title cur-tit">
			<s></s>我的秀吧<i id="i1" class="os"></i>
		</p>
		<ul id="u1" style="display: block;">
			<li class="cur"><a href="/user/info" class="ma">个人设置</a></li>
			<li><a href="/user/password" class="me">修改密码</a></li>
			<li><a href="/user/tips" class="mc">系统消息</a></li>
			<li><a href="/user/myAttention" class="md">我的关注</a></li>
			<li><a href="/user/vip " class="mf">我的VIP</a></li>
			<li><a href="/user/number" class="mg">我的靓号</a></li>
			<li><a href="/user/car" class="mh">我的座驾</a></li>
			<li><a href="/user/defence" class="ml">我的守护</a></li>
			<li><a href="/user/medal" class="ml">我的徽章</a></li>
		</ul>
	</div>
	<div class="user-msg">
		<p id="p2" class="title">
			<s></s>我的财富<i id="i2"></i>
		</p>
		<ul id="u2" style="display: none;">
			<li><a href="/user/wealth/recharge" class="mi">充值查询</a></li>
			<li><a href="/user/wealth/sendgift" class="mj">送礼记录</a></li>
			<li><a href="/user/wealth/receivegift" class="mk">收礼记录</a></li>			
			<li><a href="/user/wealth/gameCoin" class="mk">兑游戏币</a></li>
		</ul>
	</div>

	<div class="user-msg">
		<!--公会管理-->
		<!--ms-if-->
		<!--ms-if-->
		<!--我的家族-->
		<p id="p10" class="title">
			<s></s>我的家族<i id="i10"></i>
		</p>
		<ul id="u10" style="display: none;">
			<li><a href="/clan/initial" class="mj">我的家族</a></li>
		</ul>
	</div> 
	
</div>
<div class="right" avalonctrl="userInfo">
	<div class="title">个人设置</div>
	<!-- <input type="hidden" id="tab" value="@{data.get[Int]("tab")}" /> -->
	<div class="alert mt10 alert-error" id="alert_r" style="display: block;">
		<div class="alert-img">
			<em></em> <strong id="alert_r_error">
				安全邮箱帮助您找回密码。为确保安全,请立刻填写你的邮箱 <a style="padding-left: 30px" href="/user/email/upadd">立刻填写</a>
			</strong>
		</div>
	</div>
	<div class="xi-nav">
		<a href="javascript:void(0)" class="cur">基本资料</a><u>｜</u> 
		<b style="display: none;">
		<a href="javascript:void(0)">主播资料</a><u>｜</u> 
		</b>
		<a href="javascript:void(0)">更多资料</a><u>｜</u> 
		<a href="javascript:void(0)">头像更改</a>
	</div>

<div id="form1" avalonctrl="userInfo" style="display: block;">
<!--ms-repeat--><div>
   <input type="hidden" class="text" id="userId" name="userId" value="198882173">
    <div class="control-group clearfix mt20">
        <label class="control-label">*用户名：</label>
        <div type="name" class="controls">
            <p class="mt10">cancelv5</p>
        </div>
    </div>
    <div class="control-group clearfix">
        <label class="control-label">*用户ID：</label>
        <div type="name" class="controls">
            <p class="mt10">198882173</p>
        </div>
    </div>
    <div class="control-group clearfix">
        <label class="control-label">*昵称：</label>
        <div type="name" class="controls" style="min-width:210px;">
            <p>
                <input type="text" class="text" maxlength="10">
                <span id="nickspan" style="display:inline" class="help-inline">昵称4-10个字符</span>
            </p>
        </div>
    </div>
    <div class="control-group clearfix">
        <label class="control-label">*会员等级：</label>
        <div type="name" class="controls">
            <p class="zbs zbs2 mt10 clearfix">         
                    <em style="padding-top: 7px; display: none;">距升级还差
                   <i>10000</i>点经验</em>
                
                <span>
                    
                 <span class="ul ul01"></span>           
                </span>
                <span class="jd"><i style="width: 0px;"></i></span>
                <span>
                       <span class="ul ul02"></span> 
                </span>
                <span class="sjmsg">还需使用<span>10000</span>秀币</span></p>
        </div>
    </div>


    <div class="control-group clearfix">
        <label class="control-label">*身份：</label>
        <div type="name" class="controls">
           	    <p class="mt10" style="display: block;">普通用户 <a href="/anchor/userMicro" class="ml10">申请成为签约主播</a></p>        
                <p class="mt10" style="display: none;">系统管理人员</p>
                <p class="mt10" style="display: none;">系统管理员</p>
                <p class="mt10" style="display: none;">官方运营</p>   
                <p class="mt10" style="display: none;">秀吧销售</p>     
                <p class="mt10" style="display: none;">秀吧主播</p>
            
        </div>
    </div>
    <div class="control-group mt30 clearfix">
        <label class="control-label"></label>
        <div type="name" class="controls">
            <a href="javascript:void(0)" id="nickname_save" class="buy-back">保存信息</a>
        </div>
    </div>
 </div><!--ms-repeat-end-->
</div>
<div style="display: none;">
	<!--ms-repeat--><!--ms-repeat-end-->
</div>

 <div style="display: none;">
<!--ms-repeat--><div id="form3">
    <form>
    <input type="hidden" class="text" id="userId" name="userId" value="198882173">
        <div class="control-group clearfix mt20">
            <label class="control-label">*性别：</label>
            <div class="controls mt10" type="name">
                <p> <label><input type="radio" style="height : auto ; vertical-align : inherit" value="1">
                        男</label>
                    <label class="ml15">
                        <input type="radio" style="height : auto ; vertical-align : inherit" value="0">
                        女</label>
                </p>
            </div>
        </div>
        <div class="control-group clearfix">
            <label class="control-label">真实姓名：</label>
            <div class="controls" type="name">
                <p>
                    <input type="text" style="width : 200px" class="text" maxlength="4">
                    <span style="display:inline" class="help-inline" id="nameSpan"></span>
                </p>
            </div>
        </div>
        <div class="control-group clearfix">
            <label class="control-label">QQ：</label>
            <div class="controls" type="name">
                <p>
                    <input type="text" style="width : 200px" class="text" ms-beforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" maxlength="14">
                    <span style="display:inline" class="help-inline" id="qqSpan"></span>
                </p>
            </div>
        </div>
        <div class="control-group clearfix">
            <label class="control-label">手机：</label>
            <div class="controls" type="name">
                <p>
                    <input type="text" style="width : 200px" class="text" maxlength="11" ms-beforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))">
                    <span style="display:inline" class="help-inline" id="phoneSpan"></span>
                </p>
            </div>
        </div>
        <div class="control-group clearfix">
            <label class="control-label">身份证：</label>
            <div class="controls" type="name">
                <p>
                    <input type="text" style="width : 200px" class="text" maxlength="18" ms-beforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))">
                    <span style="display:inline" class="help-inline" id="idSpan"></span>
                </p>
            </div>
        </div>
        <div class="control-group clearfix" id="mail_contorl">
            <label class="control-label">邮箱：</label>
            <div class="controls" type="name">
                <p class="mt10">
                   
                        </p><div style="display: block;">尚未填写
                       <a style="padding-left: 20px" href="/user/email/upadd">立刻填写</a></div>
                        <span></span>
                    
                <p></p>
            </div>
        </div>
        <div class="control-group mt30 clearfix">
            <label class="control-label"></label>
            <div class="controls" type="name">
                <a class="buy-back" href="javascript:void(0)" id="info_save">保存信息</a>
            </div>
        </div>
    </form>
</div>
</div><div class="tab-c" id="form4" height:="450px" style="display: none;">
	<input type="hidden" id="userId" value="198882173">
	<dl class="tou-img clearfix">
		<dt>
			<p>
				<img id="user_photo_2" align="absmiddle" style="width: 55px; height: 55px" src="http://image.cache.xiu8.com/avatar/55/55/198882173.jpg">
			</p>
			<p class="mt10">当前头像</p>
		</dt>
		<dd>
			<div class="tab-t">
				<a href="javascript:void(0)" class="cur">系统头像</a>
				<!-- a href="javascript:void(0)" ms-if="role!=6"  ms-click="showPhoto (2)" 
				ms-class="{{phoneFlag==2?'cur':''}}">自定义头像</a -->
				<a href="javascript:void(0)">自定义头像</a>

			</div>
			<div style="display: none;">
				<div id="flashPhoto" ms-visible="item.role==6">
                 <div id="flasheditorout" style="width: 550px; height: 400px">
					<object type="application/x-shockwave-flash" id="xiuxiuEditor" name="xiuxiuEditor" data="http://open.web.meitu.com/sources/avatar/avatar.swf?version=201310111752" width="100%" height="100%"><param name="menu" value="false"><param name="scale" value="noScale"><param name="allowFullscreen" value="true"><param name="allowScriptAccess" value="always"><param name="bgcolor" value="#FFFFFF"><param name="wmode" value="window"><param name="base" value="http://open.web.meitu.com/sources/avatar/"><param name="flashvars" value="source=plugin&amp;initFun=xiuxiu._init&amp;changeFlashHeightFun=xiuxiu._setHeight&amp;mouseWheelFun=xiuxiu._mouseWheel&amp;imageLoadedFun=xiuxiu._imageLoaded&amp;uploadFun=xiuxiu._upload&amp;beforeUploadFun=xiuxiu._beforeUpload&amp;uploadResponseFun=xiuxiu._uploadResponse&amp;batchUploadResponseFun=xiuxiu._batchUploadResponseFun&amp;batchUploadCompleteFun=xiuxiu._batchUploadCompleteFun&amp;saveBase64ImageFun=xiuxiu._saveBase64Image&amp;browseFun=xiuxiu._browse&amp;browseCancelFun=xiuxiu._browseCancel&amp;closePhotoEditorFun=xiuxiu._close&amp;debugFun=xiuxiu._debug"></object>
					<span class="gray9 ml10">仅支持gif、jpg、jpge，大小不超过1M</span>
				</div>
			</div>
</dd></dl></div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import _ from "lodash";
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