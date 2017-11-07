<script>
import Swiper from './Swiper'
export default {
	components:{
		'my-swiper':Swiper
	},
}
</script>
<template>
	<div id="index">
		<div class="slide">
			<my-swiper></my-swiper>
		</div>
		<div class="item-list">
			<ul>
				<li>
					<router-link :to="{name:'detail',query:{name:'iPhone'}}" tag="div" class="item">
							<a>
							<div class="img-box">
								<img src="https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-select-2017?wid=189&hei=376&fmt=png-alpha&qlt=95&.v=1504378258086">
							</div>
							<div class="name">
								iPhone
							</div>
							</a>	
					</router-link>
					<hr>
				</li>

				<li>
					<router-link :to="{name:'detail',query:{name:'iPad'}}" tag="div" class="item">
							<a>
							<div class="img-box first">
								<img src="https://images.apple.com/cn/ipad-9.7/images/overview/performance_medium_2x.png">
							</div>
							<div class="name">
								iPad
							</div>
							</a>	
					</router-link>
					<hr>
				</li>
				
				<li>
					<router-link :to="{name:'detail',query:{name:'AppleWatch'}}" tag="div" class="item">
							<a>
							<div class="img-box">
								<img src="https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/a/lu/alu/silver/alu-silver-sport-fog-2up_gps_varend_GEO_CN?wid=470&hei=556&fmt=png-alpha&qlt=95&.v=1506624054592">
							</div>
							<div class="name">
								Apple Watch
							</div>
							</a>	
					</router-link>
					<hr>
				</li>				
			</ul>
		</div>
	</div>
</template>
<style>
#index {
	position: absolute;
	background: #fff;
	width: 100%;
	z-index: 888;
}

#index .slide{
	position: relative;
	height:16rem;
	background: #fff; 
}

#index .item-list{
	margin-bottom: 5rem;
	margin-top:1rem;
}

#index .item-list hr{
	margin-left:2rem;
}

#index .item{
	padding: 1rem 0 1rem 2rem;
}
#index .item:active{
	background: #f2f2f2;
}

#index .img-box {
	height: 12rem;
	width: 12rem;
	float: left;
	text-align: center;
}

#index .img-box.first{
	padding-top: 2rem;
	overflow: hidden;
}

#index .img-box img{
	max-width: 12rem;
	max-height: 12rem;
}

#index .name{
	line-height: 12rem;
	font-size: 2rem;
	margin-left:14rem;
	color: #666;
}
	
</style>