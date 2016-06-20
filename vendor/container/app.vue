<template>
  <div class='pagehome clearfix' style="height:100%;height:auto; min-height:100%;">
    <header-top></header-top>
    <router-view class="view" keep-alive style="padding-bottom:88px;"></router-view>
  </div>
  <footer-bottom></footer-bottom>
</template>

<script>
import store from '../vuex/store';
import {increment, decrement} from '../vuex/actions';

import headerTop from '../components/header.vue';
import footerBottom from '../components/footer.vue';

export default {
  store,
  vuex: {
    getters: {
      count: ({count}) => count,
    },
    actions: {
      increment,
      decrement
    }
  },
  data() {
    return {
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
