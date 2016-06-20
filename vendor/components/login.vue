<style scoped>
	.login {

	}
</style>

<template>
	<div id="_login_window_form" :style="has_show">
    <div id="delayLayer" class="delayLayer" :style="has_show"></div>
    <div id="js-glb-login" class="login-module" :style="has_show">
      <i class="tps"></i>
      <div><a href="javascript:void(0)" class="close js-closed" @click='closePane'>X</a> </div>
      <div class="tab">
        <ul class="f-cb"><li class="js-tab-login" :class="{curr: display=='login'}" @click="changeROL('login')">登录</li><li class="js-tab-register" :class="{curr: display=='registe'}" @click="changeROL('registe')">注册</li></ul>
      </div>
      <div class="loginError">{{errMsg}}</div>
      <div class="bd f-cb">
        <form autocomplete="off">
          <div class="reg-left">
            <ol>
              <li>
                <input id="lab-name" type="text" placeholder="用户名" @blur="blur" v-model="username" name="userName" class="ipt-txt" :class="{'err-txt': !!erruser}" maxlength="16">
                <!-- <label class="lab" for="lab-name">用户名</label> -->
                <span class="reg-tips">{{erruser}}</span>
              </li>
              <li style="display: none"><input type="text"><input type="password"></li>
              <li style="margin-top: 20px;">
                <input type="password" id="lab-pwd" placeholder="密码" v-model="password" name="userPwd" class="ipt-txt active" autocomplete="off" :class="{'err-txt': !!errpwd}">
                <!-- <label class="lab" for="lab-pwd">输入密码</label> -->
                <span class="reg-tips">{{errpwd}}</span>
              </li>
              <li style="height: 20px;"></li>
              <!-- <li class="code">
                <input type="text" id="lab-code" maxlength="3" name="vCode" class="ipt-txt" size="6"><span class="js-vCode"></span>
                <label class="lab" for="lab-code">验证码</label>
                <span class="reg-tips"></span>
              </li> -->
            </ol>
            <p class="js-check" v-if="display=='login'"><a class="back fr xiusta" href="/user/forgot_password" target="_blank">找回密码</a><input type="checkbox" name="remember" id="ipt-pwd"><label for="ipt-pwd">记住密码</label></p>
            <p class="js-check" v-if="display=='registe'"><input type="checkbox" checked="true" name="protocol" id="ipt-protocol"><label for="ipt-protocol">我已阅读并同意<a href="/account" class="u-line xiusta" target="_blank">&lt;&lt;来播吧服务用户条款&gt;&gt;</a></label></p>
            <p class="btn-wrap"><a href="javascript:void(0)" class="btn btn-reg js-submit" @click='login'>{{display == "login" ? "登录" : "注册"}}</a></p>
            <p class="js-bd-tip" v-if="display=='login'"><span>没有账号？<a class="js-lj-reg" href="javascript:void(0)" @click="changeROL('registe')">马上注册</a></span></p>
          </div>
        </form>
        <!-- <div class="Q-login">
          <p>快速登录</p>
          <p><a class="bai-btn js-login-baidu" href="javascript:void(0)">百度登录</a></p>
          <p><a class="QQ-btn js-login-qq" href="javascript:void(0)">qq登录</a></p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { saveUser, loginShow } from '../vuex/actions.js';
import { httper } from '../utils';
export default {
	vuex: {
		getters: {
			display: ({loginShow}) => loginShow
		},
		actions: {
			saveUser,
			loginShow
		}
	},
	data() {
		return {
			errMsg: '',
			username: '',
			password: '',
			erruser: '',
			errpwd: '',
			hasFailName: false
		}
	},
	computed: {
		has_show() {
			return this.display != 'none' ? {display: "block"} : {display: "none"};
		},
		getUsername() {
			return this.username.replace(/[^0-9a-zA-Z_]/g, '');
		},
		getPwd() {
			return this.password.replace(/[^0-9a-zA-Z_]/g, '');
		}
	},
	ready() {
		this.clearInput();
	},
	methods: {
		changeROL(type) {
			this.loginShow(type);
			this.clearInput();
		},
		blur() {
			if(this.display == "login") return;
			httper(
					"/php/user/searchUser",
					{
						loginname: this.getUsername
					},
					"POST").then( response => {
						if(_.result(response, "data.code") != 0) {
							this.erruser = _.result(response, "data.message");
						}else {
							this.hasFailName = true;
							this.erruser = "";
						}
					} );
		},
		closePane() {
			this.clearInput();
			this.loginShow('none');
		},
		login() {
			if(this.hasFailName == false && this.display != "login") return;
			if( this.getUsername.length < 4 || this.getUsername.length > 16 ) {
					return this.erruser="用户名4-16个字母和数字组成";
				}else {
					this.erruser="";
				}
				
				if( this.getPwd.length < 6 || this.getPwd.length > 20 ) {
					return this.errpwd="密码长度为6-20";
				}else{
					this.errpwd="";
				}
			if(this.display == "login") {
				function cb(response) {
					if(response.data && response.data.code == 0) {
						this.loginShow('none');
						this.clearInput();
						if( !_.isEmpty(response.data.data) ) this.saveUser(response.data.data);
						
					}else {
						this.errMsg = "用户名或密码错误";
					}
				}
				httper(
					"/php/user/login",
					{
						loginname: this.getUsername,
						password: this.getPwd
					},
					"POST").then(cb.bind(this));
			}else if(this.display == "registe") {
				function rcb(response) {
					if(response.data.code == 0) {
						this.saveUser(response.data.data);
						this.loginShow('none');
					}else {
						this.errMsg = response.data.message;
					}
				}

				httper(
					"/php/user/regist",
					{
						loginname: this.getUsername,
						password: this.getPwd,
						nickname: new Date().getTime()
					},
					"POST").then(rcb.bind(this));
			}
			
		},
		clearInput() {
			this.username = '';
			this.password = '';
			this.erruser='';
			this.errpwd='';
			this.errMsg='';
		}
	},
	components: {

	}
}

</script>