<style scoped>

</style>

<template>
  <div class='headControl'>
    <div class="g-head" id="mainhead">
      <div class="header box f-cb">
          <span class="logo">
              <img src="/images/home/x8-logo.png" />
          </span>
          <ol class="f-cb nav" id="btn_list">
            <template v-if="menuType">
              <li>
                  <a href="/" target="_self">
                      首页
                  </a>
              </li>
              <li>
                  <a href="/rank" target="_self">
                      排行榜
                  </a>
              </li>
              <li>
                  <a href="/mall/vip" target="_self">
                      商城
                  </a>
              </li>
              <li>
                  <a href="/order" target="_self">
                      充值
                  </a>
              </li>
            </template>
            <template v-else>
              <li :class='{cur: $route.path == "/"}'>
                  <a v-link="'/'">
                      首页
                  </a>
              </li>
              <li :class='{cur: $route.path == "/rank"}'>
                  <a v-link="'/rank'">
                      排行榜
                  </a>
              </li>
              <li :class='{cur: $route.path.indexOf("/mall")>-1 }'>
                  <a v-link="'/mall/vip'">
                      商城
                  </a>
              </li>
              <li :class='{cur: $route.path == "/order"}'>
                  <a v-link="'/order'">
                      充值
                  </a>
              </li>
            </template>
              <!--<li :class='{cur: $route.path == "/rank"}'>
                  <a v-link="'rank'">
                      排行榜
                  </a>
              </li>
               <li :class='{cur: $route.path == "/clan"}'>
                  <a v-link="'clan'">
                      家族
                  </a>
              </li> 
              <li :class='{cur: $route.path == "/mall"}'>
                  <a v-link="'mall'">
                      商城
                  </a>
              </li>
              <li :class='{cur: $route.path == "/order"}'>
                  <a v-link="'order'">
                      充值
                  </a>
              </li>-->
          </ol>
          <ul class="user-panel f-cb">
              <li id="login_btn" v-show="!showUserPane">
                  <a class="mr5 xiusta" href="javascript:void(0)" @click="showLogin('login')">
                      登录
                  </a>
                  |
                  <a class="ml5 xiusta" href="javascript:void(0)" @click="showLogin('registe')">
                      注册
                  </a>
              </li>
              <li class="first" :class="{'curr': showItem}" @mouseover="setShowItem(true)" @mouseout="setShowItem(false)" v-if="showUserPane">
                  <span class="pers" id="hpers">
                      <img class="pho" width="35" height="35" :src="user.pic" />
                      {{user.loginname}}
                  </span>
                  <div class="dlg dlg-merber f-dn">
                      <!-- f-dn -->
                      <div class="d-con">
                          <ul class="f-cb">
                              <li>
                                  <a href="/user/info" target="_self">
                                      <i class="icon u-i-1">
                                      </i>
                                      个人资料
                                  </a>
                              </li>
                              <li>
                                  <a href="/user/info" target="_self">
                                      <i class="icon u-i-2">
                                      </i>
                                      个人设置
                                  </a>
                              </li>
                              <li>
                                  <a href="/user/wealth/recharge" target="_self">
                                      <i class="icon u-i-3">
                                      </i>
                                      充值查询
                                  </a>
                              </li>
                              <li>
                                  <a href="/user/myAttention" target="_self">
                                      <i class="icon u-i-4">
                                      </i>
                                      我的关注
                                  </a>
                              </li>
                              <li>
                                  <a href="/user/car" target="_self">
                                      <i class="icon u-i-5">
                                      </i>
                                      我的座驾
                                  </a>
                              </li>
                              <li>
                                  <a href="/user/vip" target="_self">
                                      <i class="icon u-i-6">
                                      </i>
                                      特权VIP
                                  </a>
                              </li>
                              <li>
                                <a href="javascript:void(0);" @click="logoutAction">
                                    <i class="icon u-quit">
                                    </i>
                                    退出
                                </a>
                              </li>
                          </ul>
                          <div class="btnbox">
                              <a class="u-btn-2 u-recharge" href="/order" target="_self">
                                  立即充值
                              </a>
                              
                          </div>
                      </div>
                  </div>
              </li>
              <li id="hlevelIcon" v-if="showUserPane">
                <em class="ul ul{{user.userlevel > 9 ? user.userlevel: '0'+user.userlevel}}"></em>
              </li>
              <li id="hMoney" v-if="showUserPane">
                <span>秀币：{{user.balance}}</span>
              </li>
          </ul>
      </div>
  </div>
  </div>
  <login></login>
</template>

<script>
import store from '../vuex/store';
import login from "./login";
import {logout, loginShow} from "../vuex/actions.js";
export default {
  store,
  vuex: {
      getters: {
          user: ( {user} ) => user,
          rooURL: ({rooURL}) => rooURL
      },
      actions: {
        logout,
        loginShow
      }
  },
  data() {
    return {
      msg: 'result',
      counter: 0,
      logined: "none",
      showItem: false
    }
  },
  computed:{
    showUserPane() {
      return !!this.user ? true : false;
    },
    menuType() {
      return /^\/user/.test(this.$route.path);
    }
  },
  methods: {
    showLogin(type) {
      this.loginShow(type);
    },
    setShowItem(bool) {
      this.showItem = bool;
    },
    logoutAction() {
      this.logout();
      this.showItem = false;
    }
  },
  components: {
    login
  }
}

</script>