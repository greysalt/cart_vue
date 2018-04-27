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
			if ( toPath == '/home/detail'){
				this.transName = 'slide-left'; 
			}else if( toPath == '/home' && fromPath == '/home/detail'){
				this.transName = 'slide-right';
			}
		}
	}
}
</script>
<template>
	<transition :name="transName" v-on:after-enter="afterEnter">
		<router-view class="view-home"></router-view>
	</transition>
</template>
<style>
.view-home {
	position: absolute;
}
	
</style>