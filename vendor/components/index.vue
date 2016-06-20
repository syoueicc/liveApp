<style scoped>

</style>

<template>
	<div>
		<div class="Hot-live" v-if="hls">
                <div class="g-box photoAlbum f-cb">
                    <h4 class="title">
                        最热现场Top 1
                    </h4>
                    <a class="photo1"  target="_blank" @click="gotoRoom" href='/{{hls[0].id}}'>
                        <img :src="hls[0].roompic"/>
                        <i class="p-bg">
                        </i>
                        <strong>
                            <i class="icon-people">
                            </i>
                            {{hls[0].totalnum}}
                        </strong>
                        <span class="mark">
                            <i class="pay">
                            </i>
                        </span>
                        <span class="name">
                            <em class="al al{{hls[0].artistlevel}} ">
                            </em>
                            {{hls[0].nickname}}
                        </span>
                    </a>
                    <div class="global-photo-inner clearfix">
	                    <template v-for='hl in hls' track-by="$index">
	                    	<template v-if='$index > 0'>
	                    		<a target="_blank" @click.prevent="gotoRoom" href='/{{hl.id}}'>
			                        <img :src="hl.roompic"/>
			                        <i class="p-bg">
			                        </i>
			                        <strong>
			                            <i class="icon-people">
			                            </i>
			                            {{hl.totalnum}}
			                        </strong>
			                        <span class="mark">
			                            <i class="pay">
			                            </i>
			                        </span>
			                        <span class="name">
			                            <em class="al al{{hl.artistlevel}} ">
			                            </em>
			                            {{hl.nickname}}
			                        </span>
			                    </a>
	                    	</template>
	                    </template>
                    </div>
                </div>
            </div>
            <div class="g-box" style="position: relative">
                <div class="right-side fr" style="padding-top: 20px;">
                    <!-- <div class="search-bar f-cb">
                        <input type="text" id="search_key" size="10" value="主播昵称/ID/靓号" onfocus="if(this.value=='主播昵称/ID/靓号'){this.value=''}" onblur="if(this.value==''){this.value='主播昵称/ID/靓号'}" onkeydown="searchKey.show_room_select_key(this.value)"/>
                        <a class="icn-srh" title="搜索">
                        </a>
                    </div> -->
                    
                <div class="Charts" id="BroadAndUser" attr="0">
                    <div class="tit clearfix">
                        <h2>
                            <a :class="{cur: rankTarget=='anchor'}" href="javascript:void(0);" @click="changeRankTarget('anchor')">
                                主播
                            </a>
                            <a :class="{cur:  rankTarget=='richer'}" href="javascript:void(0);" @click="changeRankTarget('richer')">
                                土豪
                            </a>
                        </h2>
                    </div>
                    <div class="bd">
                        <div class="tab">
                            <div class="tab-t clearfix" id="BroadAndUserTab">
                                <a class="wd-25" :class='{ cur: rankType == "day" }' @click='changeRank("day")' style="width:32.9%;">
                                    日
                                </a>
                                <a class="wd-25" :class='{ cur: rankType == "week" }' @click='changeRank("week")' style="width:32.9%;">
                                    周
                                </a>
                                <a class="wd-25" :class='{ cur: rankType == "month" }' @click='changeRank("month")' style="width:32.9%;">
                                    月
                                </a>
                                
                        </div>
                    </div>
                    <div class="tab-c">
                        <div class="list" style="display: block" id="broadAndUserRank" v-if="showRank">
                        	<template v-for="r in showRank">
	                            <dl class="lis{{$index + 1}} clearfix">
                                    <template v-if="!!r.room_id">
                                        <dt>
                                            <a target="_blank" @click.prevent="gotoRoom" href="/{{r.room_id}}">
                                                <img align="absmiddle" :src="r.pic"/>
                                            </a>
                                        </dt>
                                        <dd>
                                            <p class="name">
                                                <a target="_blank" @click.prevent="gotoRoom" href="/{{r.room_id}}" title="{{r.nickname}}">
                                                    {{r.nickname}}
                                                </a>
                                                <span class="xz-pos">
                                                    <em class="al al{{r.userlevel}}">
                                                    </em>
                                                </span>
                                            </p>
                                            <p class="gray9 mt5">
                                        </dd>
                                    </template>
                                    <template v-else>
                                        <dt>
                                            <img align="absmiddle" :src="r.pic"/>
                                        </dt>
                                        <dd>
                                            <p class="name">
                                                {{r.nickname}}
                                                <span class="xz-pos">
                                                    <em class="ul ul{{r.userlevel<9?'0'+r.userlevel:r.userlevel}}">
                                                    </em>
                                                </span>
                                            </p>
                                            <p class="gray9 mt5">
                                        </dd>
                                    </template>
	                            </dl>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 排行列表 部分html End -->
            <!-- <div class="Charts top-bar"  id="SongAndFamily" attr="0">
                <div class="tit clearfix">
                    <h2>
                        
                        <a class="cur">
                            家族
                        </a>
                    </h2>
                </div>
                <div class="bd">
                    <div class="tab" id="SongAndFamilyTab">
                        
                        <div class="tab-t clearfix">
                            <a class="cur wd-33" style="width:49.9%;" :class='{ cur: sfRankType === 0 }' @click='changeRankType(0, "sf")'>
                                周
                            </a>
                            <a class="wd-33" style="width:49.9%;" :class='{ cur: sfRankType === 1 }' @click='changeRankType(1, "sf")'>
                                月
                            </a>
                            
                    </div>
                </div>
                <div class="tab-c" v-if="sfRank.length > 0">
                    <div class="list" style="display: block" id="songAndFamilyRank">
                    	<template v-for='sf in sfRank'>
                    		<dl class="lis{{$index+1}} clearfix">
	                            <dd>
	                                <p class="name">
	                                    <span class="Badge-f">
	                                        <img :src="sf.emblemImg"/>
	                                    </span>
	                                    {{sf.fname}}
	                                </p>
	                                <p class="gray9 mt5">
	                                </p>
	                            </dd>
	                        </dl>
                    	</template>
                        
                    </div>
                </div>
            </div>
        </div> -->
        
        <div class="Hot-line">
            <p class="title">
                <i class="t-img-5">
                    客服热线
                </i>
            </p>
            <p>
                在线客服：
                <a id="BZQQ1001">
                    <i title="在线客服" class="qq-img">
                    </i>
                </a>
            </p>
            
    </div>
    
    <div class="Help">
        <p class="title">
            <i class="t-img-6">
                新手帮助
            </i>
        </p>
        <p>
            <a target="_blank" href="/help?t=1" title="什么是主播等级？">
                什么是主播等级？
            </a>
        </p>
        <!-- <p>
            <a target="_blank" href="/help?t=2" title="什么是财富等级？">
                什么是财富等级？
            </a>
        </p>
        <p>
            <a target="_blank" href="/help?t=3" title="禁言踢人权限说明？">
                禁言踢人权限说明？
            </a>
        </p>
        <p>
            <a target="_blank" href="/help?t=4" title="主播/房管对应权限？">
                主播/房管对应权限？
            </a>
        </p>
        <p class="more">
            <a target="_blank" href="/help?t=0" title="更多帮助信息">
                更多帮助信息
            </a>
        </p> -->
    </div>
    
</div>

<div class="Waterfall f-cb" style="padding-top: 20px;">
    <!-- <div class="cap f-cb">
        <span class="link" id="tj-icon">
            推荐规则
        </span>
        <div class="link-tips f-dn" id="tj-tips">
            <span style="color:#ff0;">
                活动时间：每日0点至24点
            </span>
            <br/>
            各公会在活动时间，根据收到公会专属礼物数量由高到低的前四名公会，可获得首页公会推荐位置，推荐位实时更新。
        </div>
        <dl class="r-dl">
            <dt>
                <i class="t-img-g-1">
                    我的足迹
                </i>
            </dt>
            <dd :class="{curr: mylistindex == 0}" @click='showWhatList(0)'>
                公会房
            </dd>
            <dd :class="{curr: mylistindex == 1}" @click='showWhatList(1)'>
                关注的
                <em id="user-collect">
                </em>
            </dd>
            <dd :class="{curr: mylistindex == 2}" @click='showWhatList(2)'>
                守护的
                <em id="user-guard">
                </em>
            </dd>
            <dd :class="{curr: mylistindex == 3}" @click='showWhatList(3)'>
                看过的
                <em>
                </em>
            </dd>
        </dl>
        <div class="points r-points">
        </div>
    </div>
    <div class="an-list f-cb tab-box">
        <div class="slide" id="rec-slide" style="display: none">
            <a class="slide-prev rec-prev" href="javascript:;">
            </a>
            <a class="slide-next rec-next" href="javascript:;">
            </a>
        </div>
        <div class="t-c" id="error-box" style="line-height: 130px;font-size:24px;color:#b3b3b3;display: none">
            您还未关注任何主播，请进房间关注您喜欢的主播
        </div>
        <ol class="f-cb tab-an-list" id="rec-guard">
        </ol>
        <ol class="f-cb" id="recommend">
        	<li v-for='recommend in recommends' track-by="$index">
                <em class="class-s">
                </em>
                <div class="img">
                    <em class="sub_bn2" style="display: none">
                    </em>
                    <a target="_blank" href='/{{recommend.roomid}}'>
                        <img :src="recommend.imgsrc"/>
                        <span class="mark">
                            <i class="pay">
                            </i>
                        </span>
                        <span class="time">
                            {{recommend.time}}
                        </span>
                    </a>
                </div>
                <p class="name">
                    <em class="al al16">
                    </em>
                    <a title="{{recommend.name}}" target="_blank" href='/{{recommend.roomid}}'>
                        {{recommend.name}}
                    </a>
                </p>
                <p>
                    <span class="tag">
                        <strong style="color:#F057C5;">
                            {{recommend.tag}}
                        </strong>
                    </span>
                    <span>
                        <i class="icon-people">
                        </i>
                        {{recommend.count}}
                    </span>
                </p>
            </li>
        </ol>
    </div> -->

    <div class="cap f-cb hot">
        <dl>
            <dt>
                <i class="t-img-2">
                    热门精选
                </i>
            </dt>
            <dd class="curr">
                全部
            </dd>
            <!-- <dd>
                好声音
            </dd>
            <dd>
                女神范
            </dd>
            <dd>
                劲舞团
            </dd>
            <dd>
                小清新
            </dd>
            <dd>
                文艺范
            </dd> -->
        </dl>
    </div>
    <div class="an-list f-cb" v-if="hcts">
        <ol class="f-cb findAnchor">
        	<li v-for='hct in hcts'>
                <em class="class-s">
                </em>
                <div class="img">
                    <em class="sub_bn2" style="display: none">
                    </em>
                    <a target="_blank" @click.prevent="gotoRoom" href='/{{hct.id}}'>
                        <img :src="hct.roompic"/>
                        <span class="mark">
                            <i class="pay">
                            </i>
                        </span>
                        <span class="time">
                            正在直播中...
                        </span>
                    </a>
                </div>
                <p class="name">
                    <em class="al al16">
                    </em>
                    <a title="{{hct.nickname}}" target="_blank" @click.prevent="gotoRoom" href='/{{hct.id}}'>
                        {{hct.nickname}}
                    </a>
                </p>
                <p>
                    <span class="tag">
                        <strong style="color:#F057C5;">
                           女神范
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
    <!-- 左侧-发现好主播 End -->
    <!-- <div class="look">
        <a v-link="'lobby'">
            <img src="/images/home/look.png"/>
        </a>
    </div> -->
</div>
<!--
    左侧-主播列表-瀑布流 End
-->
<div class="clear">
</div>
</div>
<!--
页内容 部分html End
-->
	</div>
</template>

<script>
import { hotList,hotContentList,
         dayRankForAnchor,
         dayRankForRicher,
         weekRankForAnchor,
         weekRankForRicher,
         monthRankForAnchor,
         monthRankForRicher,
         loginShow } from "../vuex/actions.js";
import { httper } from '../utils';

export default {
    vuex: {
        getters: {
            hcts: ( {hcts} ) => hcts,
            hls: ( {hls} ) => hls,
            dfa: ( {dfa} ) => dfa,
            dfr: ( {dfr} ) => dfr,
            wfa: ( {wfa} ) => wfa,
            wfr: ( {wfr} ) => wfr,
            mfa: ( {mfa} ) => mfa,
            mfr: ( {mfr} ) => mfr,
            user: ({user}) => user
        },
        actions: {
            hotList,
            hotContentList,
            dayRankForAnchor,
            dayRankForRicher,
            weekRankForAnchor,
            weekRankForRicher,
            monthRankForAnchor,
            monthRankForRicher,
            loginShow
        }
    },
	data() {
		return {
			rankTarget: "anchor",
            rankType: "day"
		}
	},
    computed: {
        showRank() {
            switch( [this.rankTarget, this.rankType].join() ) {
                case "anchor,day":
                    return this.dfa;
                case "richer,day":
                    return this.dfr;
                case "anchor,week":
                    return this.wfa;
                case "richer,week":
                    return this.wfr;
                case "anchor,month":
                    return this.mfa;
                case "richer,month":
                    return this.mfr;
            }
        }
    },
	methods: {
        gotoRoom(event) {
            event.preventDefault();
            if(this.user != null) {
                window.open(event.currentTarget.href);
            }else {
                this.loginShow("login");
            }
        },
		changeRank(type) {
            this.rankType = type;
        },
        changeRankTarget(type) {
            this.rankTarget = type;
            this.rankType = "day";
        }
	},
	created() {
        this.hotList();
        this.hotContentList();
        this.dayRankForAnchor();
        this.dayRankForRicher();
        this.weekRankForAnchor();
        this.weekRankForRicher();
        this.monthRankForAnchor();
        this.monthRankForRicher();
	},
    ready() {
    },
	components: {
		
	}
}

</script>