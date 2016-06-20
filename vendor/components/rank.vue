<style lang="less" scoped>
	@import (css) "../styles/rank.css";
</style>

<template>
	<div class="main">
    <div class="pai_bg">
        <div class="paihang_bg">
            <div class="paihang_top">
                <div class="ph_top_lf">
                    <div class="pht_lover">
                        <img img-lazyload="/images/pai_hb01.png" width="25" height="20" src="/images/pai_hb01.png"/>
                        <span>
                            情侣榜
                        </span>
                        <a href="javascript:void(0)" class="rewards-link" onmouseover="xiuba.rank.showTips('love',this)" onmouseout="xiuba.rank.closeTips();">
                            奖励说明
                        </a>
                    </div>
                    <div class="pht_list">
                        <a href="javascript:void(0)" class="pt_dd_line love_cw pt_active" onmouseover="xiuba.rank.loveRank.showWeek(7,this);">
                            本周榜
                        </a>
                        <a href="javascript:void(0)" class="pt_dd_line love_lw" onmouseover="xiuba.rank.loveRank.showWeek(-7,this);">
                            上周榜
                        </a>
                    </div>
                    <div class="pht_ltz">
                        <div class="sub_ptz_bd">
                            <p>
                                守擂三冠王获得该款礼物专属定制，刻上你永恒的名字
                            </p>
                            <p class="pht_con_0 love_cw_box_t">
                                指定礼物：
                                <var>
                                    情人套礼
                                    <span>
                                        (非超级礼物)
                                    </span>
                                </var>
                            </p>
                            <p class="pht_con_1 love_lw_box_t" style="display:none;">
                                指定礼物：
                                情人套礼
                                <span>
                                    (非超级礼物)
                                </span>
                            </p>
                            <font>
                                每周收到指定礼物最多的一组情侣成为擂主(收礼需达到最小数量15个)
                            </font>
                            <p style="font-size:12px;line-height:18px;">
                                <span>
                                    擂主:
                                </span>
                                <span style="display:inline-block;margin:0 10px;overflow:hidden;vertical-align:middle;">
                                    ╋う假面灬悠哈
                                </span>
                                和&nbsp;
                                <span style="display:inline-block;margin:0 10px;overflow:hidden;vertical-align:middle;">
                                    颜值控、悠哈最可爱
                                </span>
                                <span style="padding-left:10px;">
                                    |&nbsp;成功守擂：
                                    <img img-lazyload="/images/pai_hb12.png" width="20" height="20" alt="情侣榜奖杯" src="/images/pai_hb12.png"/>
                                </span>
                            </p>
                        </div>
                        <img class="sub_ptz_ig pht_con_0 love_cw_box_t" img-lazyload="http://image.cache.xiu8.com/goods/300_b.gif" width="100" height="41" src="http://image.cache.xiu8.com/goods/300_b.gif"/>
                        <img class="sub_ptz_ig pht_con_1 love_lw_box_t" style="display:none;" img-lazyload="http://image.cache.xiu8.com/goods/300_b.gif" width="100" height="41" src="http://image.cache.xiu8.com/goods/300_b.gif"/>
                    </div>
                    <div class="pht_list_pm pht_con_0" id="love_cw_box_l">
                        <div class="pht_tm01">
                            <div class="pht_tm_bd pht_tm_bd_wh">
                                <div class="sub_ptm01">
                                    <a href="/40102">
                                        <img img-lazyload="http://image.cache.xiu8.com/avatar/55/55/926001.jpg?v=1449404647441" width="55" height="55" src="http://image.cache.xiu8.com/avatar/55/55/926001.jpg?v=1449404647441"/>
                                    </a>
                                    <img class="sub_pm_pst" img-lazyload="/images/pai_hb11.png" width="40" height="37" src="/images/pai_hb11.png"/>
                                </div>
                                <div class="sub_ptm02">
                                    <a href="/40102" target="_blank" title="林儿丶天策">
                                        林儿丶天策
                                    </a>
                                    <span>
                                        房号：40102
                                    </span>
                                </div>
                                <em class="phb_al al al18">
                                </em>
                            </div>
                            <img class="phb_vs" img-lazyload="/images/pai_hb13.png" width="23" height="20" src="/images/pai_hb13.png"/>
                            <div class="pht_tm_bd" style="width:240px;">
                                <div class="sub_ptm01">
                                    <a href="/40102">
                                        <img img-lazyload="http://image.cache.xiu8.com/avatar/55/55/177685777.jpg?v=1449404647441" width="55" height="55" src="http://image.cache.xiu8.com/avatar/55/55/177685777.jpg?v=1449404647441"/>
                                    </a>
                                    <img class="sub_pm_pst" img-lazyload="/images/pai_hb11.png" width="40" height="37" src="/images/pai_hb11.png"/>
                                </div>
                                <div class="sub_ptm02">
                                    <a href="javascript:void(0)" title="雪千寒【沫嫣】の守望">
                                        雪千寒【沫嫣】の守望
                                    </a>
                                    <span>
                                        ID：177685777
                                    </span>
                                </div>
                                <em class="phb_al ul ul11">
                                </em>
                            </div>
                            <p class="phb_scg" style="width:70px;">
                                收到1个
                            </p>
                        </div>
                        <div class="phb_usb01">
                            <p class="pub01">
                                2
                            </p>
                            <p class="pub02">
                                <a href="/929840" target="_blank" title="PSR-Kris">
                                    PSR-Kris
                                </a>
                                <span>
                                    (929840)
                                </span>
                            </p>
                            <em class="pub03 al al06">
                            </em>
                            <img img-lazyload="/images/pai_hb14.png" width="16" height="11" class="pub04" src="/images/pai_hb14.png"/>
                            <p class="pub02">
                                <a href="javascript:void(0)" title="莪嬞嘚♀伤">
                                    莪嬞嘚♀伤
                                </a>
                                <span>
                                    (198862007)
                                </span>
                            </p>
                            <em class="pub06 ul ul08">
                            </em>
                            <p class="pub05">
                                收到1个
                            </p>
                        </div>
                    </div>
                </div>
                <div class="ph_top_rf">
                    <div class="pht_lover" style="width:270px;">
                        <img src="/images/pai_hb02.png" width="22" height="20"/>
                        <span>
                            幸运星榜
                        </span>
                        <a href="javascript:void(0)" class="rewards-link" onmouseover="xiuba.rank.showTips('luck',this)" onmouseout="xiuba.rank.closeTips();">
                            奖励说明
                        </a>
                    </div>
                    <div class="pht_list" style="width:270px;">
                        <a href="javascript:void(0)" class="pt_dd_line luck_cw pt_active" onmouseover="xiuba.rank.luckRank.showWeek(7,this);">
                            本周榜
                        </a>
                        <a href="javascript:void(0)" class="pt_dd_line luck_lw" onmouseover="xiuba.rank.luckRank.showWeek(-7,this);">
                            上周榜
                        </a>
                    </div>
                    <div class="pht_ltz" style="width:268px;">
                        <div class="sub_ptz_bd" style="width:250px;">
                            <p>
                                守擂三冠王，提供特别定制礼物
                            </p>
                            <p>
                                抢榜礼物：幸运礼物
                            </p>
                            <font>
                                用户送出幸运礼物 总价值最高的成为擂主
                            </font>
                            <p style="font-size:12px;line-height:18px;">
                                <span>
                                    擂主:
                                </span>
                                <span title="狗蛋的蓝羽" style="width:74px;display:inline-block;margin-left:6px;overflow:hidden;vertical-align:middle;text-overflow: ellipsis;white-space: nowrap;">
                                    狗蛋的蓝羽
                                </span>
                                <span style="padding-left:2px;">
                                    |&nbsp;成功守擂：
                                    <img img-lazyload="/images/pai_hb12a.png" width="20" height="20" alt="情侣榜奖杯" src="/images/pai_hb12a.png"/>
                                    <img img-lazyload="/images/pai_hb12a.png" width="20" height="20" alt="情侣榜奖杯" src="/images/pai_hb12a.png"/>
                                    <img img-lazyload="/images/pai_hb12a.png" width="20" height="20" alt="情侣榜奖杯" src="/images/pai_hb12a.png"/>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="pht_rit_bg pht_con_0" id="luck_cw_box_l">
                        <div class="pht_tm_bd pht_tm_bd_rt">
                            <div class="sub_ptm01">
                                <a href="javascript:void(0)" onmouseout="xiuba.rank.luckRank.closeGiftTip();" onmouseover="xiuba.rank.luckRank.showGiftTip('月光女神','65_b.png',40595,this)">
                                    <img img-lazyload="http://image.cache.xiu8.com/avatar/55/55/194388739.jpg?v=1448293373420" width="55" height="55" src="http://image.cache.xiu8.com/avatar/55/55/194388739.jpg?v=1448293373420"/>
                                </a>
                                <img class="sub_pm_pst" src="/images/pai_hb11.png" width="40" height="37"/>
                            </div>
                            <div class="sub_ptm02 sub_ptm02_rt">
                                <a href="javascript:void(0)">
                                    飞天舞鹏
                                </a>
                                <span>
                                    ID：194388739
                                </span>
                            </div>
                            <em class="phb_al ul ul10">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                2
                            </p>
                            <p class="pub02">
                                <a href="javascript:void(0)" onmouseout="xiuba.rank.luckRank.closeGiftTip();" onmouseover="xiuba.rank.luckRank.showGiftTip('摇钱树','187_b.png',156,this)">
                                    傻咕平咕逗咕的bra
                                </a>
                                <span>
                                    (47246)
                                </span>
                            </p>
                            <em class="phb_rt_al ul ul17">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                3
                            </p>
                            <p class="pub02">
                                <a href="javascript:void(0)" onmouseout="xiuba.rank.luckRank.closeGiftTip();" onmouseover="xiuba.rank.luckRank.showGiftTip('月光女神','65_b.png',3640,this)">
                                    朱朱爱吃咖喱
                                </a>
                                <span>
                                    (185754923)
                                </span>
                            </p>
                            <em class="phb_rt_al ul ul06">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                4
                            </p>
                            <p class="pub02">
                                <a href="javascript:void(0)" onmouseout="xiuba.rank.luckRank.closeGiftTip();" onmouseover="xiuba.rank.luckRank.showGiftTip('月光女神','65_b.png',5256,this)">
                                    筱沫泰妍在你怀里求呸
                                </a>
                                <span>
                                    (55658)
                                </span>
                            </p>
                            <em class="phb_rt_al ul ul16">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                5
                            </p>
                            <p class="pub02">
                                <a href="javascript:void(0)" onmouseout="xiuba.rank.luckRank.closeGiftTip();" onmouseover="xiuba.rank.luckRank.showGiftTip('月光女神','65_b.png',5001,this)">
                                    狗蛋的蓝羽
                                </a>
                                <span>
                                    (55305)
                                </span>
                            </p>
                            <em class="phb_rt_al ul ul18">
                            </em>
                        </div>
                        <var id="luck_cw_more" style="display:none;">
                            <div class="phb_usb01 phb_usb01_rt">
                                <p class="pub01">
                                    6
                                </p>
                                <p class="pub02">
                                    <a href="javascript:void(0)" onmouseout="xiuba.rank.luckRank.closeGiftTip();" onmouseover="xiuba.rank.luckRank.showGiftTip('月光女神','65_b.png',5000,this)">
                                        问佛的顽石
                                    </a>
                                    <span>
                                        (51414)
                                    </span>
                                </p>
                                <em class="phb_rt_al ul ul17">
                                </em>
                            </div>
                            <div class="phb_usb01 phb_usb01_rt">
                                <p class="pub01">
                                    7
                                </p>
                                <p class="pub02">
                                    <a href="javascript:void(0)" onmouseout="xiuba.rank.luckRank.closeGiftTip();" onmouseover="xiuba.rank.luckRank.showGiftTip('月光女神','65_b.png',5000,this)">
                                        “╰★╮冲天 ╭★╯
                                    </a>
                                    <span>
                                        (185714870)
                                    </span>
                                </p>
                                <em class="phb_rt_al ul ul16">
                                </em>
                            </div>
                            <div class="phb_usb01 phb_usb01_rt">
                                <p class="pub01">
                                    8
                                </p>
                                <p class="pub02">
                                    <a href="javascript:void(0)" onmouseout="xiuba.rank.luckRank.closeGiftTip();" onmouseover="xiuba.rank.luckRank.showGiftTip('月光女神','65_b.png',1444,this)">
                                        你的香辣牛肉披萨
                                    </a>
                                    <span>
                                        (195765615)
                                    </span>
                                </p>
                                <em class="phb_rt_al ul ul10">
                                </em>
                            </div>
                            <div class="phb_usb01 phb_usb01_rt">
                                <p class="pub01">
                                    9
                                </p>
                                <p class="pub02">
                                    <a href="javascript:void(0)" onmouseout="xiuba.rank.luckRank.closeGiftTip();" onmouseover="xiuba.rank.luckRank.showGiftTip('月光女神','65_b.png',4026,this)">
                                        某年某月某一天_5bZ
                                    </a>
                                    <span>
                                        (195932019)
                                    </span>
                                </p>
                                <em class="phb_rt_al ul ul10">
                                </em>
                            </div>
                            <div class="phb_usb01 phb_usb01_rt">
                                <p class="pub01">
                                    10
                                </p>
                                <p class="pub02">
                                    <a href="javascript:void(0)" onmouseout="xiuba.rank.luckRank.closeGiftTip();" onmouseover="xiuba.rank.luckRank.showGiftTip('月光女神','65_b.png',3942,this)">
                                        ?～～♀熊二
                                    </a>
                                    <span>
                                        (196669222)
                                    </span>
                                </p>
                                <em class="phb_rt_al ul ul08">
                                </em>
                            </div>
                        </var>
                        <div class="phb_usb01" style="width:270px;">
                            <a href="javascript:void(0)" class="pub07" onclick="xiuba.rank.luckRank.showMore(7,this)">
                                显示更多
                            </a>
                        </div>
                    </div>
                    <div class="sub_pt_hv" id="luck_gift_tip" style="position:absolute;visibility: hidden;">
                        <img src="/images/pai_hb17.png" width="181" height="12"/>
                        <div class="sub_phv_bg">
                            <h2>
                                我的最爱
                            </h2>
                            <ul class="spg_v">
                                <li>
                                    <img src="" id="luck_gift_tip_src" width="40" height="40"/>
                                </li>
                                <li class="pv_bg01" id="luck_gift_tip_src_content">
                                </li>
                            </ul>
                        </div>
                        <img src="/images/pai_hb19.png" width="181" height="12"/>
                    </div>
                </div>
            </div>
            <div class="paihang_top" style="margin:20px auto;">
                <div class="paihang_ct_lf">
                    <div class="pht_lover" style="width: 438px;">
                        <img img-lazyload="/images/pai_hb04.png" width="18" height="20" src="/images/pai_hb04.png"/>
                        <span>
                            礼物周星榜
                        </span>
                        <a href="javascript:void(0)" class="rewards-link" onmouseover="xiuba.rank.showTips('weekStar',this)" onmouseout="xiuba.rank.closeTips();">
                            奖励说明
                        </a>
                    </div>
                    <div class="pht_list" style="width: 438px;">
                        <a href="javascript:void(0)" class="pt_dd_line weekStar_cw pt_active" onmouseover="xiuba.rank.weekStar.showWeek(7,this);">
                            本周榜
                        </a>
                        <a href="javascript:void(0)" class="pt_dd_line weekStar_lw" onmouseover="xiuba.rank.weekStar.showWeek(-7,this);">
                            上周榜
                        </a>
                    </div>
                    <div class="pai_hct_bg pht_con_0" id="weekStar_cw_box_l" onmouseout="xiuba.rank.weekStar.closeTip();">
                        <div class="pai_hbg_lf">
                            <ul class="spg_v spg_ctv" id="weekStar_rid_7_0" rid="928464">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(457,'肥皂',7,10000,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/457_b.png" width="40" height="40" src="http://image.cache.xiu8.com/goods/457_b.png"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="你好，我是pp">
                                        你好，我是pp
                                    </span>
                                    <font>
                                        个数：8
                                    </font>
                                </li>
                                <li>
                                    <em class="al al18">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_7_1" rid="929121">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(456,'黄瓜',7,20000,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/456_b.png" width="40" height="40" src="http://image.cache.xiu8.com/goods/456_b.png"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="DS-倩爷守护都没了">
                                        DS-倩爷守护都没了
                                    </span>
                                    <font>
                                        个数：534
                                    </font>
                                </li>
                                <li>
                                    <em class="al al13">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_7_2" rid="929817">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(455,'玫瑰花',7,20000,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/455_b.png" width="40" height="40" src="http://image.cache.xiu8.com/goods/455_b.png"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="V-oneン西子">
                                        V-oneン西子
                                    </span>
                                    <font>
                                        个数：1149
                                    </font>
                                </li>
                                <li>
                                    <em class="al al04">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_7_3" rid="924780">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(334,'玫瑰庄园',7,20,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/334_b.gif" width="40" height="40" src="http://image.cache.xiu8.com/goods/334_b.gif"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="逗比少女笑笑思密达">
                                        逗比少女笑笑思密达
                                    </span>
                                    <font>
                                        个数：7
                                    </font>
                                </li>
                                <li>
                                    <em class="al al30">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_7_4" rid="927684">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(326,'性感小内内',7,20000,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/326_b.png" width="40" height="40" src="http://image.cache.xiu8.com/goods/326_b.png"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title=" ╋う假面灬汤姆半岁">
                                        ╋う假面灬汤姆半岁
                                    </span>
                                    <font>
                                        个数：238
                                    </font>
                                </li>
                                <li>
                                    <em class="al al17">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_7_5" rid="928554">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(325,'激情香吻',7,20000,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/325_b.png" width="40" height="40" src="http://image.cache.xiu8.com/goods/325_b.png"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="雨之恋-睡神小雨">
                                        雨之恋-睡神小雨
                                    </span>
                                    <font>
                                        个数：14892
                                    </font>
                                </li>
                                <li>
                                    <em class="al al17">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_7_6" rid="924759">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(316,'江南style',7,200,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/316_b.gif" width="40" height="40" src="http://image.cache.xiu8.com/goods/316_b.gif"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="混血°HOHO.糊糊">
                                        混血°HOHO.糊糊
                                    </span>
                                    <font>
                                        个数：1
                                    </font>
                                </li>
                                <li>
                                    <em class="al al23">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_7_7" rid="910011">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(315,'肚皮舞',7,200,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/315_b.gif" width="40" height="40" src="http://image.cache.xiu8.com/goods/315_b.gif"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="★江泰★寂寞是杯酒">
                                        ★江泰★寂寞是杯酒
                                    </span>
                                    <font>
                                        个数：1
                                    </font>
                                </li>
                                <li>
                                    <em class="al al25">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_7_8" rid="929005">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(314,'小孩甩罩',7,200,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/314_b.gif" width="40" height="40" src="http://image.cache.xiu8.com/goods/314_b.gif"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="馨馨是可爱的猪头3">
                                        馨馨是可爱的猪头3
                                    </span>
                                    <font>
                                        个数：161
                                    </font>
                                </li>
                                <li>
                                    <em class="al al16">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_7_9" rid="929785">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(310,'小熊加油',7,100,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv" img-lazyload="http://image.cache.xiu8.com/goods/310_b.gif" width="40" height="40" src="http://image.cache.xiu8.com/goods/310_b.gif"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="  倩倩    ╮">
                                        倩倩 ╮
                                    </span>
                                    <font>
                                        个数：300
                                    </font>
                                </li>
                                <li>
                                    <em class="al al13">
                                    </em>
                                </li>
                            </ul>
                        </div>
                        <div class="pai_hbg_rf">
                            <ul class="spg_v spg_ctv" id="weekStar_rid_7_10" rid="926072">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(309,'探戈',7,100,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/309_b.gif" width="40" height="40" src="http://image.cache.xiu8.com/goods/309_b.gif"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="咕咕、不弃不离吗？">
                                        咕咕、不弃不离吗？
                                    </span>
                                    <font>
                                        个数：20
                                    </font>
                                </li>
                                <li>
                                    <em class="al al23">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_7_11" rid="920988">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(306,'豪华游轮',7,20,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv" img-lazyload="http://image.cache.xiu8.com/goods/306_b.gif" width="40" height="40" src="http://image.cache.xiu8.com/goods/306_b.gif"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="晴小空空空">
                                        晴小空空空
                                    </span>
                                    <font>
                                        个数：23
                                    </font>
                                </li>
                                <li>
                                    <em class="al al22">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_7_12" rid="926255">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(305,'私人飞机',7,20,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/305_b.gif" width="40" height="40" src="http://image.cache.xiu8.com/goods/305_b.gif"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="妖妖、、默">
                                        妖妖、、默
                                    </span>
                                    <font>
                                        个数：3
                                    </font>
                                </li>
                                <li>
                                    <em class="al al20">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_7_13" rid="927029">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(304,'甜蜜拥抱',7,20,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/304_b.gif" width="40" height="40" src="http://image.cache.xiu8.com/goods/304_b.gif"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="混血 酱儿酱er">
                                        混血 酱儿酱er
                                    </span>
                                    <font>
                                        个数：15
                                    </font>
                                </li>
                                <li>
                                    <em class="al al22">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_7_14" rid="928464">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(302,'浪漫求婚',7,20,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv" img-lazyload="http://image.cache.xiu8.com/goods/302_b.gif" width="40" height="40" src="http://image.cache.xiu8.com/goods/302_b.gif"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="你好，我是pp">
                                        你好，我是pp
                                    </span>
                                    <font>
                                        个数：24
                                    </font>
                                </li>
                                <li>
                                    <em class="al al18">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_7_15" rid="924759">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(301,'幸福乐园',7,4,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv" img-lazyload="http://image.cache.xiu8.com/goods/301_b.gif" width="40" height="40" src="http://image.cache.xiu8.com/goods/301_b.gif"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="混血°HOHO.糊糊">
                                        混血°HOHO.糊糊
                                    </span>
                                    <font>
                                        个数：4
                                    </font>
                                </li>
                                <li>
                                    <em class="al al23">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_7_16" rid="924759">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(299,'爱的火山',7,2,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/299_b.gif" width="40" height="40" src="http://image.cache.xiu8.com/goods/299_b.gif"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="混血°HOHO.糊糊">
                                        混血°HOHO.糊糊
                                    </span>
                                    <font>
                                        个数：1
                                    </font>
                                </li>
                                <li>
                                    <em class="al al23">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_7_17" rid="929720">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(298,'爱的港湾',7,40,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/298_b.gif" width="40" height="40" src="http://image.cache.xiu8.com/goods/298_b.gif"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="x_小香吻">
                                        x_小香吻
                                    </span>
                                    <font>
                                        个数：1
                                    </font>
                                </li>
                                <li>
                                    <em class="al al10">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_7_18" rid="929122">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(297,'守护天使',7,40,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/297_b.gif" width="40" height="40" src="http://image.cache.xiu8.com/goods/297_b.gif"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="点点 月底冲刺中">
                                        点点 月底冲刺中
                                    </span>
                                    <font>
                                        个数：1
                                    </font>
                                </li>
                                <li>
                                    <em class="al al14">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_7_19" rid="0">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(296,'烛光晚餐',7,34,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/296_b.gif" width="40" height="40" src="http://image.cache.xiu8.com/goods/296_b.gif"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="">
                                        无
                                    </span>
                                    <font>
                                        个数：0
                                    </font>
                                </li>
                                <li>
                                    <em class="al al00">
                                    </em>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="pai_hct_bg pht_con_1" id="weekStar_lw_box_l" style="display:none;" onmouseout="xiuba.rank.weekStar.closeTip();">
                        <div class="pai_hbg_lf">
                            <ul class="spg_v spg_ctv" id="weekStar_rid_-7_0" rid="926512">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(457,'肥皂',-7,10000,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/457_b.png" width="40" height="40"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="秀吧第一恶婆娘#">
                                        秀吧第一恶婆娘#
                                    </span>
                                    <font>
                                        个数：18777
                                    </font>
                                </li>
                                <li>
                                    <em class="al al17">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_-7_1" rid="929005">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(456,'黄瓜',-7,20000,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/456_b.png" width="40" height="40"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="馨馨是可爱的猪头3">
                                        馨馨是可爱的猪头3
                                    </span>
                                    <font>
                                        个数：73218
                                    </font>
                                </li>
                                <li>
                                    <em class="al al16">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_-7_2" rid="928554">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(455,'玫瑰花',-7,20000,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/455_b.png" width="40" height="40"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="雨之恋-睡神小雨">
                                        雨之恋-睡神小雨
                                    </span>
                                    <font>
                                        个数：87392
                                    </font>
                                </li>
                                <li>
                                    <em class="al al17">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_-7_3" rid="928394">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(334,'玫瑰庄园',-7,20,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/334_b.gif" width="40" height="40"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="叫你一声你敢答应吗，">
                                        叫你一声你敢答应吗，
                                    </span>
                                    <font>
                                        个数：101
                                    </font>
                                </li>
                                <li>
                                    <em class="al al15">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_-7_4" rid="998282">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(326,'性感小内内',-7,20000,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/326_b.png" width="40" height="40"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="至尊〆゛嘘嘘">
                                        至尊〆゛嘘嘘
                                    </span>
                                    <font>
                                        个数：70936
                                    </font>
                                </li>
                                <li>
                                    <em class="al al23">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_-7_5" rid="928912">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(325,'激情香吻',-7,20000,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/325_b.png" width="40" height="40"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="十二星☆贝儿不灵不灵">
                                        十二星☆贝儿不灵不灵
                                    </span>
                                    <font>
                                        个数：71947
                                    </font>
                                </li>
                                <li>
                                    <em class="al al13">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_-7_6" rid="926796">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(316,'江南style',-7,200,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/316_b.gif" width="40" height="40"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="凉心-天策">
                                        凉心-天策
                                    </span>
                                    <font>
                                        个数：1097
                                    </font>
                                </li>
                                <li>
                                    <em class="al al19">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_-7_7" rid="926072">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(315,'肚皮舞',-7,200,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/315_b.gif" width="40" height="40"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="咕咕、不弃不离吗？">
                                        咕咕、不弃不离吗？
                                    </span>
                                    <font>
                                        个数：1026
                                    </font>
                                </li>
                                <li>
                                    <em class="al al23">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_-7_8" rid="926367">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(314,'小孩甩罩',-7,200,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/314_b.gif" width="40" height="40"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="混血☆格格月底过任务">
                                        混血☆格格月底过任务
                                    </span>
                                    <font>
                                        个数：1173
                                    </font>
                                </li>
                                <li>
                                    <em class="al al18">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_-7_9" rid="929785">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(310,'小熊加油',-7,100,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/310_b.gif" width="40" height="40"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="  倩倩    ╮">
                                        倩倩 ╮
                                    </span>
                                    <font>
                                        个数：1080
                                    </font>
                                </li>
                                <li>
                                    <em class="al al12">
                                    </em>
                                </li>
                            </ul>
                        </div>
                        <div class="pai_hbg_rf">
                            <ul class="spg_v spg_ctv" id="weekStar_rid_-7_10" rid="927684">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(309,'探戈',-7,100,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/309_b.gif" width="40" height="40"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title=" ╋う假面灬汤姆">
                                        ╋う假面灬汤姆
                                    </span>
                                    <font>
                                        个数：680
                                    </font>
                                </li>
                                <li>
                                    <em class="al al17">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_-7_11" rid="929644">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(306,'豪华游轮',-7,20,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/306_b.gif" width="40" height="40"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="╋う龙猫从此不早朝">
                                        ╋う龙猫从此不早朝
                                    </span>
                                    <font>
                                        个数：79
                                    </font>
                                </li>
                                <li>
                                    <em class="al al09">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_-7_12" rid="927383">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(305,'私人飞机',-7,20,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/305_b.gif" width="40" height="40"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="╰★╮风筝╭★╯">
                                        ╰★╮风筝╭★╯
                                    </span>
                                    <font>
                                        个数：236
                                    </font>
                                </li>
                                <li>
                                    <em class="al al19">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_-7_13" rid="924178">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(304,'甜蜜拥抱',-7,20,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/304_b.gif" width="40" height="40"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="优优_萌女神优乐美╮">
                                        优优_萌女神优乐美╮
                                    </span>
                                    <font>
                                        个数：71
                                    </font>
                                </li>
                                <li>
                                    <em class="al al28">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_-7_14" rid="924780">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(302,'浪漫求婚',-7,20,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/302_b.gif" width="40" height="40"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="逗比少女笑笑思密达">
                                        逗比少女笑笑思密达
                                    </span>
                                    <font>
                                        个数：104
                                    </font>
                                </li>
                                <li>
                                    <em class="al al30">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_-7_15" rid="922724">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(301,'幸福乐园',-7,4,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/301_b.gif" width="40" height="40"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="桃子づ肉嘟嘟的天使">
                                        桃子づ肉嘟嘟的天使
                                    </span>
                                    <font>
                                        个数：10
                                    </font>
                                </li>
                                <li>
                                    <em class="al al22">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_-7_16" rid="925781">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(299,'爱的火山',-7,2,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/299_b.gif" width="40" height="40"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="C.c心中的小太阳">
                                        C.c心中的小太阳
                                    </span>
                                    <font>
                                        个数：16
                                    </font>
                                </li>
                                <li>
                                    <em class="al al22">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_-7_17" rid="927974">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(298,'爱的港湾',-7,40,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/298_b.gif" width="40" height="40"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="Dream-二猫">
                                        Dream-二猫
                                    </span>
                                    <font>
                                        个数：122
                                    </font>
                                </li>
                                <li>
                                    <em class="al al18">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_-7_18" rid="929005">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(297,'守护天使',-7,40,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/297_b.gif" width="40" height="40"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="馨馨是可爱的猪头3">
                                        馨馨是可爱的猪头3
                                    </span>
                                    <font>
                                        个数：144
                                    </font>
                                </li>
                                <li>
                                    <em class="al al16">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv" id="weekStar_rid_-7_19" rid="997256">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.weekStar.showTip(296,'烛光晚餐',-7,34,this);" onmouseout="xiuba.rank.weekStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/296_b.gif" width="40" height="40"/>
                                </li>
                                <li class="pv_bg03">
                                    <span title="你看那里有一个小如菲">
                                        你看那里有一个小如菲
                                    </span>
                                    <font>
                                        个数：240
                                    </font>
                                </li>
                                <li>
                                    <em class="al al13">
                                    </em>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="pbg_ct_bg" id="weekStar_tip" style="display:none;">
                        <img src="/images/pai_hb15.png" width="257" height="13"/>
                        <div class="pbg_ct_y">
                            <div class="sub_pct_y">
                                <h2 class="pc_ty01" id="weekStar_tip_goodName">
                                </h2>
                                <p class="pc_ty02" id="weekStar_tip_title">
                                </p>
                                <var id="weekStar_tip_list">
                                </var>
                            </div>
                        </div>
                        <img src="/images/pai_hb20.png" width="257" height="13"/>
                    </div>
                </div>
                <div class="paihang_ct_rf">
                    <div class="pht_lover" style="width: 438px;">
                        <img img-lazyload="/images/pai_hb04.png" width="18" height="20" src="/images/pai_hb04.png"/>
                        <span>
                            抢星达人榜
                        </span>
                        <a href="javascript:void(0)" class="rewards-link" onmouseover="xiuba.rank.showTips('snatchStar',this)" onmouseout="xiuba.rank.closeTips();">
                            奖励说明
                        </a>
                    </div>
                    <div class="pht_list" style="width: 438px;">
                        <a href="javascript:void(0)" class="pt_dd_line snatchStar_cw pt_active" onmouseover="xiuba.rank.snatchStar.showWeek(7,this);">
                            本周榜
                        </a>
                        <a href="javascript:void(0)" class="pt_dd_line snatchStar_lw" onmouseover="xiuba.rank.snatchStar.showWeek(-7,this);">
                            上周榜
                        </a>
                    </div>
                    <div class="pai_hct_bg pht_con_0" id="snatchStar_cw_box_l" onmouseout="xiuba.rank.snatchStar.closeTip();">
                        <div class="pai_hbg_lf">
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(457,'肥皂',7,10000,0,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/457_b.png" width="40" height="40" src="http://image.cache.xiu8.com/goods/457_b.png"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="柴山一条狼、">
                                        柴山一条狼、
                                    </span>
                                    <font>
                                        个数：8
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul17">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(456,'黄瓜',7,20000,1,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/456_b.png" width="40" height="40" src="http://image.cache.xiu8.com/goods/456_b.png"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="化外之人自在">
                                        化外之人自在
                                    </span>
                                    <font>
                                        个数：485
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul08">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(455,'玫瑰花',7,20000,2,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/455_b.png" width="40" height="40" src="http://image.cache.xiu8.com/goods/455_b.png"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="丑美啊啊">
                                        丑美啊啊
                                    </span>
                                    <font>
                                        个数：1040
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul04">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(334,'玫瑰庄园',7,20,3,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/334_b.gif" width="40" height="40" src="http://image.cache.xiu8.com/goods/334_b.gif"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="笑笑的Bryan">
                                        笑笑的Bryan
                                    </span>
                                    <font>
                                        个数：4
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul27">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(326,'性感小内内',7,20000,4,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/326_b.png" width="40" height="40" src="http://image.cache.xiu8.com/goods/326_b.png"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="狗蛋的蓝羽">
                                        狗蛋的蓝羽
                                    </span>
                                    <font>
                                        个数：238
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul18">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(325,'激情香吻',7,20000,5,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/325_b.png" width="40" height="40" src="http://image.cache.xiu8.com/goods/325_b.png"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="雨之恋-慕容兰若">
                                        雨之恋-慕容兰若
                                    </span>
                                    <font>
                                        个数：9999
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul08">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(316,'江南style',7,200,6,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/316_b.gif" width="40" height="40" src="http://image.cache.xiu8.com/goods/316_b.gif"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="HOHO.°RD">
                                        HOHO.°RD
                                    </span>
                                    <font>
                                        个数：1
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul14">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(315,'肚皮舞',7,200,7,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/315_b.gif" width="40" height="40" src="http://image.cache.xiu8.com/goods/315_b.gif"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="相识是缘份_s0v">
                                        相识是缘份_s0v
                                    </span>
                                    <font>
                                        个数：1
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul06">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(314,'小孩甩罩',7,200,8,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/314_b.gif" width="40" height="40" src="http://image.cache.xiu8.com/goods/314_b.gif"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="茴香豆de逗">
                                        茴香豆de逗
                                    </span>
                                    <font>
                                        个数：158
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul16">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(310,'小熊加油',7,100,9,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv" img-lazyload="http://image.cache.xiu8.com/goods/310_b.gif" width="40" height="40" src="http://image.cache.xiu8.com/goods/310_b.gif"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="柴山一条狼、">
                                        柴山一条狼、
                                    </span>
                                    <font>
                                        个数：300
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul17">
                                    </em>
                                </li>
                            </ul>
                        </div>
                        <div class="pai_hbg_rf">
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(309,'探戈',7,100,10,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/309_b.gif" width="40" height="40" src="http://image.cache.xiu8.com/goods/309_b.gif"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="碎碎来巡山">
                                        碎碎来巡山
                                    </span>
                                    <font>
                                        个数：10
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul15">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(306,'豪华游轮',7,20,11,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv" img-lazyload="http://image.cache.xiu8.com/goods/306_b.gif" width="40" height="40" src="http://image.cache.xiu8.com/goods/306_b.gif"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="继续再继续">
                                        继续再继续
                                    </span>
                                    <font>
                                        个数：23
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul14">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(305,'私人飞机',7,20,12,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/305_b.gif" width="40" height="40" src="http://image.cache.xiu8.com/goods/305_b.gif"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="妖家军-关门只打狗">
                                        妖家军-关门只打狗
                                    </span>
                                    <font>
                                        个数：2
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul10">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(304,'甜蜜拥抱',7,20,13,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/304_b.gif" width="40" height="40" src="http://image.cache.xiu8.com/goods/304_b.gif"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="陆月初捌">
                                        陆月初捌
                                    </span>
                                    <font>
                                        个数：10
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul19">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(302,'浪漫求婚',7,20,14,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv" img-lazyload="http://image.cache.xiu8.com/goods/302_b.gif" width="40" height="40" src="http://image.cache.xiu8.com/goods/302_b.gif"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="阎王已死·结发受长生">
                                        阎王已死·结发受长生
                                    </span>
                                    <font>
                                        个数：20
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul19">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(301,'幸福乐园',7,4,15,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv" img-lazyload="http://image.cache.xiu8.com/goods/301_b.gif" width="40" height="40" src="http://image.cache.xiu8.com/goods/301_b.gif"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="HOHO.浅唱">
                                        HOHO.浅唱
                                    </span>
                                    <font>
                                        个数：4
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul17">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(299,'爱的火山',7,2,16,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/299_b.gif" width="40" height="40" src="http://image.cache.xiu8.com/goods/299_b.gif"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="HOHO.浅唱">
                                        HOHO.浅唱
                                    </span>
                                    <font>
                                        个数：1
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul17">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(298,'爱的港湾',7,40,17,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/298_b.gif" width="40" height="40" src="http://image.cache.xiu8.com/goods/298_b.gif"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="云端风兴">
                                        云端风兴
                                    </span>
                                    <font>
                                        个数：1
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul09">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(297,'守护天使',7,40,18,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/297_b.gif" width="40" height="40" src="http://image.cache.xiu8.com/goods/297_b.gif"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="某年某月某一天_5bZ">
                                        某年某月某一天_5bZ
                                    </span>
                                    <font>
                                        个数：1
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul10">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(296,'烛光晚餐',7,34,19,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv pv_bg_gray" img-lazyload="http://image.cache.xiu8.com/goods/296_b.gif" width="40" height="40" src="http://image.cache.xiu8.com/goods/296_b.gif"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="">
                                        无
                                    </span>
                                    <font>
                                        个数：0
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul00">
                                    </em>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="pai_hct_bg pht_con_1" id="snatchStar_lw_box_l" style="display:none;" onmouseout="xiuba.rank.snatchStar.closeTip();">
                        <div class="pai_hbg_lf">
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(457,'肥皂',-7,10000,0,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/457_b.png" width="40" height="40"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="问佛的顽石">
                                        问佛的顽石
                                    </span>
                                    <font>
                                        个数：14811
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul17">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(456,'黄瓜',-7,20000,1,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/456_b.png" width="40" height="40"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="茴香豆de逗">
                                        茴香豆de逗
                                    </span>
                                    <font>
                                        个数：64659
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul16">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(455,'玫瑰花',-7,20000,2,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/455_b.png" width="40" height="40"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="雨之恋~专属只爱小雨">
                                        雨之恋~专属只爱小雨
                                    </span>
                                    <font>
                                        个数：20840
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul08">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(334,'玫瑰庄园',-7,20,3,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/334_b.gif" width="40" height="40"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="那颗闪耀的太阳">
                                        那颗闪耀的太阳
                                    </span>
                                    <font>
                                        个数：30
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul16">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(326,'性感小内内',-7,20000,4,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/326_b.png" width="40" height="40"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="你说听者得救，">
                                        你说听者得救，
                                    </span>
                                    <font>
                                        个数：60000
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul16">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(325,'激情香吻',-7,20000,5,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/325_b.png" width="40" height="40"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="9 爷 ">
                                        9 爷
                                    </span>
                                    <font>
                                        个数：40812
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul15">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(316,'江南style',-7,200,6,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/316_b.gif" width="40" height="40"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="默默地等代">
                                        默默地等代
                                    </span>
                                    <font>
                                        个数：800
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul17">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(315,'肚皮舞',-7,200,7,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/315_b.gif" width="40" height="40"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="咕咕咕咕咕、大方">
                                        咕咕咕咕咕、大方
                                    </span>
                                    <font>
                                        个数：372
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul15">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(314,'小孩甩罩',-7,200,8,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/314_b.gif" width="40" height="40"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="★$imple★">
                                        ★$imple★
                                    </span>
                                    <font>
                                        个数：700
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul18">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(310,'小熊加油',-7,100,9,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/310_b.gif" width="40" height="40"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="柴山一条狼、">
                                        柴山一条狼、
                                    </span>
                                    <font>
                                        个数：1062
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul17">
                                    </em>
                                </li>
                            </ul>
                        </div>
                        <div class="pai_hbg_rf">
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(309,'探戈',-7,100,10,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/309_b.gif" width="40" height="40"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="无敌海景房">
                                        无敌海景房
                                    </span>
                                    <font>
                                        个数：275
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul15">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(306,'豪华游轮',-7,20,11,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/306_b.gif" width="40" height="40"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="那颗闪耀的太阳">
                                        那颗闪耀的太阳
                                    </span>
                                    <font>
                                        个数：45
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul16">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(305,'私人飞机',-7,20,12,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/305_b.gif" width="40" height="40"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title=" 安与骑兵">
                                        安与骑兵
                                    </span>
                                    <font>
                                        个数：116
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul11">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(304,'甜蜜拥抱',-7,20,13,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/304_b.gif" width="40" height="40"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="柴山一条狼、">
                                        柴山一条狼、
                                    </span>
                                    <font>
                                        个数：47
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul17">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(302,'浪漫求婚',-7,20,14,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/302_b.gif" width="40" height="40"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="笑笑的Bryan">
                                        笑笑的Bryan
                                    </span>
                                    <font>
                                        个数：71
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul27">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(301,'幸福乐园',-7,4,15,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/301_b.gif" width="40" height="40"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="Hi ！你还好吗？">
                                        Hi ！你还好吗？
                                    </span>
                                    <font>
                                        个数：10
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul22">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(299,'爱的火山',-7,2,16,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/299_b.gif" width="40" height="40"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="无敌海景房">
                                        无敌海景房
                                    </span>
                                    <font>
                                        个数：13
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul15">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(298,'爱的港湾',-7,40,17,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/298_b.gif" width="40" height="40"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="孤独、苏雨涵">
                                        孤独、苏雨涵
                                    </span>
                                    <font>
                                        个数：50
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul22">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(297,'守护天使',-7,40,18,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/297_b.gif" width="40" height="40"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="茴香豆de逗">
                                        茴香豆de逗
                                    </span>
                                    <font>
                                        个数：141
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul16">
                                    </em>
                                </li>
                            </ul>
                            <ul class="spg_v spg_ctv">
                                <li class="pv_bg02">
                                    <img onmouseover="xiuba.rank.snatchStar.showTip(296,'烛光晚餐',-7,34,19,this);" onmouseout="xiuba.rank.snatchStar.closeTip();" class="pht_anchor_hv" src="http://image.cache.xiu8.com/goods/296_b.gif" width="40" height="40"/>
                                </li>
                                <li class="pv_bg01">
                                    <span title="點石成金.">
                                        點石成金.
                                    </span>
                                    <font>
                                        个数：200
                                    </font>
                                </li>
                                <li>
                                    <em class="ul ul15">
                                    </em>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="pbg_ct_bg" id="snatchStar_tip" style="left: 941px; top: 1376px; display: none;">
                        <img src="/images/pai_hb15.png" width="257" height="13"/>
                        <div class="pbg_ct_y">
                            <div class="sub_pct_y">
                                <h2 class="pc_ty01" id="snatchStar_tip_goodName">
                                </h2>
                                <p class="pc_ty02" id="snatchStar_tip_title">
                                </p>
                                <var id="snatchStar_tip_list">
                                </var>
                            </div>
                        </div>
                        <img src="/images/pai_hb20.png" width="257" height="13"/>
                    </div>
                </div>
            </div>
            <div class="paihang_top" style="margin-bottom:20px auto;">
                <div style="width:440px;" class="paihang_bm_lf" xmlns="http://www.w3.org/1999/html">
                    <div style="width: 270px;" class="pht_lover">
                        <img width="14" height="20" src="/images/pai_hb05.png"/>
                        <span>
                            主播排行榜
                        </span>
                        <a href="javascript:void(0)" class="rewards-link" onmouseover="xiuba.rank.showTips('general',this)" onmouseout="xiuba.rank.closeTips();">
                            奖励说明
                        </a>
                    </div>
                    <div style="width: 270px;" class="pht_list pht_list_bm">
                        <a href="javascript:void(0)" class="pt_dd_line pt_active" id="general_1" onmouseover="xiuba.rank.generalRank.showWeek(1,this);">
                            日榜
                        </a>
                        <a href="javascript:void(0)" class="pt_dd_line" id="general_7" onmouseover="xiuba.rank.generalRank.showWeek(7,this);">
                            周榜
                        </a>
                        <a href="javascript:void(0)" class="pt_dd_line" id="general_30" onmouseover="xiuba.rank.generalRank.showWeek(30,this);">
                            月榜
                        </a>
                    </div>
                    <div class="pht_rit_bg pht_con_0" id="general_1_box">
                        <div class="ph_list_bm">
                            <div class="pht_tm_bd pht_tm_bd_bm">
                                <img class="sub_pmt1" src="/images/pai_hb08.png" width="40" height="39"/>
                                <div class="sub_ptm01 sub_ptm01_bm">
                                    <a href="/929785" target="_blank">
                                        <img width="55" height="55" src="http://image.cache.xiu8.com/avatar/55/55/929785.jpg?v=1457784706695"/>
                                    </a>
                                </div>
                                <div class="sub_ptm02 sub_ptm02_bm">
                                    <a href="/929785" target="_blank" title="  倩倩    ╮">
                                        倩倩    ╮
                                    </a>
                                    <span>
                                        房号：929785
                                    </span>
                                </div>
                                <em class="pbm_al al al13">
                                </em>
                            </div>
                        </div>
                        <div class="ph_list_bm">
                            <div class="pht_tm_bd pht_tm_bd_bm">
                                <img class="sub_pmt1" src="/images/pai_hb09.png" width="40" height="39"/>
                                <div class="sub_ptm01 sub_ptm01_bm">
                                    <a href="/924759" target="_blank">
                                        <img width="55" height="55" src="http://image.cache.xiu8.com/avatar/55/55/924759.jpg?v=1451652370564"/>
                                    </a>
                                </div>
                                <div class="sub_ptm02 sub_ptm02_bm">
                                    <a href="/924759" target="_blank" title="混血°HOHO.糊糊">
                                        混血°HOHO.糊糊
                                    </a>
                                    <span>
                                        房号：924759
                                    </span>
                                </div>
                                <em class="pbm_al al al23">
                                </em>
                            </div>
                        </div>
                        <div class="ph_list_bm">
                            <div class="pht_tm_bd pht_tm_bd_bm">
                                <img class="sub_pmt1" src="/images/pai_hb10.png" width="40" height="39"/>
                                <div class="sub_ptm01 sub_ptm01_bm">
                                    <a href="/928464" target="_blank">
                                        <img width="55" height="55" src="http://image.cache.xiu8.com/avatar/55/55/928464.jpg?v=1455008359262"/>
                                    </a>
                                </div>
                                <div class="sub_ptm02 sub_ptm02_bm">
                                    <a href="/928464" target="_blank" title="你好，我是pp">
                                        你好，我是pp
                                    </a>
                                    <span>
                                        房号：928464
                                    </span>
                                </div>
                                <em class="pbm_al al al18">
                                </em>
                            </div>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                4
                            </p>
                            <p class="pub02">
                                <a href="/929005" target="_blank" title="馨馨是可爱的猪头3">
                                    馨馨是可爱的猪头3
                                </a>
                                <span>
                                    (929005)
                                </span>
                            </p>
                            <em class="phb_rt_al al al16">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                5
                            </p>
                            <p class="pub02">
                                <a href="/920988" target="_blank" title="晴小空空空">
                                    晴小空空空
                                </a>
                                <span>
                                    (920988)
                                </span>
                            </p>
                            <em class="phb_rt_al al al22">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                6
                            </p>
                            <p class="pub02">
                                <a href="/927029" target="_blank" title="混血 酱儿酱er">
                                    混血 酱儿酱er
                                </a>
                                <span>
                                    (927029)
                                </span>
                            </p>
                            <em class="phb_rt_al al al22">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                7
                            </p>
                            <p class="pub02">
                                <a href="/928554" target="_blank" title="雨之恋-睡神小雨">
                                    雨之恋-睡神小雨
                                </a>
                                <span>
                                    (928554)
                                </span>
                            </p>
                            <em class="phb_rt_al al al17">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                8
                            </p>
                            <p class="pub02">
                                <a href="/926255" target="_blank" title="妖妖、、默">
                                    妖妖、、默
                                </a>
                                <span>
                                    (926255)
                                </span>
                            </p>
                            <em class="phb_rt_al al al20">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                9
                            </p>
                            <p class="pub02">
                                <a href="/927974" target="_blank" title="Dream-二猫">
                                    Dream-二猫
                                </a>
                                <span>
                                    (927974)
                                </span>
                            </p>
                            <em class="phb_rt_al al al18">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                10
                            </p>
                            <p class="pub02">
                                <a href="/50009" target="_blank" title="咕咕、不弃不离吗？">
                                    咕咕、不弃不离吗？
                                </a>
                                <span>
                                    (50009)
                                </span>
                            </p>
                            <em class="phb_rt_al al al23">
                            </em>
                        </div>
                    </div>
                </div>
                <div class="paihang_bm_cf">
                    <div style="width:270px;" class="pht_lover">
                        <img width="18" height="20" src="/images/pai_hb06.png"/>
                        <span>
                            富豪排行榜
                        </span>
                        <a href="javascript:void(0)" class="rewards-link" onmouseover="xiuba.rank.showTips('wealth',this)" onmouseout="xiuba.rank.closeTips();">
                            奖励说明
                        </a>
                    </div>
                    <div style="width:270px;" class="pht_list pht_list_bm">
                        <a href="javascript:void(0)" class="pt_dd_line" id="wealth_1" onmouseover="xiuba.rank.wealthRank.showWeek(1,this);">
                            日榜
                        </a>
                        <a href="javascript:void(0)" class="pt_dd_line pt_active" id="wealth_7" onmouseover="xiuba.rank.wealthRank.showWeek(7,this);">
                            周榜
                        </a>
                        <a href="javascript:void(0)" class="pt_dd_line" id="wealth_30" onmouseover="xiuba.rank.wealthRank.showWeek(30,this);">
                            月榜
                        </a>
                    </div>
                    <div class="pht_rit_bg pht_con_0" id="wealth_1_box" style="display: none;">
                        <div class="ph_list_bm">
                            <div class="pht_tm_bd pht_tm_bd_bm">
                                <img class="sub_pmt1" src="/images/pai_hb08.png" width="40" height="39"/>
                                <div class="sub_ptm01 sub_ptm01_bm">
                                    <a href="javascript:void(0)">
                                        <img width="55" height="55" src="http://image.cache.xiu8.com/avatar/55/55/193791503.jpg?v=1457531399912"/>
                                    </a>
                                </div>
                                <div class="sub_ptm02 sub_ptm02_bm">
                                    <a href="javascript:void(0)" title="柴山一条狼、">
                                        柴山一条狼、
                                    </a>
                                    <span>
                                        ID：47261
                                    </span>
                                </div>
                                <em class="pbm_al ul ul17">
                                </em>
                            </div>
                        </div>
                        <div class="ph_list_bm">
                            <div class="pht_tm_bd pht_tm_bd_bm">
                                <img class="sub_pmt1" src="/images/pai_hb09.png" width="40" height="39"/>
                                <div class="sub_ptm01 sub_ptm01_bm">
                                    <a href="javascript:void(0)">
                                        <img width="55" height="55" src="http://image.cache.xiu8.com/avatar/55/55/176132879.jpg?v=1457862505970"/>
                                    </a>
                                </div>
                                <div class="sub_ptm02 sub_ptm02_bm">
                                    <a href="javascript:void(0)" title="HOHO.浅唱">
                                        HOHO.浅唱
                                    </a>
                                    <span>
                                        ID：520924759
                                    </span>
                                </div>
                                <em class="pbm_al ul ul17">
                                </em>
                            </div>
                        </div>
                        <div class="ph_list_bm">
                            <div class="pht_tm_bd pht_tm_bd_bm">
                                <img class="sub_pmt1" src="/images/pai_hb10.png" width="40" height="39"/>
                                <div class="sub_ptm01 sub_ptm01_bm">
                                    <a href="javascript:void(0)">
                                        <img width="55" height="55" src="http://image.cache.xiu8.com/avatar/55/55/198235321.jpg?v=1457407055934"/>
                                    </a>
                                </div>
                                <div class="sub_ptm02 sub_ptm02_bm">
                                    <a href="javascript:void(0)" title="茴香豆de逗">
                                        茴香豆de逗
                                    </a>
                                    <span>
                                        ID：48638
                                    </span>
                                </div>
                                <em class="pbm_al ul ul16">
                                </em>
                            </div>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                4
                            </p>
                            <p class="pub02">
                                <a href="javascript:void(0)" title="继续再继续">
                                    继续再继续
                                </a>
                                <span>
                                    (176257739)
                                </span>
                            </p>
                            <em class="phb_rt_al ul ul14">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                5
                            </p>
                            <p class="pub02">
                                <a href="javascript:void(0)" title="阎王已死·结发受长生">
                                    阎王已死·结发受长生
                                </a>
                                <span>
                                    (19981114)
                                </span>
                            </p>
                            <em class="phb_rt_al ul ul19">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                6
                            </p>
                            <p class="pub02">
                                <a href="javascript:void(0)" title="飞天舞鹏">
                                    飞天舞鹏
                                </a>
                                <span>
                                    (194388739)
                                </span>
                            </p>
                            <em class="phb_rt_al ul ul10">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                7
                            </p>
                            <p class="pub02">
                                <a href="javascript:void(0)" title="二猫﹏°作死豆丶">
                                    二猫﹏°作死豆丶
                                </a>
                                <span>
                                    (179576849)
                                </span>
                            </p>
                            <em class="phb_rt_al ul ul16">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                8
                            </p>
                            <p class="pub02">
                                <a href="javascript:void(0)" title="陆月初捌">
                                    陆月初捌
                                </a>
                                <span>
                                    (47093)
                                </span>
                            </p>
                            <em class="phb_rt_al ul ul19">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                9
                            </p>
                            <p class="pub02">
                                <a href="javascript:void(0)" title="雨之恋-慕容兰若">
                                    雨之恋-慕容兰若
                                </a>
                                <span>
                                    (197250330)
                                </span>
                            </p>
                            <em class="phb_rt_al ul ul08">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                10
                            </p>
                            <p class="pub02">
                                <a href="javascript:void(0)" title="莪嬞嘚♀伤">
                                    莪嬞嘚♀伤
                                </a>
                                <span>
                                    (198862007)
                                </span>
                            </p>
                            <em class="phb_rt_al ul ul08">
                            </em>
                        </div>
                    </div>
                    <div class="pht_rit_bg pht_con_1" id="wealth_7_box" style="display: block;">
                        <div class="ph_list_bm">
                            <div class="pht_tm_bd pht_tm_bd_bm">
                                <img class="sub_pmt1" src="/images/pai_hb08.png" width="40" height="39"/>
                                <div class="sub_ptm01 sub_ptm01_bm">
                                    <a href="javascript:void(0)">
                                        <img width="55" height="55" src="http://image.cache.xiu8.com/avatar/55/55/193791503.jpg?v=1457531399912"/>
                                    </a>
                                </div>
                                <div class="sub_ptm02 sub_ptm02_bm">
                                    <a href="javascript:void(0)" title="柴山一条狼、">
                                        柴山一条狼、
                                    </a>
                                    <span>
                                        ID：47261
                                    </span>
                                </div>
                                <em class="pbm_al ul ul17">
                                </em>
                            </div>
                        </div>
                        <div class="ph_list_bm">
                            <div class="pht_tm_bd pht_tm_bd_bm">
                                <img class="sub_pmt1" src="/images/pai_hb09.png" width="40" height="39"/>
                                <div class="sub_ptm01 sub_ptm01_bm">
                                    <a href="javascript:void(0)">
                                        <img width="55" height="55" src="http://image.cache.xiu8.com/avatar/55/55/176132879.jpg?v=1457862505970"/>
                                    </a>
                                </div>
                                <div class="sub_ptm02 sub_ptm02_bm">
                                    <a href="javascript:void(0)" title="HOHO.浅唱">
                                        HOHO.浅唱
                                    </a>
                                    <span>
                                        ID：520924759
                                    </span>
                                </div>
                                <em class="pbm_al ul ul17">
                                </em>
                            </div>
                        </div>
                        <div class="ph_list_bm">
                            <div class="pht_tm_bd pht_tm_bd_bm">
                                <img class="sub_pmt1" src="/images/pai_hb10.png" width="40" height="39"/>
                                <div class="sub_ptm01 sub_ptm01_bm">
                                    <a href="javascript:void(0)">
                                        <img width="55" height="55" src="http://image.cache.xiu8.com/avatar/55/55/198235321.jpg?v=1457407055934"/>
                                    </a>
                                </div>
                                <div class="sub_ptm02 sub_ptm02_bm">
                                    <a href="javascript:void(0)" title="茴香豆de逗">
                                        茴香豆de逗
                                    </a>
                                    <span>
                                        ID：48638
                                    </span>
                                </div>
                                <em class="pbm_al ul ul16">
                                </em>
                            </div>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                4
                            </p>
                            <p class="pub02">
                                <a href="javascript:void(0)" title="继续再继续">
                                    继续再继续
                                </a>
                                <span>
                                    (176257739)
                                </span>
                            </p>
                            <em class="phb_rt_al ul ul14">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                5
                            </p>
                            <p class="pub02">
                                <a href="javascript:void(0)" title="阎王已死·结发受长生">
                                    阎王已死·结发受长生
                                </a>
                                <span>
                                    (19981114)
                                </span>
                            </p>
                            <em class="phb_rt_al ul ul19">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                6
                            </p>
                            <p class="pub02">
                                <a href="javascript:void(0)" title="飞天舞鹏">
                                    飞天舞鹏
                                </a>
                                <span>
                                    (194388739)
                                </span>
                            </p>
                            <em class="phb_rt_al ul ul10">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                7
                            </p>
                            <p class="pub02">
                                <a href="javascript:void(0)" title="二猫﹏°作死豆丶">
                                    二猫﹏°作死豆丶
                                </a>
                                <span>
                                    (179576849)
                                </span>
                            </p>
                            <em class="phb_rt_al ul ul16">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                8
                            </p>
                            <p class="pub02">
                                <a href="javascript:void(0)" title="陆月初捌">
                                    陆月初捌
                                </a>
                                <span>
                                    (47093)
                                </span>
                            </p>
                            <em class="phb_rt_al ul ul19">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                9
                            </p>
                            <p class="pub02">
                                <a href="javascript:void(0)" title="雨之恋-慕容兰若">
                                    雨之恋-慕容兰若
                                </a>
                                <span>
                                    (197250330)
                                </span>
                            </p>
                            <em class="phb_rt_al ul ul08">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                10
                            </p>
                            <p class="pub02">
                                <a href="javascript:void(0)" title="莪嬞嘚♀伤">
                                    莪嬞嘚♀伤
                                </a>
                                <span>
                                    (198862007)
                                </span>
                            </p>
                            <em class="phb_rt_al ul ul08">
                            </em>
                        </div>
                    </div>
                    <div class="pht_rit_bg pht_con_2" id="wealth_30_box" style="display: none;">
                        <div class="ph_list_bm">
                            <div class="pht_tm_bd pht_tm_bd_bm">
                                <img class="sub_pmt1" src="/images/pai_hb08.png" width="40" height="39"/>
                                <div class="sub_ptm01 sub_ptm01_bm">
                                    <a href="javascript:void(0)">
                                        <img width="55" height="55" src="http://image.cache.xiu8.com/avatar/55/55/193791503.jpg?v=1457531399912"/>
                                    </a>
                                </div>
                                <div class="sub_ptm02 sub_ptm02_bm">
                                    <a href="javascript:void(0)" title="柴山一条狼、">
                                        柴山一条狼、
                                    </a>
                                    <span>
                                        ID：47261
                                    </span>
                                </div>
                                <em class="pbm_al ul ul17">
                                </em>
                            </div>
                        </div>
                        <div class="ph_list_bm">
                            <div class="pht_tm_bd pht_tm_bd_bm">
                                <img class="sub_pmt1" src="/images/pai_hb09.png" width="40" height="39"/>
                                <div class="sub_ptm01 sub_ptm01_bm">
                                    <a href="javascript:void(0)">
                                        <img width="55" height="55" src="http://image.cache.xiu8.com/avatar/55/55/198235321.jpg?v=1457407055934"/>
                                    </a>
                                </div>
                                <div class="sub_ptm02 sub_ptm02_bm">
                                    <a href="javascript:void(0)" title="茴香豆de逗">
                                        茴香豆de逗
                                    </a>
                                    <span>
                                        ID：48638
                                    </span>
                                </div>
                                <em class="pbm_al ul ul16">
                                </em>
                            </div>
                        </div>
                        <div class="ph_list_bm">
                            <div class="pht_tm_bd pht_tm_bd_bm">
                                <img class="sub_pmt1" src="/images/pai_hb10.png" width="40" height="39"/>
                                <div class="sub_ptm01 sub_ptm01_bm">
                                    <a href="javascript:void(0)">
                                        <img width="55" height="55" src="http://image.cache.xiu8.com/avatar/55/55/193968372.jpg?v=1453261077572"/>
                                    </a>
                                </div>
                                <div class="sub_ptm02 sub_ptm02_bm">
                                    <a href="javascript:void(0)" title="狗蛋的蓝羽">
                                        狗蛋的蓝羽
                                    </a>
                                    <span>
                                        ID：55305
                                    </span>
                                </div>
                                <em class="pbm_al ul ul18">
                                </em>
                            </div>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                4
                            </p>
                            <p class="pub02">
                                <a href="javascript:void(0)" title="“╰★╮东方笑╭★╯">
                                    “╰★╮东方笑╭★╯
                                </a>
                                <span>
                                    (51314)
                                </span>
                            </p>
                            <em class="phb_rt_al ul ul19">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                5
                            </p>
                            <p class="pub02">
                                <a href="javascript:void(0)" title="【果神】NB！屌丝甫">
                                    【果神】NB！屌丝甫
                                </a>
                                <span>
                                    (55129)
                                </span>
                            </p>
                            <em class="phb_rt_al ul ul18">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                6
                            </p>
                            <p class="pub02">
                                <a href="javascript:void(0)" title="猴子为你等待2">
                                    猴子为你等待2
                                </a>
                                <span>
                                    (48633)
                                </span>
                            </p>
                            <em class="phb_rt_al ul ul16">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                7
                            </p>
                            <p class="pub02">
                                <a href="javascript:void(0)" title="—Kの心">
                                    —Kの心
                                </a>
                                <span>
                                    (48640)
                                </span>
                            </p>
                            <em class="phb_rt_al ul ul15">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                8
                            </p>
                            <p class="pub02">
                                <a href="javascript:void(0)" title="大展司令">
                                    大展司令
                                </a>
                                <span>
                                    (48576)
                                </span>
                            </p>
                            <em class="phb_rt_al ul ul16">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                9
                            </p>
                            <p class="pub02">
                                <a href="javascript:void(0)" title="小鹿〃 瓶欧巴">
                                    小鹿〃 瓶欧巴
                                </a>
                                <span>
                                    (30268)
                                </span>
                            </p>
                            <em class="phb_rt_al ul ul17">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                10
                            </p>
                            <p class="pub02">
                                <a href="javascript:void(0)" title="小恩姑娘好哇塞">
                                    小恩姑娘好哇塞
                                </a>
                                <span>
                                    (5200916)
                                </span>
                            </p>
                            <em class="phb_rt_al ul ul16">
                            </em>
                        </div>
                    </div>
                </div>
            </div>
            <div class="paihang_top" style="margin-bottom:20px auto;">
                <div style="width:440px;" class="paihang_bm_lf" xmlns="http://www.w3.org/1999/html">
                    <div style="width: 270px;" class="pht_lover">
                        <img width="14" height="20" src="/images/pai_hb05.png"/>
                        <span>
                            魅力值榜
                        </span>
                        <a href="javascript:void(0)" class="rewards-link" onmouseover="xiuba.rank.showTips('charmValue',this)" onmouseout="xiuba.rank.closeTips();">
                            奖励说明
                        </a>
                    </div>
                    <div style="width: 270px;" class="pht_list pht_list_bm">
                        <a href="javascript:void(0)" class="pt_dd_line pt_active" id="charmValue_1" onmouseover="xiuba.rank.charmValueRank.showWeek(1,this);">
                            本周榜
                        </a>
                        <a href="javascript:void(0)" class="pt_dd_line" id="charmValue_7" onmouseover="xiuba.rank.charmValueRank.showWeek(7,this);">
                            上周榜
                        </a>
                        <a href="javascript:void(0)" class="pt_dd_line" id="charmValue_30" onmouseover="xiuba.rank.charmValueRank.showWeek(30,this);">
                            总榜
                        </a>
                    </div>
                    <div class="pht_rit_bg pht_con_0" id="charmValue_1_box">
                        <div class="ph_list_bm">
                            <div class="pht_tm_bd pht_tm_bd_bm">
                                <img class="sub_pmt1" src="/images/pai_hb08.png" width="40" height="39"/>
                                <div class="sub_ptm01 sub_ptm01_bm">
                                    <a href="/927458" target="_blank">
                                        <img width="55" height="55" src="http://image.cache.xiu8.com/avatar/55/55/927458.jpg?v=1"/>
                                    </a>
                                </div>
                                <div class="sub_ptm02 sub_ptm02_bm">
                                    <a href="/927458" target="_blank" title="ヾ☆We、嘚瑟-乖">
                                        ヾ☆We、嘚瑟-乖
                                    </a>
                                    <span>
                                        魅力值：2012
                                    </span>
                                    <span>
                                        房号：927458
                                    </span>
                                </div>
                                <em class="pbm_al al al15">
                                </em>
                            </div>
                        </div>
                        <div class="ph_list_bm">
                            <div class="pht_tm_bd pht_tm_bd_bm">
                                <img class="sub_pmt1" src="/images/pai_hb09.png" width="40" height="39"/>
                                <div class="sub_ptm01 sub_ptm01_bm">
                                    <a href="/926255" target="_blank">
                                        <img width="55" height="55" src="http://image.cache.xiu8.com/avatar/55/55/926255.jpg?v=1"/>
                                    </a>
                                </div>
                                <div class="sub_ptm02 sub_ptm02_bm">
                                    <a href="/926255" target="_blank" title="妖妖、、默">
                                        妖妖、、默
                                    </a>
                                    <span>
                                        魅力值：1882
                                    </span>
                                    <span>
                                        房号：926255
                                    </span>
                                </div>
                                <em class="pbm_al al al20">
                                </em>
                            </div>
                        </div>
                        <div class="ph_list_bm">
                            <div class="pht_tm_bd pht_tm_bd_bm">
                                <img class="sub_pmt1" src="/images/pai_hb10.png" width="40" height="39"/>
                                <div class="sub_ptm01 sub_ptm01_bm">
                                    <a href="/91389" target="_blank">
                                        <img width="55" height="55" src="http://image.cache.xiu8.com/avatar/55/55/926634.jpg?v=1"/>
                                    </a>
                                </div>
                                <div class="sub_ptm02 sub_ptm02_bm">
                                    <a href="/91389" target="_blank" title="混血大敏姑娘新主播呀">
                                        混血大敏姑娘新主播呀
                                    </a>
                                    <span>
                                        魅力值：1694
                                    </span>
                                    <span>
                                        房号：91389
                                    </span>
                                </div>
                                <em class="pbm_al al al25">
                                </em>
                            </div>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                4
                            </p>
                            <p class="pub02">
                                <a href="/91888" target="_blank" title="逗比少女笑笑思密达">
                                    逗比少女笑笑思密达
                                </a>
                                <span>
                                    (91888)
                                </span>
                            </p>
                            <em class="phb_rt_al al al30">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                5
                            </p>
                            <p class="pub02">
                                <a href="/927574" target="_blank" title="野生の妖后er">
                                    野生の妖后er
                                </a>
                                <span>
                                    (927574)
                                </span>
                            </p>
                            <em class="phb_rt_al al al17">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                6
                            </p>
                            <p class="pub02">
                                <a href="/928020" target="_blank" title="十七要瘦瘦瘦~">
                                    十七要瘦瘦瘦~
                                </a>
                                <span>
                                    (928020)
                                </span>
                            </p>
                            <em class="phb_rt_al al al17">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                7
                            </p>
                            <p class="pub02">
                                <a href="/57888" target="_blank" title="辉煌☆宝贝钰儿☆">
                                    辉煌☆宝贝钰儿☆
                                </a>
                                <span>
                                    (57888)
                                </span>
                            </p>
                            <em class="phb_rt_al al al19">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                8
                            </p>
                            <p class="pub02">
                                <a href="/50009" target="_blank" title="咕咕、不弃不离吗？">
                                    咕咕、不弃不离吗？
                                </a>
                                <span>
                                    (50009)
                                </span>
                            </p>
                            <em class="phb_rt_al al al23">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                9
                            </p>
                            <p class="pub02">
                                <a href="/926330" target="_blank" title="混血。薄荷大小姐">
                                    混血。薄荷大小姐
                                </a>
                                <span>
                                    (926330)
                                </span>
                            </p>
                            <em class="phb_rt_al al al19">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                10
                            </p>
                            <p class="pub02">
                                <a href="/92916" target="_blank" title="小岩stay">
                                    小岩stay
                                </a>
                                <span>
                                    (92916)
                                </span>
                            </p>
                            <em class="phb_rt_al al al15">
                            </em>
                        </div>
                    </div>
                </div>
                <div class="paihang_bm_cf" style="width:360px;">
                    <div style="width:360px;" class="pht_lover">
                        <img width="18" height="20" src="/images/pai_hb06.png"/>
                        <span>
                            头条榜
                        </span>
                        <a href="javascript:void(0)" class="rewards-link" onmouseover="xiuba.rank.showTips('topline',this)" onmouseout="xiuba.rank.closeTips();">
                            奖励说明
                        </a>
                    </div>
                    <div style="width:360px;" class="pht_list pht_list_bm">
                        <a href="javascript:void(0)" class="pt_dd_line pt_active" id="topline_1" onmouseover="xiuba.rank.toplineRank.showDays(1,this);">
                            今日主播
                        </a>
                        <a href="javascript:void(0)" class="pt_dd_line" id="topline_7" onmouseover="xiuba.rank.toplineRank.showDays(7,this);">
                            今日土豪
                        </a>
                        <a href="javascript:void(0)" class="pt_dd_line" id="topline_30" onmouseover="xiuba.rank.toplineRank.showDays(30,this);">
                            昨日主播
                        </a>
                        <a href="javascript:void(0)" class="pt_dd_line" id="topline_110" onmouseover="xiuba.rank.toplineRank.showDays(110,this);">
                            昨日土豪
                        </a>
                    </div>
                    <div class="pht_rit_bg pht_con_0" id="topline_1_box">
                        <div class="ph_list_bm">
                            <div class="pht_tm_bd pht_tm_bd_bm">
                                <img class="sub_pmt1" src="/images/pai_hb08.png" width="40" height="39"/>
                                <div class="sub_ptm01 sub_ptm01_bm">
                                    <a href="/91888" target="_blank">
                                        <img width="55" height="55" src="http://image.cache.xiu8.com/avatar/55/55/924780.jpg?v=1"/>
                                    </a>
                                </div>
                                <div class="sub_ptm02 sub_ptm02_bm">
                                    <a href="/91888" target="_blank" title="逗比少女笑笑思密达">
                                        逗比少女笑笑思密达
                                    </a>
                                    <span>
                                        次数：7
                                    </span>
                                    <span>
                                        房号：91888
                                    </span>
                                </div>
                                <em class="pbm_al al al30">
                                </em>
                            </div>
                        </div>
                        <div class="ph_list_bm">
                            <div class="pht_tm_bd pht_tm_bd_bm">
                                <img class="sub_pmt1" src="/images/pai_hb09.png" width="40" height="39"/>
                                <div class="sub_ptm01 sub_ptm01_bm">
                                    <a href="/924759" target="_blank">
                                        <img width="55" height="55" src="http://image.cache.xiu8.com/avatar/55/55/924759.jpg?v=1"/>
                                    </a>
                                </div>
                                <div class="sub_ptm02 sub_ptm02_bm">
                                    <a href="/924759" target="_blank" title="混血°HOHO.糊糊">
                                        混血°HOHO.糊糊
                                    </a>
                                    <span>
                                        次数：5
                                    </span>
                                    <span>
                                        房号：924759
                                    </span>
                                </div>
                                <em class="pbm_al al al23">
                                </em>
                            </div>
                        </div>
                        <div class="ph_list_bm">
                            <div class="pht_tm_bd pht_tm_bd_bm">
                                <img class="sub_pmt1" src="/images/pai_hb10.png" width="40" height="39"/>
                                <div class="sub_ptm01 sub_ptm01_bm">
                                    <a href="/926255" target="_blank">
                                        <img width="55" height="55" src="http://image.cache.xiu8.com/avatar/55/55/926255.jpg?v=1"/>
                                    </a>
                                </div>
                                <div class="sub_ptm02 sub_ptm02_bm">
                                    <a href="/926255" target="_blank" title="妖妖、、默">
                                        妖妖、、默
                                    </a>
                                    <span>
                                        次数：4
                                    </span>
                                    <span>
                                        房号：926255
                                    </span>
                                </div>
                                <em class="pbm_al al al20">
                                </em>
                            </div>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                4
                            </p>
                            <p class="pub02">
                                <a href="/928554" target="_blank" title="雨之恋-睡神小雨">
                                    雨之恋-睡神小雨
                                </a>
                                <span>
                                    (928554)
                                </span>
                            </p>
                            <em class="pbm_al al al17">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                5
                            </p>
                            <p class="pub02">
                                <a href="/929785" target="_blank" title="  倩倩    ╮">
                                    倩倩    ╮
                                </a>
                                <span>
                                    (929785)
                                </span>
                            </p>
                            <em class="pbm_al al al13">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                6
                            </p>
                            <p class="pub02">
                                <a href="/927684" target="_blank" title=" ╋う假面灬汤姆半岁">
                                    ╋う假面灬汤姆半岁
                                </a>
                                <span>
                                    (927684)
                                </span>
                            </p>
                            <em class="pbm_al al al17">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                7
                            </p>
                            <p class="pub02">
                                <a href="/928117" target="_blank" title="瑶瑶、开心开心哈哈哈">
                                    瑶瑶、开心开心哈哈哈
                                </a>
                                <span>
                                    (928117)
                                </span>
                            </p>
                            <em class="pbm_al al al14">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                8
                            </p>
                            <p class="pub02">
                                <a href="/927029" target="_blank" title="混血 酱儿酱er">
                                    混血 酱儿酱er
                                </a>
                                <span>
                                    (927029)
                                </span>
                            </p>
                            <em class="pbm_al al al22">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                9
                            </p>
                            <p class="pub02">
                                <a href="/927974" target="_blank" title="Dream-二猫">
                                    Dream-二猫
                                </a>
                                <span>
                                    (927974)
                                </span>
                            </p>
                            <em class="pbm_al al al18">
                            </em>
                        </div>
                        <div class="phb_usb01 phb_usb01_rt">
                            <p class="pub01">
                                10
                            </p>
                            <p class="pub02">
                                <a href="/928464" target="_blank" title="你好，我是pp">
                                    你好，我是pp
                                </a>
                                <span>
                                    (928464)
                                </span>
                            </p>
                            <em class="pbm_al al al18">
                            </em>
                        </div>
                    </div>
                </div>
            </div>
            <div id="tips" class="pbg_jl_bg" style="left: 660px; top: 1638px; display: none;">
                <div class="pbg_jl_y">
                    <h2 id="tips_title">
                        主播榜
                    </h2>
                    <var id="tips_content">
                        <p style="padding-bottom:20px; font-size:13px;">
                            <strong>
                                收到礼物价值最多的主播将获得如下奖励：
                            </strong>
                        </p>
                        <p>
                        </p>
                        <p>
                            日榜：第一名获得 日榜女神勋章一天
                        </p>
                        <p>
                        </p>
                        <p>
                            周榜：第一名获得 周榜女神勋章一周
                        </p>
                        <p>
                        </p>
                        <p>
                            月榜：第一名获得 月榜女神勋章一月
                        </p>
                        <p>
                        </p>
                    </var>
                </div>
            </div>
        </div>
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