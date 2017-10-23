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
			'银色': './static/img/ipad-silver.png',
			'金色': './static/img/ipad-gold.png',
			'深空灰': './static/img/ipad-spacegray.png'
		},
		activeStyleUrl: './static/img/ipad-silver.png',
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
