<style lang="less" scoped>
	@import (css) "../../styles/car.css";
</style>

<template>
	<div class="car-tab f-cb">
                    <h2>商城—座驾</h2>
                    <p class="amount">您的账户余额：<em class="num" id="carUserMoney">10</em> 秀币<a class="ml5 mr5 unl" onclick="xiuba.shopCar.gotoMyCar()">查看已有座驾</a> <a href="/order/readypay" target="_blank" class="btn">充值</a></p>
</div>
<div class="banner">
                    <img src="/images/shop-pic.jpg">
 </div>
 <div class="list">
 			                <div class="cap"><h3>经济座驾</h3>
                <span class="txt-tips">(经济实惠型座驾，价格低廉)</span>
	                </div>
                <ul class="f-cb">
                                    <li>
                        <div class="car-bg">
                            <img class="lazy" src="http://image.cache.xiu8.com/car/images/16.png" data-original="http://image.cache.xiu8.com/car/images/16.png" style="display: inline;">
                        </div>
                        <div class="t-bg">
                            <h5>
                            <i>进场动画</i>
                            奔驰SLK</h5>
                            <p>价格：<ins>80000</ins>秀币</p>
                            <p>                            </p><p class="btn-box">
                            	<a class="btn-buy" onclick="xiuba.shopCar.artWindow('logo/16.png','奔驰SLK','16')">购买</a> 
                            </p>
                        	
                        </div>
                    </li>
                    <li>
                        <div class="car-bg">
                            <img class="lazy" src="http://image.cache.xiu8.com/car/images/20.png" data-original="http://image.cache.xiu8.com/car/images/20.png" style="display: inline;">
                        </div>
                        <div class="t-bg">
                            <h5>
                            <i>进场动画</i>
                            甲壳虫</h5>
                            <p>价格：<ins>60000</ins>秀币</p>
                            <p>                            </p><p class="btn-box">
                            	<a class="btn-buy" onclick="xiuba.shopCar.artWindow('logo/20.png','甲壳虫','20')">购买</a> 
                            </p>
                        	
                        </div>
                    </li>
                    <li>
                        <div class="car-bg">
                            <img class="lazy" src="http://image.cache.xiu8.com/car/images/181.png" data-original="http://image.cache.xiu8.com/car/images/181.png" style="display: inline;">
                        </div>
                        <div class="t-bg">
                            <h5>
                            <i>进场动画</i>
                            青蛙王子</h5>
                            <p>价格：<ins>90000</ins>秀币</p>
                            <p>                            </p><p class="btn-box">
                            	<a class="btn-buy" onclick="xiuba.shopCar.artWindow('logo/181.png','青蛙王子','181')">购买</a> 
                            </p>
                        	
                        </div>
                    </li>
                    <li>
                        <div class="car-bg">
                            <img class="lazy" src="http://image.cache.xiu8.com/car/images/182.png" data-original="http://image.cache.xiu8.com/car/images/182.png" style="display: inline;">
                        </div>
                        <div class="t-bg">
                            <h5>
                            <i>进场动画</i>
                            光棍自行车</h5>
                            <p>价格：<ins>30000</ins>秀币</p>
                            <p>                            </p><p class="btn-box">
                            	<a class="btn-buy" onclick="xiuba.shopCar.artWindow('logo/182.png','光棍自行车','182')">购买</a> 
                            </p>
                        	
                        </div>
                    </li>
                    <li>
                        <div class="car-bg">
                            <img class="lazy" src="http://image.cache.xiu8.com/car/images/184.png" data-original="http://image.cache.xiu8.com/car/images/184.png" style="display: inline;">
                        </div>
                        <div class="t-bg">
                            <h5>
                            <i>进场动画</i>
                            李铁蛋（圣蛋）</h5>
                            <p>价格：<ins>50000</ins>秀币</p>
                            <p>圣诞节潜入秀吧的神秘物种，只在圣诞出现的绝版座驾                            </p><p class="btn-box">
                            	<a class="btn-buy" onclick="xiuba.shopCar.artWindow('logo/184.png','李铁蛋（圣蛋）','184')">购买</a> 
                            </p>
                        	
                        </div>
                    </li>
                </ul>
                <div class="cap"><h3>豪华座驾</h3>
                <span class="txt-tips">(彰显豪华型座驾，价格适中)</span>
	                </div>
                <ul class="f-cb">
                                    <li>
                        <div class="car-bg">
                            <img class="lazy" src="http://image.cache.xiu8.com/car/images/39.png" data-original="http://image.cache.xiu8.com/car/images/39.png" style="display: inline;">
                        </div>
                        <div class="t-bg">
                            <h5>
                            <i>进场动画</i>
                            玛莎拉蒂</h5>
                            <p>价格：<ins>250000</ins>秀币</p>
                            <p>                            </p><p class="btn-box">
                            	<a class="btn-buy" onclick="xiuba.shopCar.artWindow('logo/39.png','玛莎拉蒂','39')">购买</a> 
                            </p>
                        	
                        </div>
                    </li>
                    <li>
                        <div class="car-bg">
                            <img class="lazy" src="http://image.cache.xiu8.com/car/images/175.png" data-original="http://image.cache.xiu8.com/car/images/175.png" style="display: inline;">
                        </div>
                        <div class="t-bg">
                            <h5>
                            <i>进场动画</i>
                            超酷摩托</h5>
                            <p>价格：<ins>100000</ins>秀币</p>
                            <p>                            </p><p class="btn-box">
                            	<a class="btn-buy" onclick="xiuba.shopCar.artWindow('logo/175.png','超酷摩托','175')">购买</a> 
                            </p>
                        	
                        </div>
                    </li>
                    <li>
                        <div class="car-bg">
                            <img class="lazy" src="http://image.cache.xiu8.com/car/images/176.png" data-original="http://image.cache.xiu8.com/car/images/176.png" style="display: inline;">
                        </div>
                        <div class="t-bg">
                            <h5>
                            <i>进场动画</i>
                            坨坨</h5>
                            <p>价格：<ins>150000</ins>秀币</p>
                            <p>                            </p><p class="btn-box">
                            	<a class="btn-buy" onclick="xiuba.shopCar.artWindow('logo/176.png','坨坨','176')">购买</a> 
                            </p>
                        	
                        </div>
                    </li>
                    <li>
                        <div class="car-bg">
                            <img class="lazy" src="http://image.cache.xiu8.com/car/images/3.png" data-original="http://image.cache.xiu8.com/car/images/3.png" style="display: inline;">
                        </div>
                        <div class="t-bg">
                            <h5>
                            <i>进场动画</i>
                            兰博基尼</h5>
                            <p>价格：<ins>200000</ins>秀币</p>
                            <p>                            </p><p class="btn-box">
                            	<a class="btn-buy" onclick="xiuba.shopCar.artWindow('logo/3.png','兰博基尼','3')">购买</a> 
                            </p>
                        	
                        </div>
                    </li>
                    <li>
                        <div class="car-bg">
                            <img class="lazy" src="http://image.cache.xiu8.com/car/images/11.png" data-original="http://image.cache.xiu8.com/car/images/11.png" style="display: inline;">
                        </div>
                        <div class="t-bg">
                            <h5>
                            <i>进场动画</i>
                            劳斯莱斯幻影</h5>
                            <p>价格：<ins>400000</ins>秀币</p>
                            <p>                            </p><p class="btn-box">
                            	<a class="btn-buy" onclick="xiuba.shopCar.artWindow('logo/11.png','劳斯莱斯幻影','11')">购买</a> 
                            </p>
                        	
                        </div>
                    </li>
                </ul>
                <div class="cap"><h3>奢华座驾</h3>
                <span class="txt-tips">(顶级奢华型座驾，炫酷特效)</span>
	                </div>
                <ul class="f-cb">
                                    <li>
                        <div class="car-bg">
                            <img class="lazy" src="http://image.cache.xiu8.com/car/images/37.png" data-original="http://image.cache.xiu8.com/car/images/37.png" style="display: inline;">
                        </div>
                        <div class="t-bg">
                            <h5>
                            <i>进场动画</i>
                            诺亚方舟</h5>
                            <p>价格：<ins>600000</ins>秀币</p>
                            <p>                            </p><p class="btn-box">
                            	<a class="btn-buy" onclick="xiuba.shopCar.artWindow('logo/37.png','诺亚方舟','37')">购买</a> 
                            </p>
                        	
                        </div>
                    </li>
                    <li>
                        <div class="car-bg">
                            <img class="lazy" src="http://image.cache.xiu8.com/car/images/38.png" data-original="http://image.cache.xiu8.com/car/images/38.png" style="display: inline;">
                        </div>
                        <div class="t-bg">
                            <h5>
                            <i>进场动画</i>
                            太空战舰</h5>
                            <p>价格：<ins>600000</ins>秀币</p>
                            <p>                            </p><p class="btn-box">
                            	<a class="btn-buy" onclick="xiuba.shopCar.artWindow('logo/38.png','太空战舰','38')">购买</a> 
                            </p>
                        	
                        </div>
                    </li>
                    <li>
                        <div class="car-bg">
                            <img class="lazy" src="http://image.cache.xiu8.com/car/images/40.png" data-original="http://image.cache.xiu8.com/car/images/40.png" style="display: inline;">
                        </div>
                        <div class="t-bg">
                            <h5>
                            <i>进场动画</i>
                            幽灵战马</h5>
                            <p>价格：<ins>500000</ins>秀币</p>
                            <p>                            </p><p class="btn-box">
                            	<a class="btn-buy" onclick="xiuba.shopCar.artWindow('logo/40.png','幽灵战马','40')">购买</a> 
                            </p>
                        	
                        </div>
                    </li>
                    <li>
                        <div class="car-bg">
                            <img class="lazy" src="http://image.cache.xiu8.com/car/images/70.png" data-original="http://image.cache.xiu8.com/car/images/70.png" style="display: inline;">
                        </div>
                        <div class="t-bg">
                            <h5>
                            <i>进场动画</i>
                            神龙飞船</h5>
                            <p>价格：<ins>800000</ins>秀币</p>
                            <p>                            </p><p class="btn-box">
                            	<a class="btn-buy" onclick="xiuba.shopCar.artWindow('logo/70.png','神龙飞船','70')">购买</a> 
                            </p>
                        	
                        </div>
                    </li>
                </ul>
                <div class="cap"><h3>活动座驾</h3>
                <span class="txt-tips">(仅可通过活动获得的座驾)</span>
	                </div>
                <ul class="f-cb">
                                    <li>
                        <div class="car-bg">
                            <img class="lazy" src="http://image.cache.xiu8.com/car/images/14.png" data-original="http://image.cache.xiu8.com/car/images/14.png" style="display: inline;">
                        </div>
                        <div class="t-bg">
                            <h5>
                            <i>进场动画</i>
                            悍马</h5>
                            <p>价格：<ins>160000</ins>秀币</p>
                            <p>签到任务获得                            </p><p class="btn-box">
	                            	<span class="btn-gray">购买</span> 
                            </p>
                        	
                        </div>
                    </li>
                    <li>
                        <div class="car-bg">
                            <img class="lazy" src="http://image.cache.xiu8.com/car/images/17.png" data-original="http://image.cache.xiu8.com/car/images/17.png" style="display: inline;">
                        </div>
                        <div class="t-bg">
                            <h5>
                            宝马Z4</h5>
                            <p>价格：<ins>80000</ins>秀币</p>
                            <p>签到获得                            </p><p class="btn-box">
	                            	<span class="btn-gray">购买</span> 
                            </p>
                        	
                        </div>
                    </li>
                    <li>
                        <div class="car-bg">
                            <img class="lazy" src="http://image.cache.xiu8.com/car/images/19.png" data-original="http://image.cache.xiu8.com/car/images/19.png" style="display: inline;">
                        </div>
                        <div class="t-bg">
                            <h5>
                            哈雷摩托</h5>
                            <p>价格：<ins>50000</ins>秀币</p>
                            <p>新手任务获得                            </p><p class="btn-box">
	                            	<span class="btn-gray">购买</span> 
                            </p>
                        	
                        </div>
                    </li>
                    <li>
                        <div class="car-bg">
                            <img class="lazy" src="http://image.cache.xiu8.com/car/images/72.png" data-original="http://image.cache.xiu8.com/car/images/72.png" style="display: inline;">
                        </div>
                        <div class="t-bg">
                            <h5>
                            <i>进场动画</i>
                            独角兽</h5>
                            <p>价格：<ins>99999999</ins>秀币</p>
                            <p>参加一吐为快获得                            </p><p class="btn-box">
	                            	<span class="btn-gray">购买</span> 
                            </p>
                        	
                        </div>
                    </li>
                    <li>
                        <div class="car-bg">
                            <img class="lazy" src="http://image.cache.xiu8.com/car/images/150.png" data-original="http://image.cache.xiu8.com/car/images/150.png" style="display: inline;">
                        </div>
                        <div class="t-bg">
                            <h5>
                            <i>进场动画</i>
                            烈火战马</h5>
                            <p>价格：<ins>99999999</ins>秀币</p>
                            <p>骑士印记活动获得                            </p><p class="btn-box">
	                            	<span class="btn-gray">购买</span> 
                            </p>
                        	
                        </div>
                    </li>
                    <li>
                        <div class="car-bg">
                            <img class="lazy" src="http://image.cache.xiu8.com/car/images/163.png" data-original="http://image.cache.xiu8.com/car/images/163.png" style="display: inline;">
                        </div>
                        <div class="t-bg">
                            <h5>
                            <i>进场动画</i>
                            新人自行车</h5>
                            <p>价格：<ins>99999999</ins>秀币</p>
                            <p>新手任务获得                            </p><p class="btn-box">
	                            	<span class="btn-gray">购买</span> 
                            </p>
                        	
                        </div>
                    </li>
                    <li>
                        <div class="car-bg">
                            <img class="lazy" src="http://image.cache.xiu8.com/car/images/165.png" data-original="http://image.cache.xiu8.com/car/images/165.png" style="display: inline;">
                        </div>
                        <div class="t-bg">
                            <h5>
                            <i>进场动画</i>
                            小毛驴（首充专属）</h5>
                            <p>价格：<ins>1000000</ins>秀币</p>
                            <p>首充奖励                            </p><p class="btn-box">
	                            	<span class="btn-gray">购买</span> 
                            </p>
                        	
                        </div>
                    </li>
                    <li>
                        <div class="car-bg">
                            <img class="lazy" src="http://image.cache.xiu8.com/car/images/166.png" data-original="http://image.cache.xiu8.com/car/images/166.png" style="display: inline;">
                        </div>
                        <div class="t-bg">
                            <h5>
                            <i>进场动画</i>
                            英雄之剑</h5>
                            <p>价格：<ins>99999999</ins>秀币</p>
                            <p>山贼抢亲专属座驾                            </p><p class="btn-box">
	                            	<span class="btn-gray">购买</span> 
                            </p>
                        	
                        </div>
                    </li>
                    <li>
                        <div class="car-bg">
                            <img class="lazy" src="http://image.cache.xiu8.com/car/images/179.png" data-original="http://image.cache.xiu8.com/car/images/179.png" style="display: inline;">
                        </div>
                        <div class="t-bg">
                            <h5>
                            <i>进场动画</i>
                            阿凡达</h5>
                            <p>价格：<ins>999000</ins>秀币</p>
                            <p>周星奖励座驾                            </p><p class="btn-box">
	                            	<span class="btn-gray">购买</span> 
                            </p>
                        	
                        </div>
                    </li>
                    <li>
                        <div class="car-bg">
                            <img class="lazy" src="http://image.cache.xiu8.com/car/images/10.png" data-original="http://image.cache.xiu8.com/car/images/10.png" style="display: inline;">
                        </div>
                        <div class="t-bg">
                            <h5>
                            <i>进场动画</i>
                            法拉利California</h5>
                            <p>价格：<ins>300000</ins>秀币</p>
                            <p>首充礼包奖励                            </p><p class="btn-box">
	                            	<span class="btn-gray">购买</span> 
                            </p>
                        	
                        </div>
                    </li>
                </ul>
                <div class="cap"><h3>专属座驾</h3>
                <span class="txt-tips">(私人订制型座驾)</span>
	                </div>
                <ul class="f-cb">
                                    <li>
                        <div class="car-bg">
                            <img class="lazy" src="http://image.cache.xiu8.com/car/images/33.png" data-original="http://image.cache.xiu8.com/car/images/33.png" style="display: inline;">
                        </div>
                        <div class="t-bg">
                            <h5>
                            <i>进场动画</i>
                            劳斯莱斯守护</h5>
                            <p>价格：<ins>99999999</ins>秀币</p>
                            <p>守护专属座驾                            </p><p class="btn-box">
	                            	<span class="btn-gray">购买</span> 
                            </p>
                        	
                        </div>
                    </li>
                    <li>
                        <div class="car-bg">
                            <img class="lazy" src="http://image.cache.xiu8.com/car/images/155.png" data-original="http://image.cache.xiu8.com/car/images/155.png" style="display: inline;">
                        </div>
                        <div class="t-bg">
                            <h5>
                            <i>进场动画</i>
                            七彩祥云</h5>
                            <p>价格：<ins>99999999</ins>秀币</p>
                            <p>私人订制座驾                            </p><p class="btn-box">
	                            	<span class="btn-gray">购买</span> 
                            </p>
                        	
                        </div>
                    </li>
                    <li>
                        <div class="car-bg">
                            <img class="lazy" src="http://image.cache.xiu8.com/car/images/156.png" data-original="http://image.cache.xiu8.com/car/images/156.png" style="display: inline;">
                        </div>
                        <div class="t-bg">
                            <h5>
                            <i>进场动画</i>
                            呆毛</h5>
                            <p>价格：<ins>99999999</ins>秀币</p>
                            <p>私人订制座驾                            </p><p class="btn-box">
	                            	<span class="btn-gray">购买</span> 
                            </p>
                        	
                        </div>
                    </li>
                </ul>
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