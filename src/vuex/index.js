import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)


const state = {
	iPad:{
		name: 'Apple iPad',
		desc: '9.7 英寸 Retina 显示屏、800 万像素摄像头、Touch ID 指纹识别传感器、轻至 469 克',
		price: '2688 - 4588',
		style: {
			'银色': 'https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/i/pa/ipad/wifi/ipad-wifi-select-silver-201703_GEO_CN?wid=470&hei=556&fmt=png-alpha&qlt=95&.v=1506556739835',
			'金色': 'https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/i/pa/ipad/wifi/ipad-wifi-select-gold-201703_GEO_CN?wid=470&hei=556&fmt=png-alpha&qlt=95&.v=1506556668980',
			'深空灰': 'https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/i/pa/ipad/wifi/ipad-wifi-select-spacegray-201703_GEO_CN?wid=470&hei=556&fmt=png-alpha&qlt=95&.v=1506556795031'
		},
		activeStyleUrl: 'https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/i/pa/ipad/wifi/ipad-wifi-select-silver-201703_GEO_CN?wid=470&hei=556&fmt=png-alpha&qlt=95&.v=1506556739835',
		activeStyle:'银色',
		storage: {
			'32GB': 2688,
			'128GB': 3488
		},
		connectivity: {
			'WLAN': 0,
			'WLAN+Cellular': 1100
		},
		totalType:{
			storage:'',
			connectivity:''
		}
					
	},
	iPhone:{
		name: 'Apple iPhone',
		desc: '全新的双面全玻璃设计,配备了有史以来最智能、最强大的芯片，还带来了简单便捷的无线充电',
		price: '2688 - 4588',
		style: {
			'银色': 'https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/silver/iphone8-silver-select-2017_AV1?wid=284&hei=578&fmt=png-alpha&qlt=80&.v=1503702839278',
			'金色': 'https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/gold/iphone8-gold-select-2017_AV1?wid=284&hei=578&fmt=png-alpha&qlt=80&.v=1503702839235',
			'深空灰': 'https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/spgray/iphone8-spgray-select-2017_AV1?wid=284&hei=578&fmt=png-alpha&qlt=80&.v=1503702840413'
		},
		activeStyleUrl: 'https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/silver/iphone8-silver-select-2017_AV1?wid=284&hei=578&fmt=png-alpha&qlt=80&.v=1503702839278',
		activeStyle:'银色',
		storage: {
			'64GB': 5888,
			'256GB': 7188
		},			
		totalType:{
			storage:''
		}

	},
	AppleWatch:{
		name: 'Apple Watch',
		desc: '9.7 英寸 Retina 显示屏、800 万像素摄像头、Touch ID 指纹识别传感器、轻至 469 克',
		price: '2588 - 3188',
		style: {
			'云雾灰': 'https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/4/2/42/alu/42-alu-silver-sport-fog-1up_GEO_CN?wid=470&hei=556&fmt=png-alpha&qlt=95&.v=1506623478118',
			'粉砂色': 'https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/4/2/42/alu/42-alu-gold-sport-pink-1up_GEO_CN?wid=470&hei=556&fmt=png-alpha&qlt=95&.v=1506621191805',
			'深空灰': 'https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/4/2/42/alu/42-alu-space-sport-gray-1up_GEO_CN?wid=470&hei=556&fmt=png-alpha&qlt=95&.v=1506623610568',
			'白色':'https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/4/2/42/stainless/42-stainless-sport-white-1up_GEO_CN?wid=470&hei=556&fmt=png-alpha&qlt=95&.v=1506623654745'
		},
		activeStyleUrl: 'https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/4/2/42/alu/42-alu-silver-sport-fog-1up_GEO_CN?wid=470&hei=556&fmt=png-alpha&qlt=95&.v=1506623478118',
		size: {
			'38毫米': 2588,
			'42毫米': 3888
		},
		connectivity: {
			'GPS': 0,
			'GPS+蜂窝网络': 600
		},
		activeStyle:'银色',
		totalType:{
			size:'',
			connectivity:''
		}			
	},
	cart:[]
}


export default new Vuex.Store({
	state,	
	mutations	
})
