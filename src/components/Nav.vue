<template>
	<nav class="navbar navbar-default">
		<div class="navbar-header">
			<router-link class="navbar-brand" :to="{path:'/index'}">SHOPPING CART</router-link></div>
		<ul class="nav navbar-nav">
			<router-link tag="li" :to="{path:'/index'}" active-class="active"><a>IPHONE</a></router-link>
			<router-link tag="li" :to="{path:'/cart'}" active-class="active"><a>购物车 <span class="badge badge-info" v-if="cart.length">{{ cart.length }}</span></a></router-link>			
		</ul>
	</nav>		
</template>
<script>
import { mapState } from 'vuex'

export default {
	computed:
		mapState({
			cart: 'cart'
		})
		
}
</script>
<style>
.badge-info{
	background: #4984ef !important;
}
</style>