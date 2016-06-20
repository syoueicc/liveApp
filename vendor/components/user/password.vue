<style scoped>
	.password {

	}
</style>

<template>
			<div>
				<div class="title">修改密码</div>
				<form action="/user/updatePassword" method="POST" id="passwordForm" class="work-form">
                    <div class="control-group clearfix mt30">
					<label class="control-label">*当前密码：</label>
					<div type="name" class="controls">
                            <p style="padding:0;margin:0">
                                <input type="password" class="text" style="width : 200px" maxlength="20">
                                <span id="oldspan" style="display:inline" class="help-inline">
                                                                      
                                </span>
                                 
                            </p>
                        </div>
				</div>
				<div class="control-group clearfix">
					<label class="control-label">*新密码：</label>
					 <div type="name" class="controls">
                            <p style="padding:0;margin:0">
                                <input type="password" class="text" style="width : 200px" maxlength="20">
                                <span id="newspan1" style="display:inline" class="help-inline">
                                        
                                </span>
                            </p>
                        </div>
				</div>

				<div class="control-group clearfix">
					<label class="control-label">*确认新密码：</label>
				<div type="name" class="controls">
                            <p style="padding:0;margin:0">
                                <input type="password" class="text" style="width : 200px" maxlength="20">
                                <span id="newspan2" style="display:inline" class="help-inline">
                                          
                                </span>
                            </p>
                        </div>
				</div>

			
                    <div class="control-group mt30 clearfix">
                        <label class="control-label"></label>
                        <div type="name" class="controls">
                            <a href="javascript:void(0)" class="buy-back" id="password_save">保存密码</a>
                        </div>
                    </div>
				</form>
				</div>
				<div class="alert mt30">
					<div class="alert-img">
						<em class="mt3"></em>
						<p class="fb f14">定期更换密码可以让您的账户更加安全。</p>
						<p class="mt5">不要将密码设置为出生日期、手机号等公开信息,建议密码采用字母和数字混合，并且不短于6位。</p>
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