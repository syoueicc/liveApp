<style scoped>
</style>

<template>
	<div>
		<div id="noviceTask" class="f-dn noviceTask1">
    <i class="btn-novice">
    </i>
</div>
<div class="side-menu" id="dom_room_head" ms-controller="roomHeadController">
    <div class="header-box-dd">
        <div class="f-cb">
            <div class="f-cb bord">
                <a class="logo" href="index-1.htm" tppabs="http://www.xiu8.com/" target="_blank">
                </a>
            </div>
            <div class="user-panel f-cb bord">
                <ul id="left_nav">
                    <!-- 用户头像 -->
                    <li class="pers" :class="{{curr: !!user}}" v-if="!!user">
                        <img width="50" height="50" class="pho" ms-click="showPanel('user')" :src="user.pic" @click="setShowItem()" />
                        <div class="dlg dlg-merber" v-show="showItem">
                            <div class="d-con">
                                <h3>
                                    {{user.nickname}}
                                </h3>
                                <div>
                                    <em class="ul ul{{parseInt(user.userlevel)+1>9?parseInt(user.userlevel)+1:'0'+(parseInt(user.userlevel)+1)}}">
                                    </em>
                                </div>
                                <ul class="f-cb">
                                    <li  style="clear:left;">
                                        <a href="/user/info" tppabs="/user/info" target="_blank">
                                            <i class="icon u-i-1">
                                            </i>
                                            个人资料
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/user/info" tppabs="/user/info" target="_blank">
                                            <i class="icon u-i-2">
                                            </i>
                                            个人设置
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/user/info" tppabs="/user/info" target="_blank">
                                            <i class="icon u-i-3">
                                            </i>
                                            充值查询
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/user/myAttention" tppabs="/user/info" target="_blank">
                                            <i class="icon u-i-4">
                                            </i>
                                            我的关注
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/user/car" tppabs="/user/info" target="_blank">
                                            <i class="icon u-i-5">
                                            </i>
                                            我的座驾
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/user/vip" tppabs="/user/info" class="u-vip" target="_blank">
                                            <i class="icon i-vip">
                                            </i>
                                            特权VIP
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" @click="logoutActions">
                                            <i class="icon u-quit">
                                            </i>
                                            退出
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <!-- 秀币余额 -->
                    <li class="pay bord" v-if="!!user">
                        <div class="money">
                            <i class="icon u-cf">
                            </i>
                            <b>
                                秀币
                            </b>
                            <br/>
                            <strong class="num">
                            {{user.balance}}
                            </strong>
                            <a class="u-btn-2 u-recharge" href="/order" target="_blank">
                                充值
                            </a>
                        </div>
                    </li>
                    <!-- 登录区域 -->
                    <li class="bord reg-btx" v-if="user ==null">
                        <span class="btn-log xiusta" @click="showLogin('login')">
                            登录
                        </span>
                        <span class="btn-reg xiusta" @click="showLogin('registe')">
                            注册
                        </span>
                    </li>
                    <!-- 主播区域独立配置 -->
                    <li class="pers" id="anchorInfo" ms-if="isShowBroad == true" ms-visible="isShowBroad == true" style="display:none;">
                        <img class="pho" alt="" ms-src="'+ head_info.uid +'.jpg'}}" tppabs="http://www.xiu8.com/{{'http://image.cache.xiu8.com/avatar/110/110/'+ head_info.uid +'.jpg'}}" ms-mouseenter="showAnchorTip($event)" ms-mouseleave="showAnchorTip($event)"/>
                        <span class="a-name" ms-text="head_info.unn">
                        </span>
                        <span class="u-atten">
                            关注
                        </span>
                        <span  style="display:none;" class="u-atten-c">
                            已关注
                        </span>
                    </li>
                    <li ms-class="{{tipPanel_flag==true ? 'curr' : ''}}">
                        <a href="javascript:void(0);" ms-click="showPanel('tip')">
                            消息
                            <i class="number" style="display:none;" ms-visible="tipPanel_num>0" ms-text="tipPanel_num>99 ? '99+' : tipPanel_num">
                            </i>
                        </a>
                    </li>
                    <li ms-class="{{lobbyPanel_flag==true ? 'curr' : ''}}">
                        <a href="javascript:void(0);" ms-click="showPanel('lobby')">
                            广场
                        </a>
                        <div class="dlg-sq" style="display: none" id="js-dlg-sq">
                            <button class="btn">
                                点击
                            </button>
                        </div>
                    </li>
                    <li ms-class="{{signPanel_flag==true ? 'curr' : ''}}">
                        <a id="js-show-sign" href="javascript:void(0)" ms-click="showPanel('sign')">
                            签到
                            <i class="point" style="display: none">
                            </i>
                        </a>
                    </li>
                    <li>
                        <a href="vip-1.htm" tppabs="http://www.xiu8.com/mall" target="_blank">
                            商城
                        </a>
                    </li>
                    <li class="f-dn" ms-if="userRole == 6" ms-visible="userRole == 6">
                        <a ms-click="showBroadPanel()">
                            管理
                        </a>
                    </li>
                    <li class="f-dn" ms-if="userRole == 1" ms-visible="userRole == 1">
                        <a ms-click="showSysPanel()">
                            管理
                        </a>
                    </li>
                    <li class="f-dn" ms-if="family_role == 1 || family_role == 3" ms-visible="family_role == 1 || family_role == 3">
                        <a ms-click="showFPanel()">
                            隐身
                        </a>
                    </li>
                    <!-- 贴吧返回提示 -->
                    <li class="women-live" ms-visible="isTbLive == true" style="display: none;">
                        <a href="#" target="_blank">
                            美女直播吧
                        </a>
                        <div class="dlg-sq dlg-ld" id="tbLive" style="display: none">
                            <button class="btn">
                                点击
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="module-area">
                <ul id="m_area">
                    <li class="app-down" id="appIcon">
                        <a target="_blank" href="#" class="down">
                            <i class="u-show">
                            </i>
                            下载
                        </a>
                        <div id="QRCode" class="sub-dlg">
                            <a target="_blank" href="#">
                                <img style="vertical-align: middle;" src="http://www.xiu8.com/assets/images/room/er-code.jpg" tppabs="http://www.xiu8.com/assets/images/room/er-code.jpg"/>
                            </a>
                            <p class="txt pt10 t-c">
                                秀吧手机端
                                <br/>
                                轻松扫一扫
                            </p>
                        </div>
                    </li>
                    <li>
                        <a class="service" id="BZQQservice" href="javascript:void(0);">
                            客服
                        </a>
                    </li>
                    <li>
                        <a class="help" target="_blank" href="help-t=0.htm" tppabs="http://www.xiu8.com/help?t=0">
                            帮助
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<div class="menu-dlg f-dn" ms-controller="lobbyModuleController" ms-css-height="{{setHeight}}px" ms-if="lobby_flag == true" ms-visible="lobby_flag">
    <div class="dlg-tab">
        <a href="javascript:void(0);" onclick="hidePanel.hide()" class="more xiusta" stadata="{en:'lobby_close_btn_room',xst:'c',et:'mc',tm:'more',v:1}">
            收起
        </a>
        <ul class="f-cb" id="lobbyNav">
            <li class="cur">
                美女广场
            </li>
            <li ms-if="isShowCollect == true" ms-visible="isShowCollect == true" style="display:none;">
                我的关注
            </li>
        </ul>
    </div>
    <div class="bd an-list lobbyScroll">
        <div class="scrollbar">
            <div class="scrollbar-track">
                <div class="scrollbar-thumb">
                    <div class="scrollbar-thumb-end">
                    </div>
                </div>
            </div>
        </div>
        <div class="jscroll-c viewport" id="lobbyBox" ms-css-height="{{lobbyHeight}}px">
            <ol class="wholearea" style="position: absolute;" id="lobby_list">
            </ol>
        </div>
    </div>
</div>
<div class="menu-msg f-dn" ms-controller="tipPanelController" ms-css-height="{{tipPanelHeight}}px" ms-if="showTip==true" ms-visible="showTip">
    <h3 class="f-cb">
        <span>
            我的消息
        </span>
    </h3>
    <div class="bd tippanel-scroll">
        <div class="scrollbar">
            <div class="scrollbar-track">
                <div class="scrollbar-thumb">
                    <div class="scrollbar-thumb-end">
                    </div>
                </div>
            </div>
        </div>
        <div class="jscroll-c viewport" id="tipBox" ms-css-height="{{tipHeight}}px">
            <ul class="wholearea" style="position: absolute;" id="tipPanel-ul">
            </ul>
        </div>
    </div>
</div>
<div class="room-bg Anchor-room">
    <!-- 直播间页面-开始 -->
    <div class="g-room" id="groom">
        <div class="g-bd">
            <!-- flash特效：超级礼物、座驾、流光 -->
            <div id="domAnimation" style="position:relative; width: 1px;height: 1px;z-index:13; top:1px;left:1px;" ms-controller="baseAnimation">
                <div style="position: absolute;top:35px;left:58px;width:1px;height: 1px;">
                    <div id="domCar">
                    </div>
                </div>
                <div style="position: absolute;top:0px;left: 0px;width:1px;height: 1px;">
                    <div id="domSupper">
                    </div>
                </div>
                <div style="position: absolute;top:260px;left: 160px;width:1px;height: 1px;">
                    <div id="domgiftEffect">
                    </div>
                </div>
                <div id="cateran" style="position: absolute;top:0px;left:0px;width:1px;height:1px;">
                </div>
                <div id="ignitionBoy" style="position: absolute;top:24px;left:60px;width:1px;height:1px;">
                </div>
            </div>
            <div class="g-sd">
                <!-- 主播个人信息 -->
                <!-- 主播信息模板 -->
                <div class="AR-infor" ms-controller="broadInfo" id="broadInfo">
                    <dl class="f-cb">
                        <dt>
                            <span id="broadHeaddress">
                            </span>
                            <div class="photo">
                                <div class="cav">
                                    <canvas height="84" width="84">
                                    </canvas>
                                </div>
                                <img alt="{{room.nickname}}" :src="room.pic"/>
                            </div>
                        </dt>
                        <dd>
                            <div class="name">
                                {{room.nickname}}
                            </div>
                            <p class="attention" id="g_coll">
                                <span class="u-atten xiusta"   @click="focus" v-if=" judgeSub == '' ">
                                    关注
                                </span>
                                <span v-show=" judgeSub != '' " @click="focus('unsubscribe')" @mouseover="changeFocusState('over', $event)" @mouseleave="changeFocusState('leave', $event)" class="u-atten-c">
                                    已关注
                                </span>
                                <span class="num">
                                    {{room.sub_count}}人
                                </span>
                            </p>
                        </dd>
                    </dl>
                    <div class="M-progress">
                        <div class="slider" style="width:{{Math.floor(room.artist_exp / room.level_exp * 100)}}%;">
                        </div>
                        <div class="num">
                            还差{{ room.level_exp - room.artist_exp }}秀币
                        </div>
                        <span class="having">
                            <a target="_blank" href="help-t=1.htm" tppabs="http://www.xiu8.com/help?t=1" class="al al{{(parseInt(room.artist_level)+1)>9?parseInt(room.artist_level) + 1:'0'+(parseInt(room.artist_level)+1)}}" ms-class="">
                            </a>
                        </span>
                        <span class="had">
                            <a target="_blank" href="help-t=1.htm" tppabs="http://www.xiu8.com/help?t=1" class="al al{{parseInt(room.next_level) + 1>9?parseInt(room.next_level) + 1:'0'+(parseInt(room.next_level)+1)}}">
                            </a>
                        </span>
                    </div>
                    <div class="txt">
                        <p class="u-icon" id="medalList">
                            徽章：
                        </p>
                    </div>
                    <div class="hot-sign">
                        热力榜：第&nbsp;
                        <em>
                            {{room.rank}}
                        </em>
                        &nbsp;名
                    </div>
                    <!-- <div class="signs">
                        <img src="http://image.cache.xiu8.com/family/120/120/11692.jpg" tppabs="http://image.cache.xiu8.com/family/120/120/11692.jpg" width="24" height="24"/>
                        混血娱乐
                    </div> -->
                </div>
                <!-- 守护主播 -->
                <!-- 守护模板 -->
                <div id="guardaAea" class="guard-anchor">
                    <div class="title">
                        <a class="more a_graud_more" style="display:none">
                            更多
                        </a>
                        <a target="_blank" href="#" tppabs="http://www.xiu8.com/mall/buyGuard?recvId=925075&amp;roomId=925075" class="u-watch u-watch-g js-update-bdid">
                            守护团
                        </a>
                        开通
                        <span class="sp_graud_no">
                        {{knight.length}}
                        </span>
                        人
                    </div>
                    <div class="u-list">
                        <ul class="f-cb js-graud-four">
                            <template v-for="index in [0,1,2,3]">
                                <template v-if="!!knight[index]">
                                    <li>
                                        <span class="txt">亲密度<br>1057480</span>
                                        <span class="bg"></span>
                                        <img style="width: 57px;height: 57px" alt="" :src="knight[index].pic"><span class="f-toe">{{knight[index].nickname}}</span>
                                    </li>
                                </template>
                                <template v-else>
                                    <li>
                                        <a class="u-wait" target="_blank" href="javascript:;">
                                            <img width="57" height="57" alt="虚位以待" src="http://www.xiu8.com/assets/images/public/trans.gif" tppabs="http://www.xiu8.com/assets/images/public/trans.gif"/>
                                        </a>
                                    </li>
                                </template>
                                
                            </template>
                        </ul>
                    </div>
                </div>
                <!-- 用户列表 -->
                <!-- 用户列表 -->
                <div class="AR-user" ms-controller="usreList">
                    <div class="m-tab f-cb" style="height: 34px">
                        <ol>
                            <li class="curr">
                                <span>
                                    当前用户&nbsp;
                                </span>
                                <span ms-text="userNum">
                                    {{userList.length}}
                                </span>
                            </li>
                            <li ms-class="{{showType === 2 ? 'curr' : ''}}" ms-click="changeTag(2)">
                                <span>
                                    
                                </span>
                            </li>
                            <li class="last">
                            </li>
                        </ol>
                    </div>
                    <div class="bd uscroll" ms-mouseenter="userShowscroll($event)" ms-mouseleave="userShowscroll($event)">
                        <div class="scrollbar" ms-visible="showSC">
                            <div class="scrollbar-track">
                                <div class="scrollbar-thumb">
                                    <div class="scrollbar-thumb-end">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="jscroll-c viewport" style="height: 343px">
                            <ul class="u-list wholearea" id="ulist" style="overflow-y: scroll; height: 100%; overflow-x: hidden;">

                                <li v-for="u in userList">
                                    <img class="pho" :src="u.pic" alt="{{u.nickname}}">
                                    <p><span class="user-name" style="color: ">{{u.nickname}}</span><em></em></p>
                                    <p class="mis"><em class="ul ul{{parseInt(u.userlevel) + 1 > 9 ? parseInt(u.userlevel)+1 : '0'+(parseInt(u.userlevel)+1)}}" align="absmiddle"></em></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 主内容的左栏 -->
            <div id="roomCenter" class="g-mn">
                <div class="m-room">
                    <!-- 视频位置 -->
                    <div class="video-barrage" id="js-barrage">
                        <div id="bPlayer" v-el="player">
                        </div>
                    </div>
                    <div class="live-room" id="videoView">
                        <div class="upper-l">
                            <span class="Charm-nub" id="charmWrap">
                                <span class="n-bg">
                                    <i class="Charm-heart">
                                    </i>
                                    <span class="js-charmNum">
                                    </span>
                                </span>
                            </span>
                            <span id="charmAdd" class="Charm-add">
                            </span>
                        </div>
                        <div id="charmDetail" class="Charm-dlg f-dn">
                            <p>
                                魅力值总计：
                                <strong class="js-charmNum">
                                </strong>
                            </p>
                            <p class="js-info">
                            </p>
                            <p class="t-r xq">
                                <a href="rank.htm" tppabs="http://www.xiu8.com/rank" target="_blank">
                                    查看详情
                                </a>
                            </p>
                        </div>
                        <div id="commNews" class="comm-news f-cb">
                        </div>
                        <div id="guideLogin" href="#" class="atv-r5" style="display: none;">
                            <span class="link" id="gCloseBtn" style="display: none;">
                            </span>
                            <ul>
                                <li>
                                    <a class="lk-1 xiusta" stadata="{en:'login_show_room_GP_xiu',xst:'c',et:'mc',tm:'more',v:1}">
                                    </a>
                                </li>
                                <li>
                                    <a class="lk-2 xiusta" stadata="{en:'login_show_room_GP_BD',xst:'c',et:'mc',tm:'more',v:1}">
                                    </a>
                                </li>
                                <li>
                                    <a class="lk-3 xiusta" stadata="{en:'login_show_room_GP_QQ',xst:'c',et:'mc',tm:'more',v:1}">
                                    </a>
                                </li>
                                <li>
                                    <a class="lk-4 xiusta" stadata="{en:'login_show_room_TGP_BD',xst:'c',et:'mc',tm:'more',v:1}">
                                        <em class="login-icon ba-ic">
                                        </em>
                                        百度登录
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div id="v_Player">
                        </div>
                        <div class="upper-l" id="video-top">
                        </div>
                        <div class="btm-l" id="video-letfbot">
                        </div>
                        <div class="btm-r" id="video-bottom">
                        </div>
                        <!-- 在线主播 -->
                        <div class="live-extra" id="randomBroad" v-show="livestate.status == 0">
                            <div class="Anchor-rest t-c" style="padding-top:60px;">
                                <span class="txt">
                                    主播正在休息
                                </span>
                            </div>
                            <div class="cap f-cb f14">
                                <a class="trans js-trans"  target="_blank" href="/lobby">
                                    换一换
                                </a>
                                <a target="_blank" href="/lobby">
                                    更多精彩推荐
                                </a>
                            </div>
                            <div class="an-list">
                                <ul class="js-list">
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="roomStar" class="room-Star" style="display:none;">
                    <!--<ul>
                        <li class="none">
                            <span class="txt">
                                <em>
                                    亲密度&nbsp;
                                </em>
                                0
                            </span>
                            <div class="dlg-f-room" style="display: none">
                            </div>
                        </li>
                        <li class="none">
                            <span class="txt">
                                <em>
                                    亲密度&nbsp;
                                </em>
                                0
                            </span>
                            <div class="dlg-f-room" style="display: none">
                            </div>
                        </li>
                        <li class="none">
                            <span class="txt">
                                <em>
                                    亲密度&nbsp;
                                </em>
                                0
                            </span>
                            <div class="dlg-f-room" style="display: none">
                            </div>
                        </li>
                    </ul>
                     <div class="atv-enter atv-enter-pst" id="star-right">
                        <i class="u-hd js_laba_game xiusta" id="laba-btn" style="display:none;cursor: pointer;" stadata="{en:'game_laba',xst:'c',et:'mc',tm:'more',v:1}">
                        </i>
                    </div> 
                    <div id="ristIco" class="rist-ico">
                    </div>-->
                </div>
                <!-- 道具框 -->
                <div class="m-gift-box f-cb" ms-controller="gifts" id="baseGift" style="top: inherit;">
                    <div class="atv-fly-enter f-dn">
                        <div class="act-year-fly">
                            <strong>
                                未开启
                            </strong>
                        </div>
                        <div class="act-fly-div f-dn">
                            <h3>
                                加速飞碟主要规则介绍
                            </h3>
                            <p>
                                今天可加速次数：
                                <em id="fly-count">
                                    3次
                                </em>
                                <br/>
                                1.晋级赛至总决赛比赛期间，比赛主播每次晋
                                <br/>
                                升1名可触发加速飞碟1次
                                <br/>
                                2.加速飞碟每次触发持续时间为10分钟
                                <br/>
                            </p>
                            <p class="t-r">
                                <a href="http://bad_redirect" target="_blank">
                                    更多规则详情
                                </a>
                            </p>
                        </div>
                    </div>
                    <div class="m-tab f-cb">
                        <ul id="typelist">
                            <li v-for="gift in giftList" :class="{'curr' : gift.curr}" @click="giftTypeChange(gift.type)"> {{gift.name}} </li>
                        </ul>
                    </div>
                    <div class="bd f-cb g-scroll" id="gift_box">
                        <div class="scrollbar">
                            <div class="scrollbar-track">
                                <div class="scrollbar-thumb">
                                    <div class="scrollbar-thumb-end">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="jscroll-c viewport" id="gift_wrap" style="height:138px;">
                            <span class="icon arrow-l xiusta" stadata="{en:'gift_left_btn_room',xst:'c',et:'mc',tm:'more',v:1}" id="lg_btn" ms-click="arrowLeft()">
                            </span>
                            <span class="icon arrow-r xiusta" stadata="{en:'gift_right_btn_room',xst:'c',et:'mc',tm:'more',v:1}" id="rg_btn" ms-click="arrowRight">
                            </span>
                            <div class="gifts-wrap wholearea" style="position: absolute;">
                                <ul id="giftList">
                                    <!-- 千纸鹤特殊道具 -->
                                    <li v-for="g in gift" @click="currGift($event, g)" @mouseover="moverGiftEvent(g, $event)" @mouseleave="moverGiftEvent(null, $event)" title="{{g.giftname}}">
                                        <em class="giftIcon gift_{{g.id}}">
                                        </em>
                                        <!--<i class="number" id="origamiNum">
                                            
                                        </i>-->
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="ft">
                        <div class="t-user-list" style="display: none;" ms-visible="showSenderList">
                            <ul>
                                <li class="f-toe" ms-repeat="sendList" ms-click="setReceive($val)">
                                   
                                </li>
                            </ul>
                        </div>
                        <span class="num mr10">
                            数量
                            <input class="ml10 ipt-txt qucknum" type="text" maxlength="4"  v-model="giftNum" value="1" />
                            <a class="icon shape qucknum" href="javascript:void(0)" @click="targeQuick()">
                            </a>
                        </span>
                        <span class="to-pers">
                            给
                            <input size="23" class="ml10 ipt-txt senderInput" type="text" readonly="readonly" value="{{room.nickname}}"/>
                        </span>
                        <a class="u-btn-1 u-send ml10 xiusta" @click="sendGift">
                            发送礼物
                        </a>
                        <a id="btn-pay" href="#" target="_blank">
                            充值
                        </a>
                        <!-- 弹出选项 -->
                        <div class="t-num-list f-dn" style="display:{{showQuick?'block':'none'}}">
                            <ul>
				                <li v-for="q in quickList" @click="setQuick(q)">{{q}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- 礼物栏 -->
            </div>
            <!-- 中间-视频直播-礼物部分 -->
            <div class="g-r-area">
                <div class="g-marg">
                    <!-- 排行榜 -->
                    <div class="m-billboard">
                        <div class="m-tab f-cb">
                            <ul id="js-room-rank">
                                <li class="first js-li-rank">
                                    <div class="options">
                                        <span class="t-name">
                                            <i class="i-a">
                                            </i>
                                            排行
                                        </span>
                                    </div>
                                    <div id="js-rank-tab" class="dlg dlg-star-ba f-dn" ms-controller="roomRank">
                                        <div class="tab f-cb">
                                            <span class="curr">
                                                日
                                            </span>
                                            <span>
                                                周
                                            </span>
                                            <span>
                                                月
                                            </span>
                                        </div>
                                        <!-- 本日之星 -->
                                        <div class="bd" style="display: block">
                                            <div class="til f-cb">
                                                <span class="til-rank">
                                                    排名
                                                </span>
                                                <span class="til-star">
                                                    本日夺榜之星
                                                </span>
                                                <span class="til-count">
                                                    贡献值
                                                </span>
                                            </div>
                                            <ul class="u-list" ms-if="rank_day.length >0">
                                                <li ms-repeat-item="rank_day">
                                                    <em ms-class="{{$index < 3?  'rank-'+($index+1)  : 'rank-o' }}" ms-text="$index+1">
                                                    </em>
                                                    <span class="count" ms-text="item.xb">
                                                    </span>
                                                    <img class="pho" width="35" height="35" ms-src="/images/avatar.jpg" tppabs="http://image.cache.xiu8.com/avatar/50/50/{{item.uid}}.jpg{{(typeof item.uiut !== 'undefined' &amp;&amp; item.uiut) ? '?v='+item.uiut : '' }}" alt=""/>
                                                    <span class="user-name f-toe" ms-text="item.fuo.unn.hexToDec()">
                                                    </span>
                                                    <p class="mis">
                                                        <em class="ul" ms-class="{{item.fuo.ulv >= 10 ? 'ul'+item.fuo.ulv : 'ul0'+item.fuo.ulv}}" align="absmiddle">
                                                        </em>
                                                        <em class="ulvip vip" align="absmiddle" ms-if="item.fuo.uvl >0">
                                                        </em>
                                                    </p>
                                                </li>
                                            </ul>
                                            <div class="jscroll-c no-fans" ms-if="rank_day.length == 0">
                                            </div>
                                        </div>
                                        <!-- 本周之星 -->
                                        <div class="bd bd-2">
                                            <div class="til f-cb">
                                                <span class="til-rank">
                                                    排名
                                                </span>
                                                <span class="til-star">
                                                    本周夺榜之星
                                                </span>
                                                <span class="til-count">
                                                    贡献值
                                                </span>
                                            </div>
                                            <ul class="u-list" ms-if="rank_week.length >0">
                                                <li ms-repeat-item="rank_week">
                                                    <em ms-class="{{$index < 3?  'rank-'+($index+1)  : 'rank-o' }}" ms-text="$index+1">
                                                    </em>
                                                    <span class="count" ms-text="item.amount">
                                                    </span>
                                                    <img class="pho" width="35" height="35" ms-src="/images/avatar.jpg" tppabs="http://image.cache.xiu8.com/avatar/50/50/{{item.user_id}}.jpg{{(typeof item.imgVersion !=='undefined' &amp;&amp; item.imgVersion)  ? '?v='+item.imgVersion : ''}}" alt=""/>
                                                    <span class="user-name f-toe" ms-text="item.nickname.hexToDec()">
                                                    </span>
                                                    <p class="mis">
                                                        <em class="ul" ms-class="{{item.fl >= 10 ? 'ul'+item.fl : 'ul0'+item.fl}}" align="absmiddle">
                                                        </em>
                                                        <em class="ulvip vip" align="absmiddle" ms-if="item.isvip >0">
                                                        </em>
                                                    </p>
                                                </li>
                                            </ul>
                                            <div class="jscroll-c no-fans" ms-if="rank_week.length == 0">
                                            </div>
                                        </div>
                                        <!-- 本月之星 -->
                                        <div class="bd bd-3">
                                            <div class="til f-cb">
                                                <span class="til-rank">
                                                    排名
                                                </span>
                                                <span class="til-star">
                                                    本月夺榜之星
                                                </span>
                                                <span class="til-count">
                                                    贡献值
                                                </span>
                                            </div>
                                            <ul class="u-list" ms-if="rank_month.length >0">
                                                <li ms-repeat-item="rank_month">
                                                    <em ms-class="{{$index < 3?  'rank-'+($index+1)  : 'rank-o' }}" ms-text="$index+1">
                                                    </em>
                                                    <span class="count" ms-text="item.amount">
                                                    </span>
                                                    <img class="pho" width="35" height="35" ms-src="/images/avatar.jpg" tppabs="http://image.cache.xiu8.com/avatar/50/50/{{item.user_id}}.jpg{{(typeof item.imgVersion !=='undefined' &amp;&amp; item.imgVersion)  ? '?v='+item.imgVersion : ''}}" alt=""/>
                                                    <span class="user-name f-toe" ms-text="item.nickname.hexToDec()">
                                                    </span>
                                                    <p class="mis">
                                                        <em class="ul" ms-class="{{item.fl >= 10 ? 'ul'+item.fl : 'ul0'+item.fl}}" align="absmiddle">
                                                        </em>
                                                        <em class="ulvip vip" align="absmiddle" ms-if="item.isvip >0">
                                                        </em>
                                                    </p>
                                                </li>
                                            </ul>
                                            <div class="jscroll-c no-fans" ms-if="rank_month.length == 0">
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="js-li-rank" id="js-game-list" data-type="game">
                                    <div class="options">
                                        <span class="t-name">
                                            <i class="i-b">
                                            </i>
                                            水果忍者
                                            <i id="g-new">
                                            </i>
                                        </span>
                                    </div>
                                    <div class="dlg dlg-star-ba pub-game">
                                        <div class="scrollbar" id="gameScroll-bar">
                                            <div class="scrollbar-track">
                                                <div class="scrollbar-thumb">
                                                    <div class="scrollbar-thumb-end">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="jscroll-c viewport" id="game-content">
                                            <ol class="f-cb list pub-game wholearea" id="game-list">
                                            </ol>
                                        </div>
                                    </div>
                                </li>
                                <li class="js-li-rank" data-type="active">
                                    <div class="options">
                                        <span class="t-name">
                                            <i class="i-c">
                                            </i>
                                            活动
                                        </span>
                                        <sup id="actNum" style="display: none;">
                                        </sup>
                                    </div>
                                    <div class="dlg dlg-star-ba pub-activity">
                                        <div class="scrollbar" id="actScroll-bar">
                                            <div class="scrollbar-track">
                                                <div class="scrollbar-thumb">
                                                    <div class="scrollbar-thumb-end">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="jscroll-c viewport" id="act-content">
                                            <ol class="f-cb list pub-game wholearea" id="act-list">
                                            </ol>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- 文字滚动条 -->
                    <div class="m-top-line" id="js-top-line">
                        <div class="dlg-msg" style="display: none">
                            <p>
                                每条头条拥有
                                <span>
                                    3分钟
                                </span>
                                保护期;
                            </p>
                            <p>
                                保护期间，
                                <span>
                                    消费高于
                                </span>
                                当前头条,即刻取替其展示;
                            </p>
                            <p>
                                保护结束，消费满足
                                <span>
                                    50,000秀币
                                </span>
                                即可抢得头条。
                            </p>
                        </div>
                        <p class="js-top-animation">
                            <span class="date f-r" style="margin-top: 12px">
                                <span class="js-runtime" v-if="!!top">
                                    {{moment(top.time).add(3, "minutes").diff(moment())}}
                                </span>
                                <i class="icon icon-q">
                                </i>
                            </span>
                            <i class="icon u-topl">
                            </i>
                            <span class="js-hl-top fonts" style="line-height: 35px;" v-if="!!top">
                                <a href="/{{top.room.room_id}}" target="_blank" style="color:#e9d70e;" title="送了{{top.total}}个{{top.gift.giftname}},价值{{top.coin}}秀币">{{top.user.nickname}}  给  {{top.room.nickname}} 送了{{top.total}}个</a><em class="giftIcon-s gift-s-{{top.gift.id}}"></em>
                            </span>
                        </p>
                        <ul class="js-hl-list" style="height: auto;width: 100%" v-if="!!top23 && top23.length > 0">
                            <li v-for="t in top23">
                                <a target="_blank" href="/{{t.room.room_id}}" style="color:#FFFFFF;">{{moment(t.time).format("hh:mm")}}&nbsp;{{t.user.nickname}} 给 {{t.room.nickname}} 送了 {{t.total}} 个 {{t.gift.giftname}}&nbsp;&nbsp;<em class="giftIcon-s gift-s-{{t.gift.id}}"></em></a>
                            </li>
                        </ul>
                    </div>
                    <!-- 聊天功能区(包含座当场礼物及活动) -->
                    <!-- 聊天功能区 -->
                    <div class="m-pub-box" id="USER_CHART" ms-controller="userChart">
                        <div id="CHART_BOX" ms-visible="showPubChartList" ms-css-height="{{setHeight}}px" class="pub-list public-chat-box curr">
                            <div id="luckyBag" class="new-pack" style="display: none">
                                <span class="close">
                                </span>
                                <span class="nub">
                                </span>
                            </div>
                            <div id="luckyDlg" class="new-pack-dlg" style="display: none">
                                <p>
                                    用户通过水果忍者游戏下注每达到标准
                                    游戏币，即可获得1个神秘礼物，主播
                                    可通过1个神秘礼物开启一次神秘福袋
                                    开启福袋获得随机奖项.
                                </p>
                                <div class="t-r">
                                    <a href="langyalist.htm" tppabs="http://www.xiu8.com/act/langyalist" target="_blank">
                                        查看详情
                                    </a>
                                </div>
                            </div>
                            <div id="WORLD_NOTICE" class="the-tran-side" style="cursor:pointer;display:none;overflow:hidden;">
                                <p class="wri-words">
                                    <a>
                                        <span class="yan">
                                        </span>
                                        <i class="wenzi">
                                        </i>
                                        <span class="time">
                                        </span>
                                    </a>
                                </p>
                            </div>
                            <div id="PUB_CHART" class="public-chat" ms-css-height="{{setHeight-104}}px" style="height: 350px;overflow: hidden;" ms-mouseenter="clearOrScroll('pub',true,this)" ms-mouseleave="clearOrScroll('pub',false,this)">
                                <div class="scrollbar" ms-visible="showPubSC">
                                    <div class="scrollbar-track">
                                        <div class="scrollbar-thumb">
                                            <div class="scrollbar-thumb-end">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="PUB_SCROLL" class="jscroll-c viewport" style="height: 350px;overflow: auto;padding-bottom:0;">
                                    <ul class="wholearea" style="display: none; position: absolute;" v-el:chartpane>
                                        <!-- <li class="grey">欢迎&nbsp;&nbsp;<span></span>&nbsp;<span class="user-name" style="" ftid="9996137666809">游客666809</span>&nbsp;进入房间</li>
                                        <li><span>01:21</span><span class="namegroup">&nbsp;<span><em class="ul ul03" align="absmiddle"></em><em class="ulvip grf_3"></em></span><span class="user-name" style="" ftid="196016592">梦想哆哆家的大少爷</span>&nbsp;</span>说：点歌要点火山的，点歌伤不起</li>
                                        <li><span>21:59</span><span class="namegroup">&nbsp;<span></span><span class="user-name" style="" ftid="199576977">观心盘，浮屠船</span>&nbsp;</span>送&nbsp;<span class="gf-num">1个</span>&nbsp;神秘钥匙&nbsp;<em class="giftIcon gift_300"></em></li> -->
                                        <template v-for="chart in chartWarp">
                                            <template v-if="chart.type=='join'">
                                                <!--<li class="grey">欢迎&nbsp;&nbsp;<span></span>&nbsp;<span class="user-name" style="" ftid="9996137666809">{{chart.nickname}}</span>&nbsp;进入房间</li>-->
                                                <li>
                                                    <span class="namegroup">欢迎&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <span>
                                                            <em class="ul ul{{parseInt(chart.userlevel) + 1 >9?parseInt(chart.userlevel) + 1:'0'+ (parseInt(chart.userlevel) + 1)}}" align="absmiddle"></em>
                                                            <!--<em class="ulvip grf_3"></em>-->
                                                        </span>
                                                        <span class="user-name" style="" ftid="196016592">{{chart.nickname}}</span>&nbsp;
                                                    </span>&nbsp;进入房间</li>
                                                </li>
                                            </template>
                                            <template v-if="chart.type == 'msg'">
                                                <li>
                                                    <span>{{chart.time}}</span>
                                                    <span class="namegroup">&nbsp;
                                                        <span>
                                                            <em class="ul ul{{parseInt(chart.userlevel) + 1 >9?parseInt(chart.userlevel)+1:'0'+(parseInt(chart.userlevel)+1)}}" align="absmiddle"></em>
                                                            <!--<em class="ulvip grf_3"></em>-->
                                                        </span>
                                                        <span class="user-name" style="" ftid="196016592">{{chart.nickname}}</span>&nbsp;
                                                    </span>说：{{chart.message}}</li>
                                            </template>
                                            <template v-if="chart.type == 'gift' ">
                                                <li>
                                                    <span>{{chart.time}}</span>
                                                    <span class="namegroup">&nbsp;
                                                        <span></span>
                                                        <span class="user-name" style="" ftid="199576977">{{chart.nickname}}</span>&nbsp;
                                                    </span>送&nbsp;<span class="gf-num">{{chart.total}}个</span>&nbsp;{{chart.gift.giftname}}&nbsp;
                                                    <em class="giftIcon gift_{{chart.gift.id}}"></em>
                                                </li>
                                            </template>
                                        </template>
                                    </ul>
                                </div>
                                <!-- 聊天操作框 -->
                                <div id="PUB_CLEAN_SCROLL" class="pub-ed-msg" ms-visible="showPubClearOrScroll" style="z-index=1000;display:none;pisition:fix;">
                                    <a ms-visible="isOpenEffect" ms-click="closeEffect(true)">
                                        <i class="icon open-eff">
                                        </i>
                                        特效开
                                    </a>
                                    <a ms-visible="!isOpenEffect" ms-click="closeEffect(false)">
                                        <i class="icon close-eff">
                                        </i>
                                        特效关
                                    </a>
                                    <a ms-click="cleanScreen(this,'pub')">
                                        <i class="icon u-CLS">
                                        </i>
                                        清屏
                                    </a>
                                    <a ms-visible="isPubCanScroll" ms-click="stopScroll(this,'pub')">
                                        <i class="icon u-roll">
                                        </i>
                                        滚屏
                                    </a>
                                    <a ms-visible="!isPubCanScroll" ms-click="stopScroll(this,'pub')">
                                        <i class="icon u-lock">
                                        </i>
                                        锁屏
                                    </a>
                                </div>
                                <a href="javascript:void(0)" id="yPack" class="f-dn">
                                </a>
                            </div>
                            <div id="DIV_LINE" class="rolling">
                                <i class="icon u-resize">
                                </i>
                            </div>
                            <div id="PRV_CHART_BOX" ms-mouseenter="clearOrScroll('prv',true,this)" ms-mouseleave="clearOrScroll('prv',false,this)" class="chat_room" style="height: 96px;">
                                <div class="scrollbar" ms-visible="showPrvSC">
                                    <div class="scrollbar-track">
                                        <div class="scrollbar-thumb">
                                            <div class="scrollbar-thumb-end">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="PRV_CHART" class="chat_room_box viewport" style="height: 72px;overflow: hidden;">
                                    <ul class="wholearea" style="display:none;position: absolute;" ms-visible="showPrvChart" attr="private">
                                        <li><span class="user-name">哆哆大美妞&nbsp;</span>对&nbsp;<span class="user-name">您&nbsp;</span>说：新人求关注</li>
                                    </ul>
                                </div>
                                <!-- 聊天操作框 -->
                                <div id="PRV_CLEAN_SCROLL" class="pub-ed-msg" ms-visible="showPrvClearOrScroll" style="display:none;">
                                    <a ms-click="cleanScreen(this,'prv')">
                                        <i class="icon u-CLS">
                                        </i>
                                        清屏
                                    </a>
                                    <a ms-visible="isPrvCanScroll" ms-click="stopScroll(this,'prv')">
                                        <i class="icon u-roll">
                                        </i>
                                        滚屏
                                    </a>
                                    <a ms-visible="!isPrvCanScroll" ms-click="stopScroll(this,'prv')">
                                        <i class="icon u-lock">
                                        </i>
                                        锁屏
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!-- 聊天区 -->
                        <div>
                            <div class="to-said" style="display:none;" id="CHART_OPERATION" ms-visible="showChatOperation">
                                <div class="t-user-list" id="TALK_TO_USER" ms-visible="showTalkToUserList">
                                    <ul>
                                        <li class="f-toe" ms-repeat-item="talkToUserList" ms-click="talkToClick(this)" ms-attr-attr="item.uid" ms-text="item.uname">
                                        </li>
                                    </ul>
                                </div>
                                <span class="num">
                                    <em ms-visible="showTalkToUnit">
                                        <input id="TALK_TO" readonly="readonly" class="all" ms-click="talkToInputClick(false)" autocomplete="off" type="text" attr="0" value="所有人" size="24"/>
                                        <a id="TALK_TO_ARROW" title="点击" class="icon shape" ms-click="talkToInputClick(true)" href="javascript:void(0);">
                                        </a>
                                    </em>
                                </span>
                                <span ms-visible="showTalkToUnit" class="checkbox" style="cursor: pointer;">
                                    <input id="QUITELY_CHECKBOX" type="checkbox" autocomplete="off"/>
                                    <span ms-click="clickQuitely(event)">
                                        悄悄说
                                    </span>
                                </span>
                            </div>
                            <!-- 表情框 -->
                            <div id="dFace" class="face-list msg_face" style="display: none; bottom: 40px;">
                                <div id="msg-face" class="tab">
                                    <div id="dFtype" class="tab-t" style="z-index: 1;">
                                    </div>
                                    <div class="tab-c" style="overflow: hidden;">
                                        <div class="normalFaceList list" style="overflow: hidden; display: block;">
                                            <div id="NOR_FACE_SCROLL" class="scrollbar">
                                                <div class="scrollbar-track">
                                                    <div class="scrollbar-thumb">
                                                        <div class="scrollbar-thumb-end">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="viewport" style="height: 92px; position: absolute;">
                                                <ul class="face_list wholearea" style="position: absolute;" id="face_list">
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- 切换区-礼物模块 -->
                            <div class="watch-chat-box" id="TALK_DIV" style="z-index:4;">
                                <div ms-click="talkDivClick(this)" style="left:0px;" id="TALK_TO_LIST" ms-visible="showTalkDiv" class="t-speak-list">
                                    <ul>
                                        <li ms-mousedown="talkType('world')">
                                            世界说
                                        </li>
                                        <li ms-mousedown="talkType('barrage')">
                                            弹幕
                                        </li>
                                        <li ms-mousedown="talkType('pub')">
                                            聊天
                                        </li>
                                        <a id="msgtemp">
                                        </a>
                                    </ul>
                                </div>
                                <div class="inputk">
                                    <div class="to-pers">
                                        <a ms-click="faceButtonClick" id="FACE_ICON" title="表情" class="icon u-face" href="javascript:void(0)">
                                        </a>
                                        <a href="javascript:;" id="TALK_TO_BUTTON" class="icon u-speak" ms-click="talkToButtonClick" ms-html="talkToButtonText">
                                            世界说
                                            <i class="icon u-opt">
                                            </i>
                                        </a>
                                        <input class="ipt-txt xiusta" v-model="message" id="CHART_MESSAGE"  @keyup.enter="chartSendMessage" type="text" placeholder="点击这里可以调戏主播！" />
                                    </div>
                                </div>
                                <button id="SEND_MSG_BUTTON" @click="chartSendMessage" class="u-btn-1 u-send xiusta">
                                    发送
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 左侧内容部分 -->
        </div>
    </div>
    <!-- 主播、超管权限 -->
    <!-- 主播、超管管理菜单 -->
    <!-- 主播管理 -->
    <div style="top: 100px;left: 20%;margin-left:0px;display: none;" class="dlg-w dlg-admin" id="domBroadPanel" ms-controller="roomManager" ms-visible="showBroadM" ms-if="isBroad">
        <div class="dlg-hd f-cb">
            <a class="d-close" ms-click="targeMPannel()">
            </a>
            <span class="hd-name">
                主播管理
            </span>
        </div>
        <div class="dlg-bd">
            <div class="dlg-admin-box">
                <ul class="m-tab f-cb">
                    <li ms-repeat="Tab" ms-class="{{showTab == $index ? 'curr':''}}" ms-click="changTab($index)">
                        {{el}}
                    </li>
                    <li>
                        <a target="_blank" href="help.htm" tppabs="http://www.xiu8.com/help" style="color:#FFF;">
                            直播帮助
                        </a>
                    </li>
                </ul>
                <!-- 公告设置面板 -->
                <div class="d-tab-con the-an-set" ms-if="showTab == 0">
                    <div class="d-txt">
                        <b>
                            房间公告
                        </b>
                        &nbsp;&nbsp;&nbsp;
                        <span>
                            最多不超过20个字
                        </span>
                    </div>
                    <ul class="f-cbli">
                        <li>
                            <span class="s-name">
                                <input type="text" class="edit-ipt" ms-value="" ms-duplex="noticePb" placeholder="请输入文字 不超过20个字" maxlength="20"/>
                            </span>
                        </li>
                        <li>
                            <span class="s-name">
                                <input type="text" class="edit-ipt" ms-value="" ms-duplex="noticePU" placeholder="公告文字链接" maxlength="40"/>
                            </span>
                        </li>
                    </ul>
                    <div class="d-txt">
                        <b>
                            私聊文字
                        </b>
                        &nbsp;&nbsp;&nbsp;
                        <span>
                            最多不超过20个字
                        </span>
                    </div>
                    <ul class="">
                        <li>
                            <span class="s-name">
                                <input type="text" class="edit-ipt" ms-value="" ms-duplex="noticePrv" placeholder="欢迎来到我的房间"/>
                            </span>
                        </li>
                    </ul>
                    <div class="ft choice">
                        <span class="u-btn-1 u-point" ms-click="updateNotice()">
                            提交
                        </span>
                    </div>
                </div>
                <!-- 装扮空间 -->
                <div class="d-tab-con dr-space" ms-if="showTab == 100">
                    <div class="d-txt">
                        <b>
                            设置头像照片
                        </b>
                        &nbsp;&nbsp;&nbsp;
                        <span>
                            图片格式为jpg,不大于1M
                        </span>
                    </div>
                    <div class="photo-upload">
                        <button class="photo-upload-btn">
                            选择您的照片
                        </button>
                    </div>
                    <div class="ft choice">
                        <span class="u-btn-1 u-point">
                            提交
                        </span>
                    </div>
                </div>
                <!-- 聊天设置 -->
                <div class="d-tab-con chat-settings" ms-if="showTab == 1">
                    <div class="d-txt">
                        <b>
                            游客进出提示
                        </b>
                    </div>
                    <div class="radio">
                        <span class="radio-op">
                            <input name="r_visitor" type="radio" value="1" checked="checked"/>
                            <b>
                                开启
                            </b>
                        </span>
                        <span class="radio-cl">
                            <input name="r_visitor" type="radio" value="0"/>
                            <b>
                                关闭
                            </b>
                        </span>
                    </div>
                    <div class="d-txt">
                        <b>
                            公聊设置
                        </b>
                    </div>
                    <div class="radio">
                        <select name="r_public_lv">
                            <option ms-repeat="pubcList" ms-value="$index">
                                {{el}}
                            </option>
                        </select>
                    </div>
                    <div class="d-txt">
                        <b>
                            私聊设置
                        </b>
                        &nbsp;&nbsp;&nbsp;
                        <span>
                            以下爵位私聊信息不接收。
                        </span>
                    </div>
                    <div class="the-title">
                        <select name="s_public_lv">
                            <option ms-repeat="sayLvList" ms-value="$index">
                                {{el}}
                            </option>
                        </select>
                    </div>
                    <div class="ft choice">
                        <span class="u-btn-1 u-point" ms-click="updateRoomPrint()">
                            提交
                        </span>
                    </div>
                </div>
                <!-- 礼物特效 -->
                <div class="d-tab-con gift-special" ms-if="showTab == 200">
                    <div class="d-txt">
                        <b>
                            选择为不提示
                        </b>
                    </div>
                    <div class="rodio-top">
                        <div class="radio ">
                            <input class="check" type="checkbox" value="" ms-click="gifts_on_of(1)"/>
                            <label>
                                超级礼物特效
                            </label>
                        </div>
                        <div class="radio">
                            <input class="check" type="checkbox" value="" ms-click="gifts_on_of(2)"/>
                            <label>
                                礼物组合特效
                            </label>
                        </div>
                        <div class="radio">
                            <input class="check" type="checkbox" value="" ms-click="gifts_on_of(3)"/>
                            <label>
                                普通礼物特效
                            </label>
                        </div>
                    </div>
                    <div class="ft choice">
                        <span class="u-btn-1 u-point" ms-click="gifts_on_of(0)">
                            提交
                        </span>
                    </div>
                </div>
                <!-- 直播状态 -->
                <div class="d-tab-con live" ms-if="showTab == 2">
                    <div class="d-txt">
                        <b>
                            选择状态
                        </b>
                    </div>
                    <div class="radio">
                        <input name="video_status" type="radio" value="1" checked="checked"/>
                        <b>
                            直播
                        </b>
                        <span class="radio-cl">
                            <input name="video_status" type="radio" value="2"/>
                            <b>
                                录像
                            </b>
                        </span>
                    </div>
                    <div class="ft choice">
                        <span class="u-btn-1 u-point" ms-click="setVideoStatus()">
                            提交
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 超管管理 -->
    <div class="dlg-w dlg-admin" style="top:100px;left:30%;margin-left:0px;display:none;" id="domSysPanel" ms-controller="sysManager" ms-visible="showSysPanel" ms-if="isAdmin">
        <div class="dlg-hd f-cb">
            <a class="d-close" ms-click="targeSysPanel()">
            </a>
            <span class="hd-name">
                超级管理
            </span>
        </div>
        <div class="dlg-bd">
            <div class="dlg-admin-box">
                <ul class="m-tab f-cb">
                    <li ms-repeat="sysTab" ms-class="{{showsysIndex == $index ? 'curr':''}}" ms-click="changsysTab($index)">
                        {{el}}
                    </li>
                </ul>
                <div class="d-tab-con d-room-set" ms-if="showsysIndex == 0">
                    <p>
                        <strong>
                            直播状态
                        </strong>
                    </p>
                    <p class="radio">
                        <span class="radio-op">
                            <input name="video_status_sys" type="radio" value="1" checked="checked"/>
                            <b>
                                直播
                            </b>
                        </span>
                        <span class="radio-cl">
                            <input name="video_status_sys" type="radio" value="2"/>
                            <b>
                                录像
                            </b>
                        </span>
                    </p>
                    <p class="ft choice">
                        <button class="u-btn-1 u-point" ms-click="setVideoStatus_sys()">
                            提交
                        </button>
                    </p>
                </div>
                <div class="d-tab-con d-room-set" ms-if="showsysIndex == 1">
                    <p>
                        <strong>
                            警告内容
                        </strong>
                        <span class="gray9">
                            （最多不超过200字）
                        </span>
                    </p>
                    <p>
                        <textarea style="height:60px" class="ipt textare" id="txtWarning" ms-duplex="warningTxt">
                        </textarea>
                    </p>
                    <p class="ft choice">
                        <button class="u-btn-1 u-point" ms-click="setWarning()">
                            提交
                        </button>
                    </p>
                </div>
                <div class="d-tab-con d-room-set" ms-if="showsysIndex == 2">
                    <p>
                        <strong>
                            选择状态
                        </strong>
                    </p>
                    <p class="radio">
                        <span class="radio-op">
                            <input name="invisible" type="radio" value="0" checked="checked"/>
                            <b>
                                显身
                            </b>
                        </span>
                        <span class="radio-cl">
                            <input name="invisible" type="radio" value="1"/>
                            <b>
                                隐身
                            </b>
                        </span>
                    </p>
                    <p class="ft choice">
                        <button class="u-btn-1 u-point" ms-click="setInvisible()">
                            提交
                        </button>
                    </p>
                </div>
                <div class="d-tab-con d-room-set" ms-if="showsysIndex == 3">
                    <p>
                        <input type="text" class="ipt ipt-txt" size="6" maxlength="3" id="txtLockTime" ms-duplex="lockTime"/>
                        <span class="ml10">
                            分钟
                        </span>
                    </p>
                    <p class="d-txt">
                        <b>
                            备注
                        </b>
                        &nbsp;&nbsp;&nbsp;
                        <span>
                            （最多不超过200字）
                        </span>
                    </p>
                    <p class="photo-upload">
                        <textarea style="height:60px" class="ipt textare" id="txtLockMsg" ms-duplex="lockMsg">
                        </textarea>
                    </p>
                    <p class="ft choice">
                        <button class="u-btn-1 u-point" ms-click="stopLive()">
                            提交
                        </button>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!-- 家族族长和副族长管理 -->
    <div class="dlg-w dlg-admin" style="top:100px;left:30%;margin-left:0px;display:none;" id="domFm" ms-controller="familyManager" ms-visible="isShowFM" ms-if="isFadmin">
        <div class="dlg-hd f-cb">
            <a class="d-close" ms-click="targeFPanel()">
            </a>
            <span class="hd-name">
                隐身设置
            </span>
        </div>
        <div class="dlg-bd">
            <div class="dlg-admin-box">
                <ul class="m-tab f-cb">
                    <li class="curr">
                        隐身设置
                    </li>
                </ul>
                <div class="d-tab-con d-room-set">
                    <p>
                        <strong>
                            选择状态
                        </strong>
                    </p>
                    <p class="radio">
                        <span class="radio-op">
                            <input name="Finvisible" type="radio" value="0" checked="checked"/>
                            <b>
                                显身
                            </b>
                        </span>
                        <span class="radio-cl">
                            <input name="Finvisible" type="radio" value="1"/>
                            <b>
                                隐身
                            </b>
                        </span>
                    </p>
                    <p class="ft choice">
                        <button class="u-btn-1 u-point" ms-click="setFInvisible()">
                            提交
                        </button>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!-- 用户权限菜单 -->
    <div class="dlg-w dlg-u-card" style="top: 0px; left: 0px; display: none; position: absolute;z-index=13;" id="divTips" ms-controller="userTips" ms-css-top="{{tips_top}}px" ms-css-left="{{tips_left}}px" ms-css-display="{{tips_visible === true ? 'block':'none'}}" ms-mouseenter="mouseHanlder($event)" ms-mouseleave="mouseHanlder($event)">
        <div class="card-infor">
            <dl class="f-cb user-infor">
                <dt class="photo">
                    <img ms-src="'+userId+'.jpg'}}{{uiutId}}" tppabs="http://www.xiu8.com/{{'http://image.cache.xiu8.com/avatar/110/110/'+userId+'.jpg'}}{{uiutId}}" alt=""/>
                </dt>
                <dd>
                    <p class="name">
                        {{ nickName }}
                    </p>
                    <p class="num" ms-if="isleave == true" ms-visible="isleave == true" ms-title="{{ userId }}">
                        ({{ coolNumber }})
                    </p>
                    <div class="mis" ms-if="isleave == true" ms-visible="isleave == true">
                        {{ getICON(userId) | html }}
                    </div>
                </dd>
            </dl>
            <div class="u-action">
                <p class="user-icon" id="tip-medal">
                </p>
                <ul class="clearfix f-cb">
                    <li ms-repeat-item="power" ms-click="powerCmdPublish(item.cmd,userId,nickName)">
                        <a>
                            <em class="icon" ms-class="{{item.ico}}">
                            </em>
                            {{item.name}}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- 浮动层 -->
    <!-- 守护特权 -->
    <div id="guardPrivi" class="dlg-w dlg-to-watch-privi f-dn">
        <div class="dlg-hd f-cb">
            <span class="hd-name">
                加入守护团拥有特权
            </span>
        </div>
        <div class="dlg-bd">
            <div class="guardian-privi">
                <div class="d-con">
                    <ul class="u-list f-cb">
                        <li>
                            <i class="d-car">
                                <img width="70" src="http://www.xiu8.com/assets/images/room/u-b-1.png" tppabs="http://www.xiu8.com/assets/images/room/u-b-1.png" alt=""/>
                            </i>
                            <span class="f-toe">
                                专属豪车
                            </span>
                        </li>
                        <li>
                            <i class="d-place">
                                <img width="70" src="http://www.xiu8.com/assets/images/room/u-b-2.png" tppabs="http://www.xiu8.com/assets/images/room/u-b-2.png" alt=""/>
                            </i>
                            <span class="f-toe">
                                专属座位
                            </span>
                        </li>
                        <li>
                            <i class="d-sole">
                                <img width="70" src="http://www.xiu8.com/assets/images/room/u-b-3.png" tppabs="http://www.xiu8.com/assets/images/room/u-b-3.png" alt=""/>
                            </i>
                            <span class="f-toe">
                                专属徽章
                            </span>
                        </li>
                        <li>
                            <i class="d-manage">
                                <img width="70" src="http://www.xiu8.com/assets/images/room/u-b-4.png" tppabs="http://www.xiu8.com/assets/images/room/u-b-4.png" alt=""/>
                            </i>
                            <span class="f-toe">
                                房间管理
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- 守护浮动面板 -->
    <div id="guardAll" class="dlg-w dlg-to-watch f-dn">
        <div class="dlg-hd f-cb">
            <a class="u-watch" id="addGuardLink" style="margin-right: 20px;" target="_blank" href="#">
                +守护TA
            </a>
            <a class="d-close">
            </a>
            <span class="hd-name">
                守护团 开通
                <span class="sp_graud_no">
                </span>
                人
            </span>
        </div>
        <div class="dlg-bd gruadSC">
            <div class="scrollbar">
                <div class="scrollbar-track">
                    <div class="scrollbar-thumb">
                        <div class="scrollbar-thumb-end">
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-con jscroll-c viewport" style="max-height: 348px;overflow: hidden;">
                <ul class="u-list f-cb wholearea js-graud-list" style="position: relative;">
                </ul>
            </div>
        </div>
    </div>
    <!-- 贴条 -->
    <div id="domStickers" style="top:258px;left:25%;margin-left:120px;display: none;" class="dlg-w dlg-stickers" ms-controller="stickers" ms-visible="isShow">
        <div class="dlg-hd f-cb">
            <a class="d-close" ms-click="hideStickers()">
            </a>
            <span class="hd-name">
                贴条
            </span>
        </div>
        <div class="dlg-bd">
            <ul class="m-tab f-cb">
                <li ms-repeat="stickerType" ms-class="{{ stickerType[$index].id == currShow ? 'curr':'' }}" ms-click="changeType(stickerType[$index].id)">
                    {{stickerType[$index].name }}
                </li>
            </ul>
            <div class="d-tab-con f-cb">
                <ul class="vy_list" id="notes_list_ul">
                    <li ms-repeat="showList" ms-class="{{  $val.id  === currGiftId  ? 'cur' : '' }}" ms-click="selectStickers($val.id)">
                        <em ms-class="{{className+ $val.id }}" ms-title="{{$val.gold +'秀币，持续5分钟'}}">
                        </em>
                    </li>
                </ul>
            </div>
        </div>
        <div class="dlg-ft t-c">
            <button class="u-btn-1" ms-click="sendStickers()">
                确定
            </button>
        </div>
    </div>
    <!-- 弹出层 -->
    <div class="dlg dlg-txt f-dn" style="top: 420px; margin-left: -480px; left: 50%;">
        剩余守护天数：
        <strong>
            320
        </strong>
        天
    </div>
    <!-- 道具鼠标提示框 -->
    <div class="dlg dlg-gift" id="domgt" style="min-width:300px;" v-show="moverGift != null">
        <dl class="d-imgtxt">
            <dt>
                <em class="giftImg-b gift-b-{{moverGift&&moverGift.id}}">
                </em>
            </dt>
            <dd class="d-txt">
                <p>
                    {{ moverGift && moverGift.giftname}}
                    <template v-if="moverGift.gifttype == 0">
                        <strong class="pl10" >
                            还有10秒可获得一个千纸鹤
                        </strong>
                    </template>
                    <template v-else>
                        <strong class="pl10" >
                            {{moverGift && moverGift.coin}}秀币
                        </strong>
                    </template>
                    
                    <br/>
                    <!--<span ms-if="currGiftObj.luck == 1" class="c_62">
                        最高可中1000倍大奖。
                    </span>-->
                </p>
                <template v-if="moverGift.gifttype == 0">
                    <p class="pt10">
                        普通用户3分钟可获得一个,送出可为
                        <br/>
                        主播增加魅力值
                    </p>
                </template>
                <template v-else>
                    <p class="pt10">
                        一次赠送
                        <em>
                            0
                        </em>
                        个触发
                        <em>
                            0
                        </em>
                        级流光效果
                    </p>
                    <!--<p ms-if="currGiftObj.send ==0" class="pt10">
                        不能直接使用，系统自动扣除
                    </p>-->
                </template>
                
            </dd>
        </dl>
    </div>
    <!-- 千纸鹤鼠标提示框 -->
    <div class="dlg dlg-gift" id="origami" style="top:500px; min-width:300px; display: none;">
        <dl class="d-imgtxt">
            <dt>
                <img width="70" height="70" src="http://image.cache.xiu8.com/goods/317_b.png" tppabs="http://image.cache.xiu8.com/goods/317_b.png" alt="千纸鹤"/>
            </dt>
            <dd class="d-txt">
                <p>
                    千纸鹤
                    <strong class="js-type pl10">
                    </strong>
                </p>
                <p class="pt10">
                    普通用户3分钟可获得一个,送出可为
                    <br/>
                    主播增加魅力值
                    <a href="origami.htm" tppabs="http://www.xiu8.com/help/origami" target="_blank" style="color:#127adf ">
                        查看详情
                    </a>
                </p>
            </dd>
        </dl>
    </div>
    <!-- 关注成功 -->
    <div style="display:none;top: 50%;left:50%;margin: -110px 0 0 -190px;" id="tipsM" class="dlg-w dlg-prompt dlg-attention" ms-controller="broadInfo" ms-visible="showOKTips">
        <div class="dlg-hd f-cb">
            <a class="d-close" ms-click="closeTipsM">
                &nbsp;
            </a>
        </div>
        <div class="dlg-bd">
            <h3 class="h-title c_e02">
                关注成功！
            </h3>
            <p>
                安装手机端可收到主播开播通知更有豪礼相送！
                <br/>
                添加到主播到桌面，精彩随时看.
                <a class="u-icon-atten" href="#" target="_blank">
                    <img src="http://www.xiu8.com/assets/images/room/tips-pic.png" tppabs="http://www.xiu8.com/assets/images/room/tips-pic.png"/>
                </a>
            </p>
        </div>
    </div>
    <!-- 主播tips -->
    <div class="dlg-w dlg-u-card" ms-controller="broadInfo" style="top: 534px; left: 923px; display: none; position:absolute" id="bdInfotip">
        <div class="card-infor">
            <dl class="f-cb user-infor">
                <dt class="photo">
                    <img width="57" height="57" src="/images/avatar.jpg" tppabs="http://image.cache.xiu8.com/avatar/110/110/925075.jpg" alt=""/>
                </dt>
                <dd>
                    <p class="name">
                        混血↘↙笑笑
                    </p>
                    <p class="num">
                        (925075)
                    </p>
                    <div class="mis">
                        <em align="absmiddle" class="ul ul01">
                        </em>
                        <a target="_blank" href="11692-1.htm" tppabs="http://www.xiu8.com/clan/myfamily/11692">
                            <img alt="家族" src="http://image.cache.xiu8.com/medal-family/11692.png" tppabs="http://image.cache.xiu8.com/medal-family/11692.png" style="height: 16px; vertical-align: middle;"/>
                        </a>
                        <a target="_blank" href="help-t=1.htm" tppabs="http://www.xiu8.com/help?t=1" class="al al01" align="absmiddle">
                        </a>
                    </div>
                </dd>
            </dl>
            <div class="u-action">
                <p class="user-icon" id="bdTipMedalList">
                </p>
                <p class="user-txt c_7d pb5">
                    <span style="display:inline-block;width:42%">
                        <strong>
                            地址：
                        </strong>
                        未知省份
                    </span>
                    <span class="ml15" id="tipsStartTime">
                        <strong>
                            开播：
                        </strong>
                        暂未开播
                    </span>
                </p>
                <div class="void f-cb">
                    <strong class="f-l">
                        公告：
                    </strong>
                    <span class="f-r" id="bdTipsNotice">
                        欢迎大家来到我的直播间
                    </span>
                </div>
            </div>
        </div>
    </div>
    <!-- 勋章提示框 -->
    <div style="top:260px;left:20%; z-index:9999;display: none" class="dlg dlg-w dlg-meta2" id="medalTips">
    </div>
    <!-- 主播上下麦 -->
    <div class="dlg-f-room dlg-f-room3" ms-controller="broadList" style="display:none;" ms-visible="showPannel">
        <div class="hd">
            <span class="close f-dn" ms-click="togglePannel()">
                X
            </span>
            当前房间在线主播
        </div>
        <div class="bscroll">
            <div class="scrollbar">
                <div class="scrollbar-track">
                    <div class="scrollbar-thumb">
                        <div class="scrollbar-thumb-end">
                        </div>
                    </div>
                </div>
            </div>
            <div class="jscroll-cd viewport">
                <div class="jslist-b wholearea">
                    <p ms-repeat="bl">
                        <span class="name" ms-text="el.unn.hexToDec()">
                        </span>
                        <a ms-if="el.uid != bid" ms-click="changeVideo(1,el.uid)">
                            上麦
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!-- 最热工会模板|热力榜 -->
    <div class="hot-bar-sp f-dn">
        <h3 class="b1 b2">
        </h3>
        <div class="bd">
            <p>
                本轮时间：
                <em id="act-time">
                    12:10
                </em>
            </p>
            <p>
                当前排名：
                <em id="act-rank">
                    第20+名
                </em>
            </p>
            <p>
                距上一名主播：
                <em id="act-name">
                    某某某
                </em>
            </p>
            <p>
                距上一名相差：
                <em id="act-money">
                    123355
                </em>
                秀币
            </p>
            <p style="padding-top: 17px">
                榜单规则：根据主播
                <em>
                    10分钟
                </em>
                收到的秀币数量进行排名;
            </p>
            <p>
                榜单奖励：官方首页推荐，直播间
                <em>
                    爆红包
                </em>
                ，主播可以额外获得经验值奖励;
            </p>
            <p class="t-r">
                <a class="xq" href="index-1.htm" tppabs="http://www.xiu8.com/" target="_blank">
                    查看详情
                </a>
            </p>
        </div>
    </div>
    <!-- 勋章tips -->
    <div id="POP_TIPS" style="display: none;height: auto;width:188px;" class="dlg dlg-w dlg-meta">
        <dl class="d-imgtxt f-cb">
            <dt>
                <img width="31" height="31"/>
            </dt>
            <dd class="d-txt">
                <h2 class="js-tipName">
                </h2>
                <p>
                    <i class="js-tipTitle">
                    </i>
                    <a href="javascript:void(0)" style="display: none" target="_blank" class="hz_link">
                        活动详情
                    </a>
                </p>
            </dd>
        </dl>
    </div>
    <!-- 登陆框 -->
    <div id="_login_window_form">
    </div>
    <div id="js-sign" style="display: none" class="sign-in">
        <span class="b-close">
        </span>
        <div class="sign-in-box">
            <div class="time-box">
                <div class="hd f-cb">
                    <span class="date js-year-month">
                    </span>
                    <a href="javascript:void(0)" id="js-btn-sign" class="sign-btn">
                        签到
                    </a>
                </div>
                <ul class="time f-cb">
                    <li class="week">
                        一
                    </li>
                    <li class="week">
                        二
                    </li>
                    <li class="week">
                        三
                    </li>
                    <li class="week">
                        四
                    </li>
                    <li class="week">
                        五
                    </li>
                    <li class="week">
                        六
                    </li>
                    <li class="week">
                        日
                    </li>
                </ul>
                <ul style="height: 240px;" class="js-days time f-cb">
                </ul>
            </div>
            <div class="Continuous">
                <span class="Speed">
                    <i class="js-scale scale">
                    </i>
                </span>
                <ul>
                    <li class="a">
                        连续3天
                        <br/>
                        <em class="gift-icons gift-icons-01">
                        </em>
                    </li>
                    <li class="b">
                        连续5天
                        <br/>
                        <em class="gift-icons gift-icons-02">
                        </em>
                    </li>
                    <li class="c">
                        连续7天
                        <br/>
                        <em class="gift-icons gift-icons-03">
                        </em>
                    </li>
                    <li class="d">
                        连续15天
                        <br/>
                        <em class="gift-icons gift-icons-04">
                        </em>
                    </li>
                    <li class="d">
                        连续25天
                        <br/>
                        <em class="gift-icons gift-icons-05">
                        </em>
                    </li>
                    <li class="e">
                        全勤
                        <br/>
                        <em class="gift-icons gift-icons-06">
                        </em>
                    </li>
                </ul>
            </div>
        </div>
        <div class="sign-txt">
            <p>
                您已连续签到
                <strong class="js-sign-num">
                </strong>
                天
            </p>
            <p class="t-c" style="height:64px;">
                <em id="js-con-gift">
                </em>
            </p>
            <p class="t-c js-desc-con" style="height: 40px;">
            </p>
            <div class="quanq">
                <p>
                    当月全勤有机会获得神秘礼包
                </p>
                <a href="javascript:void(0)" id="js-open-gift" class="btn-open btn-open-dis">
                </a>
            </div>
        </div>
        <!-- 签到提示 -->
        <div id="js-sign-tips" style="display: none" class="sign-tips">
            <div class="bd">
                <ul>
                </ul>
                <div class="t-c">
                    <a class="js-close-gift btn" href="javascript:void(0)">
                        确 定
                    </a>
                </div>
            </div>
        </div>
        <div class="sign-tips-mark" style="display: none">
        </div>
    </div>
    <div class="ft-wrap f-dn">
        <div class="f-bg">
        </div>
        <div class="footer-login">
            <span class="tit-img">
            </span>
            <ul class="zb-list" id="run-girl">
            </ul>
            <div class="other">
                <a href="javascript:void(0);" class="trans-btn" id="exchange-btn">
                    换批妹纸
                </a>
                <a href="index-1.htm" tppabs="http://www.xiu8.com/" class="more-btn xiusta" stadata="{en:'bPanel_btn_more',xst:'c',et:'mc',tm:'more',v:1}" target="_blank">
                    更多艺人
                </a>
            </div>
            <div class="F-login">
                <ol>
                    <li>
                        <a class="xiu-btn" href="javascript:void(0);">
                            秀吧登录
                        </a>
                    </li>
                    <li>
                        <a class="bai-btn" href="javascript:void(0);">
                            百度登录
                        </a>
                    </li>
                    <li>
                        <a class="QQ-btn" href="javascript:void(0);">
                            QQ登录
                        </a>
                    </li>
                </ol>
                <i class="txt">
                    一键注册赢取百元大礼包！
                </i>
            </div>
            <a class="ft-close">
                <i class="icn-close">
                </i>
            </a>
        </div>
    </div>
    <div class="ristPanel" id="ristPanel">
        <div class="ristLogo">
        </div>
        <a href="javascript:" data-fn="closePl" class="js-risk ristPanelClosed">
        </a>
        <div id="ristInner">
        </div>
        <div class="rist-rule-box">
            <div class="rist-rule-font rist-uscroll">
                <div class="scrollbar">
                    <div class="scrollbar-track">
                        <div class="scrollbar-thumb">
                            <div class="scrollbar-thumb-end">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="jscroll-c viewport">
                    <ul class="rist-rule-list wholearea">
                        <li class="t">
                            活动规则：
                        </li>
                        <li>
                            1、用户发起冒险时，则会扣除用户冒险所需花的秀币；如主播拒绝冒险，系统会返还秀币;
                        </li>
                        <li>
                            2、主播点击“接受”冒险，无论答题成功或失败，均可获得用户发起冒险的50%秀币;
                        </li>
                        <li>
                            3、主播答题失败，需要接受惩罚；
                        </li>
                        <li class="t mgt30">
                            玩法介绍：
                        </li>
                        <li>
                            1、用户选择难度越高花费的秀币越多，同时主播受到的惩罚等级越高;
                        </li>
                        <li>
                            2、用户选择难度后，惩罚内容根据选择的难度系统随机选择惩罚项;
                        </li>
                        <li>
                            3、用户选择题目类型后，试题内容根据选择的题目类型系统随机选择题目;
                        </li>
                    </ul>
                </div>
            </div>
            <a href="javascript:" data-fn="closeRule" class="js-risk rist-btn-byel">
                <span class="rist-ft-yrzx">
                </span>
            </a>
        </div>
    </div>
</div>
	</div>
    <dialog :show.sync="isShowDialog" :content.sync="dialogContent"></dialog>
    <login :display.sync="logined"></login>
</template>

<script>
import store from '../vuex/store';
import io from "io";
import $ from "$";
import _ from "lodash";
import login from "./login";
import {logout, changeGift, refreshUser, subscribe, unsubscribe, refreshBalance, refreshRoom} from "../vuex/actions.js";
import moment from "moment";
import dialog from "./tools/dialog";
import { httper } from '../utils';

export default {
    store,
    vuex:{
        getters: {
            user: ({user}) => user,
            room: ({room}) => room,
            knight: ({knight}) => knight,
            livestate: ({livestate}) => livestate,
            gift: ({gift}) => gift,
            judgeSub: ({judgeSub})=>judgeSub,
            room_id: ({room_id}) => room_id
        },
        actions: {
            logout,
            changeGift,
            refreshUser,
            subscribe,
            unsubscribe,
            refreshBalance,
            refreshRoom
        }
    },
	data() {
		return {
			socket: io(),
            giftList: [
                {type: 0, name:"计时", curr: true},
                {type: 1, name:"幸运", curr: false},
                {type: 2, name:"普通", curr: false},
                {type: 3, name:"浪漫", curr: false},
                {type: 4, name:"奢华", curr: false},
                {type: 5, name:"定制", curr: false},
            ],
            chartWarp: [],
            userList: [],
            logined: "none",
            showItem: false,
            targetGift: null,
            giftNum: 1,
            isShowDialog: "none",
            dialogContent: "请选择礼物",
            moverGift: null,
            showQuick: false,
            quickList: [10, 66, 99, 188, 520, 1314, 9999],
            top: null,
            top23: null
		}
	},
    ready() {
        if(this.livestate.status!=0) {
            // jwplayer("v_Player").setup({
            //     //flash显示效果,none,fill,exactfit,uniform,默认为uniform有黑色边框
            //     //参考:http://support.jwplayer.com/customer/portal/articles/1413113-configuration-options-reference#other
            //     stretching:'fill',
            //     autostart: true,//自动播放
            //     controls:false,//显示控件按钮
            //     // OVA for JW5 only: Turn on playlist control - enables the next/previous controlbar buttons and load the entire playlist into the player in one go.
            //     allowPlaylistControl:false,
            //     //OVA for JWx only: Specifies whether or not overlays and ad notices are to be repositioned based on whether or not the control bar shows and hides.
            //     assessControlBarState:false,
            //     width: 480,
            //     height: 360,
            //     image: "/images/bg.jpg",
            //     sources: [
            //         {
            //             file: "rtmp://120.27.199.10/live",//要播放的文件
            //         }
            //     ],
                
            //     primary: "flash",
            //     flashplayer: "/javascripts/jwplayer/jwplayer.flash.swf"//播放flash的播放器地址，需要替换成你本地的播放器地址
            // })
           jwplayer("v_Player").setup({
                sources: [
                    {
                        file: `rtmp://120.27.199.10/live/${this.livestate.livecode}`
                    }
                ],
                stretching:'fill',
                image: "/images/family-room/f-room.png",
                autostart: true,
                controls:false,//显示控件按钮
                aspectratio: '24:10',
                width: 480,
                height: 360,
                primary: "flash",
                flashplayer: "/javascripts/jwplayer/jwplayer.flash6.6.swf"
            }); 
        }
        
        const self = this;
        const chartpane = $(this.$els.chartpane);
        chartpane.parent().height($("#PUB_CHART").height() + "px");
        chartpane.height($("#PUB_CHART").height() + "px")
        $(this.$els.chartpane).show();
        if(!!this.user) {
           this.socket.emit("add user", this.user); 
        }
        
        this.socket.on('user joined', function(user, room, top1, top23) {
            self.addChartwarp(_.extend({type: "join"}, user));
            self.userList = room;
            self.top = top1;
            self.top23 = top23;
        });
        this.socket.on('send message', function(user) {
            self.addChartwarp(_.extend({type:"msg", time: moment().format("hh:mm")}, user));
        });
        this.socket.on('send gift', function(gift) {
            self.sendGiftSwf(gift)
        });

        this.socket.on("update Top23", function(top23) {
            console.log(top23)
            self.top23 = top23;
        })
        this.socket.on("update Top", function(top) {
            self.top = top;
        })
    },
    computed: {
        getToptimes() {
            if( _.isEmpty(top) ) return "";
            let minutes = moment( top.time ).add(3, "minutes").diff(moment());
            if(minutes <= 0) return "00:00";
            minutes = parseInt(minutes / 1000);
            //const 
        }
    },
    methods: {
        moment: moment,
        targeQuick() {
            this.showQuick = !this.showQuick;
        },
        setQuick(n) {
            this.giftNum = n;
            this.showQuick = false;
        },
        refreshDom() {
            setTimeout(function() {
                const chartObj = document.querySelector("#PUB_SCROLL");
                chartObj.scrollTop=chartObj.style.height.replace("px", 0);
                console.log(chartObj.style.height.replace("px", 0));
            }, 100)
        },
        addChartwarp(chart) {
            this.chartWarp.push(chart);
            this.refreshDom();
        },
        currGift(evt, t) {
            $(evt.currentTarget).siblings().removeClass("curr");
            $(evt.currentTarget).toggleClass("curr");
            this.targetGift = t;
        },
        showLogin(type) {
          this.logined = type;
        },
        logoutActions() {
            this.logout();
            window.location.href="/";
        },
        setShowItem(bool) {
          this.showItem = !this.showItem;
        },
        chartSendMessage() {
            if(this.user == null) {
                this.showLogin("login");
                window.location.href="/";
            }else if(!_.isEmpty(this.message)) {
                this.socket.emit('send message', _.extend({message: this.message}, this.user) );
                this.message = '';
            }
            
        },
        moverGiftEvent(g, evt) {
            this.moverGift = g;
            const position = $(evt.target).offset();
            position.top = position.top - $("#domgt").outerHeight() - 2;
            $("#domgt").css(position);
        },
        sendGift() {
            const self = this;
            if(this.user == null) {
                this.showLogin("login");
                window.location.href="/";
            }else{
                if(this.targetGift == null) {
                    this.isShowDialog="block";
                    this.dialogContent = "请选择礼物";
                }else {
                    const r = {};
                    r.gift = this.targetGift;
                    r.total = this.giftNum;
                    r.type = "gift";
                    
                    httper(`/php/consume/giveGift?gift_id=${this.targetGift.id}&artist_id=${this.room.artist_id}&num=${this.giftNum}`).then((response) => {
                        if(response.data.code == 0) {
                            self.socket.emit("send gift", self.targetGift, r.total, self.user, self.room);
                            
                            //self.socket.emit('send message', _.extend(r, self.user) );
                            self.refreshBalance(_.result(response, "data.data[1]"));
                            self.refreshRoom(self.room_id)
                        }else {
                            self.isShowDialog="block";
                            self.dialogContent = _.result(response, "data.message");
                        }
                    });
                    
                }
                //this.socket.emit('send message', _.extend({type: "gift", gift: "千纸鹤", giftid: 310}, this.user) );
            }
        },
        sendGiftSwf(gift, artist_id) {
            swfobject.embedSWF(gift.swf, "domgiftEffect", "500", "420", "10.0.0", null, null, {wmode: "transparent"}, {loop: "loop"});
            _.delay( function() {
                $("#domgiftEffect").replaceWith("<div id='domgiftEffect'></div>")
            }, (parseInt(gift.swf_time) + 1) * 1000 );
        },
        focus(type) {
            if(this.user == null) {
                this.showLogin("login");
                window.location.href="/";
            }else{
                if(_.isEmpty(type)) {
                    this.subscribe(_.result(this.room, "artist_id"));
                }else {
                    this.unsubscribe(_.result(this.room, "artist_id"));
                }
                
            }
        },
        changeFocusState(state, evt) {
            switch(state) {
                case "over":
                    $(evt.target).removeClass().addClass("u-atten-v").text("取消关注");
                    break
                default:
                    $(evt.target).removeClass().addClass("u-atten-c").text("已关注");
                    break;
            }
        },
        giftTypeChange(type) {
            _.each(this.giftList, (gift) => {
                if(gift.type == type) {
                    gift.curr = true;
                    this.changeGift(type);
                }else {
                    gift.curr = false;
                }
            })
        }
    },
	components: {
        login,
        dialog
	}
}

</script>