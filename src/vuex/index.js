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
		storage: {
			'32GB': 2688,
			'128GB': 3488
		},
		connectivity: {
			'WLAN': 0,
			'WLAN+Cellular': 1100
		},
		activeStyle:'银色',
		activeStorage:'',
		activeConnectivity:''			
	},
	cart:[]
}


export default new Vuex.Store({
	state,	
	mutations	
})
