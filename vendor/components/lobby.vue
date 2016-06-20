<style lang="less" scoped>
@import (css) "../styles/lobby.css";
</style>

<template>
	<div class="g-box clearfix" style="height:auto;">
    <!-- <div class="search-box">
        <a class="pay-with" href="#">
            <em>
                Hi
            </em>
            ~~ 欢迎来到播吧，当前
            <em>
                422,051
            </em>
            人 与你同玩
        </a>
        <div class="search-bar">
            <input type="text" size="10" id="search_key" value="主播昵称/ID/靓号" onfocus="if(this.value=='主播昵称/ID/靓号'){this.value=''}" onblur="if(this.value==''){this.value='主播昵称/ID/靓号'}" onkeydown="searchKey.show_room_select_key(this.value)"/>
            <a title="搜索" class="icn-srh">
            </a>
        </div>
    </div> -->
    <div class="Square-area f-cb relative">
        <!-- <div class="cap f-cb" id="l-user" style="">
            <div class="sub-tit">
                <i class="t-img-8">
                    M我的
                </i>
            </div>
            <dl class="f-cb" id="m-nav">
                <dd class="curr">
                    关注的
                    <em id="user-collect">
                        0
                    </em>
                </dd>
                <dd class="">
                    守护的
                    <em id="user-guard">
                        0
                    </em>
                </dd>
                <dd class="">
                    看过的
                    <em>
                    </em>
                </dd>
            </dl>
            <div class="points r-points" style="display: none;">
            </div>
        </div>
        <div class="an-list f-cb tab-box" id="l-content" style="">
            <div class="slide" style="display: none">
                <a class="slide-prev" href="javascript:;">
                </a>
                <a class="slide-next" href="javascript:;">
                </a>
            </div>
            <div class="t-c" id="error-box" style="line-height: 130px; font-size: 24px; color: rgb(179, 179, 179);">
                您还未关注任何主播，请进房间关注您喜欢的主播
            </div>
            <ol class="f-cb tab-an-list" id="l-guard" style="left: 0px;">
            </ol>
            <ol class="f-cb" id="looked" style="display: none;">
            </ol>
        </div>
        <div class="cap f-cb">
            <dl class="f-cb">
                <dt>
                    <i class=" t-img-12">
                        推荐公会
                    </i>
                </dt>
            </dl>
        </div>
        <div class="an-list f-cb">
            <ol class="f-cb">
                <li>
                    <div class="img">
                        <a target="_blank" href="/f/12842">
                            <img src="http://image.cache.xiu8.com/family/200/150/12842.jpg"/>
                            <span class="mark">
                                <i class="pay">
                                </i>
                            </span>
                        </a>
                    </div>
                    <p class="name">
                        <a title="心动娱乐." target="_blank" href="/f/12842">
                            心动娱乐.
                        </a>
                    </p>
                </li>
                <li>
                    <div class="img">
                        <a target="_blank" href="/f/11692">
                            <img src="http://image.cache.xiu8.com/live/373/280/0.jpg"/>
                            <span class="mark">
                                <i class="pay">
                                </i>
                            </span>
                        </a>
                    </div>
                    <p class="name">
                        <a title="混血娱乐" target="_blank" href="/f/11692">
                            混血娱乐
                        </a>
                    </p>
                </li>
                <li>
                    <div class="img">
                        <a target="_blank" href="/f/12999">
                            <img src="http://image.cache.xiu8.com/live/373/280/0.jpg?v=1451372105545"/>
                            <span class="mark">
                                <i class="pay">
                                </i>
                            </span>
                        </a>
                    </div>
                    <p class="name">
                        <a title="V-one传媒" target="_blank" href="/f/12999">
                            V-one传媒
                        </a>
                    </p>
                </li>
                <li>
                    <div class="img">
                        <a target="_blank" href="/f/10027">
                            <img src="http://image.cache.xiu8.com/live/373/280/0.jpg"/>
                            <span class="mark">
                                <i class="pay">
                                </i>
                            </span>
                        </a>
                    </div>
                    <p class="name">
                        <a title="神龙妹子团" target="_blank" href="/f/10027">
                            神龙妹子团
                        </a>
                    </p>
                </li>
                <li>
                    <div class="img">
                        <a target="_blank" href="/f/12860">
                            <img src="http://image.cache.xiu8.com/family/200/150/12860.jpg"/>
                            <span class="mark">
                                <i class="pay">
                                </i>
                            </span>
                        </a>
                    </div>
                    <p class="name">
                        <a title="典石传媒" target="_blank" href="/f/12860">
                            典石传媒
                        </a>
                    </p>
                </li>
            </ol>
        </div> -->
        <div class="cap f-cb online stuckMenu isStuck">
            <!-- <ul class="opt">
                <li>
                    <span id="cur-sort" sortid="1">
                        综合排序
                    </span>
                    <i class="arr">
                    </i>
                    <div class="sub-block cap-sort f-dn">
                        <a href="javascript:void(0);" sortid="2">
                            人气排序
                        </a>
                        <a href="javascript:void(0);" sortid="3">
                            等级排序
                        </a>
                    </div>
                </li>
            </ul> -->
            <dl id="hot" style="margin-top: 20px;">
                <dt>
                    <i class="t-img-9">
                        在线主播
                    </i>
                </dt>
                <dd class="curr" tag-id="0">
                    全部
                </dd>
                <!-- <dd tag-id="4">
                    女神范
                </dd>
                <dd tag-id="2">
                    好声音
                </dd>
                <dd tag-id="3">
                    劲舞团
                </dd>
                <dd tag-id="6">
                    小清新
                </dd>
                <dd tag-id="1">
                    才艺咖
                </dd>
                <dd tag-id="5">
                    新人风
                </dd> -->
            </dl>
        </div>
        <div class="an-list f-cb" id="l-list">
            <ol class="f-cb" id="l-online">
                <li v-for="hct in hcts">
                    <em class="class-s">
                    </em>
                    <div class="img">
                        <em class="sub_bn2" style="display: none">
                        </em>
                        <a target="_blank" href="/{{hct.id}}">
                            <img :src="hct.roompic"/>
                            <span class="mark">
                                <i class="pay">
                                </i>
                            </span>
                            <span class="time">
                                已开播 {{hct.livetime}}
                            </span>
                        </a>
                    </div>
                    <p class="name">
                        <em class="al al{{hct.artistlevel}}">
                        </em>
                        <a title="{{hct.nickname}}" target="_blank" href="/{{hct.id}}">
                            {{hct.nickname}}
                        </a>
                    </p>
                    <p>
                        <span class="tag">
                            <strong style="color:#F057C5;">
                                好声音
                            </strong>
                        </span>
                        <span>
                            <i class="icon-people">
                            </i>
                            {{hct.totalnum}}
                        </span>
                    </p>
                </li>
                
            </ol>
        </div>
    </div>
    <div class="clear">
    </div>
</div>

</template>

<script>
import { hotContentList } from "../vuex/actions.js";
export default {
    vuex: {
        getters: {
            hcts: ( {hcts} ) => hcts,
        },
        actions: {
            hotContentList
        }
    },
	data() {
		return {
			data: 'data'
		}
	},
    created() {
        this.hotContentList();
    },
	components: {

	}
}

</script>