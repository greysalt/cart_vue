<template>
	<nav class="navbar">
			<router-link to="/home" 
						class="item" 
						active-class="active"
						><i class="icon icon-index"></i></router-link>
			<router-link  to="/cart" class="item" active-class="active">
				<i class="icon icon-cart"></i>
				<i class="item-count" v-if="cart.length">{{ cart.length }}</i>
			</router-link>

			<router-link  to="/vip" class="item" active-class="active">
				<i class="icon icon-vip"></i>
			</router-link>
	</nav>		
</template>
<script>
import { mapState } from 'vuex'

export default {
	computed:
		mapState({
			cart: 'cart'
		}),
		
}
</script>
<style>
.navbar {
	position:fixed;
	bottom:0;
	width:100%;
	height: 5rem;
	background: #ddd;
	border-top: 1px solid #ccc;
	display: flex;
	justify-content: space-around;
	align-items: center;
	z-index: 999;
}

.navbar .item {
	position: relative;
}

.navbar .icon{
	display: block;
	width:3rem;
	height:3rem;
	background: url('/static/img/icon.png') no-repeat;
	background-size: 100% auto;
	line-height: 3rem;
}

.navbar .item .icon-index {
	background-position:0 0;
}

.navbar .item.active .icon-index {
	background-position:0 -3rem;
}

.navbar .item .icon-cart {
	background-position:0 -6rem;
}
.navbar .item.active .icon-cart {
	background-position:0 -9rem;
}

.navbar .item .icon-vip {
	background-position:0 -12rem;
}
.navbar .item.active .icon-vip {
	background-position:0 -15rem;
}

.navbar .item-count{
	display: block;
	width: 1.8rem;
	height: 1.8rem;
	border-radius: 2rem;
	background: #4984ef;
	position: absolute;
	right:-1rem;
	top:-0.2rem;
	font-style: normal;
	text-align: center;
	color: #fff;
	font-size: 1.6rem;
	line-height: 1.8rem;
	font-family: Univers,arial;
}

</style>