<script></script>
<template>
	<div id="index">
		<div class="slide"></div>
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
#index .slide{
	height: 5rem;
	background: #ddd;
}
#index .item-list{
	margin-bottom: 1.4rem;
}

#index .item-list hr{
	margin-left:.5rem;
}

#index .item{
	padding: .3rem 0 .3rem .5rem;
}
#index .item:active{
	background: #f2f2f2;
}

#index .img-box {
	height: 4rem;
	width: 4rem;
	float: left;
	text-align: center;
}

#index .img-box.first{
	padding-top: .5rem;
}

#index .img-box img{
	max-width: 4rem;
	max-height: 4rem;
}

#index .name{
	line-height: 4rem;
	font-size: .5rem;
	margin-left:5rem;
	color: #666;

}
	
</style>