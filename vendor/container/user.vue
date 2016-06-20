<template>
  <div class='pagehome clearfix' style="height:100%;height:auto; min-height:100%;">
    <header-top v-if="!(!!$route.name && $route.name == 'room')"></header-top>
    <div class="main" style="min-height: 129px;">
      <div class="main-auto clearfix">
        <div class="left" avalonctrl="userleft">
          <dl class="zb-info clearfix">
            <dt class="inmg">
              <img id="user_photo_1" align="absmiddle" style="width: 55px; height: 55px" src="http://image.cache.xiu8.com/avatar/55/55/198882173.jpg?_=1461504922383">
            </dt>
            <dd>
              <p>
                <a href="javascript:void(0)" class="name" style="height:20px;line-height:20px;">{{user.nickname}}
                </a> 
                <b class="purple">{{user.id}}</b>
              </p>
              <p class="mt5">
                 <span class="ul ul{{user.userlevel>9?user.userlevel:'0'+user.userlevel}}"></span>
              </p>
            </dd>
          </dl>
          <div class="user-msg">
            <p id="p1" class="title" :class="{'cur-tit': selfTab}" @click="explan(0)">
              <s></s>我的秀吧<i id="i1" class="os"></i>
            </p>
            <ul id="u1" v-if="selfTab">
              <li :class="{cur: $route.path =='/user/info'}"><a v-link="{path: '/user/info'}" class="ma">个人设置</a></li>
              <li :class="{cur: $route.path =='/user/password'}"><a v-link="{path: '/user/password'}" class="me">修改密码</a></li>
              <li :class="{cur: $route.path =='/user/tips'}"><a v-link="{path: '/user/tips'}" class="mc">系统消息</a></li>
              <li :class="{cur: $route.path =='/user/myAttention'}"><a v-link="{path: '/user/myAttention'}" class="md">我的关注</a></li>
              <li :class="{cur: $route.path =='/user/vip'}"><a v-link="{path: '/user/vip'}" class="mf">我的VIP</a></li>
              <li :class="{cur: $route.path =='/user/number'}"><a v-link="{path: '/user/number'}" class="mg">我的靓号</a></li>
              <li :class="{cur: $route.path =='/user/car'}"><a v-link="{path: '/user/car'}" class="mh">我的座驾</a></li>
              <li :class="{cur: $route.path =='/user/defence'}"><a v-link="{path: '/user/defence'}" class="ml">我的守护</a></li>
              <!-- <li :class="{cur: $route.path =='/user/medal'}"><a v-link="{path: '/user/medal'}" class="ml">我的徽章</a></li> -->
            </ul>
          </div>
          <div class="user-msg">
            <p id="p2" class="title" :class="{'cur-tit': selfTab}" @click="explan(1)">
              <s></s>我的财富<i id="i2"></i>
            </p>
            <ul id="u2" v-if="moneyTab">
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
            <!--<p id="p10" class="title">
              <s></s>我的家族<i id="i10"></i>
            </p>
            <ul id="u10" v-if="famliyTab">
              <li><a href="/clan/initial" class="mj">我的家族</a></li>
            </ul>-->
          </div> 
        
        </div>
        <div  class="right">
          <router-view keep-alive></router-view>
        </div>
        
      </div>
    </div>
    
  </div>
  <footer-bottom  v-if="!(!!$route.name && $route.name == 'room')"></footer-bottom>
</template>

<script>
import store from '../vuex/store';
import {increment, decrement} from '../vuex/actions';

import headerTop from '../components/header.vue';
import footerBottom from '../components/footer.vue';

export default {
  store,
  vuex:{
      getters: {
          user: ({user}) => user
      }
  },
  data() {
    return {
      selfTab: true,
      moneyTab: false,
      famliyTab: false
    }
  },
  methods: {
    explan(target) {
      switch(target) {
        case 0:
          this.selfTab = !this.selfTab;
          break;
        case 1:
          this.moneyTab = !this.moneyTab;
          break;
        case 2:
          this.famliyTab = !this.famliyTab;
          break;
      }
    }
  },
  components: {
    headerTop,
    footerBottom
  }
}


</script>

<style scoped>
.view {
  transition: all .5s ease;
}
.test-enter, .test-leave {
  opacity: 0;
  transform: translate3d(10px, 0, 0);
}
.v-link-active {
  color: red;
}
</style>
