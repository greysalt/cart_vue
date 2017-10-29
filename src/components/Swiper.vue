<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
require ('swiper/dist/css/swiper.css')

export default {
	data(){
		return {
			swiperOption:{
				notNextTick: true,
        autoplay:3000,
        autoplayDisableOnInteraction: false,
        pagination : '.swiper-pagination',
        paginationClickable :true,
        // prevButton:'.swiper-button-prev',
        // nextButton:'.swiper-button-next',
        loop: true,
        // scrollbar:'.swiper-scrollbar',
			}
		}
	},
	components:{
		swiper,
		swiperSlide
	}
}
</script>
<template>
	<swiper :options="swiperOption" ref="mySwiper" class="swiper-box">
				<swiper-slide class="swiper-item">
					<div class="item-box box1">
						<img src="https://images.apple.com/v/iphone-8/d/images/overview/primary/design_water_large.jpg">
					</div>					
				</swiper-slide>
				<swiper-slide class="swiper-item">
					<div class="item-box box2">
						<img src="https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/gallery1/iphone7-gallery1-2016?wid=835&hei=641&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1473278889824">
					</div>					
				</swiper-slide>
				<swiper-slide class="swiper-item">
					<div class="item-box box3">
						<img src="https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/gallery2/iphone7-gallery2-2016?wid=835&hei=641&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1473877132504">
					</div>					
				</swiper-slide>

				<div class="swiper-pagination"  slot="pagination"></div>
			</swiper>	
</template>

<style>
.swiper-box {
	height: 16rem;
	text-align: center;
}

.swiper-item img{
	height: 100%;
}

.swiper-item .item-box{
	height: 100%;
	width: 100%;
	overflow: hidden;
}

.item-box.box2,#index .item-box.box3{
	background:#000; 
}
</style>