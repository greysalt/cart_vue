<script>
export default {
	data(){
		return{
			transName:'',
		}
	},
	methods:{
		afterEnter:function(el){
			this.transName = '';
		}

	},
	watch:{
		'$route'(to,from){			
			let toPath = to.path;
			let fromPath = from.path;
			if ( toPath == '/vip/order-list'){
				this.transName = 'slide-left'; 
			}else if( toPath == '/vip' && fromPath == '/vip/order-list'){
				this.transName = 'slide-right';
			}
		}
	}
}
</script>
<template>
	<transition :name="transName" v-on:afterEnter="afterEnter">
		<router-view clall="view-vip"></router-view>
	</transition>
</template>
<style>
.view-vip {
	position: absolute;
}
	
</style>