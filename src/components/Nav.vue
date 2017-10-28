<template>
	<nav class="navbar">
			<router-link to="/index" class="item" active-class="active"><i class="icon icon-index"></i></router-link>
			<router-link  to="/cart" class="item" active-class="active">
				<i class="icon icon-cart"></i>
				<i class="item-count" v-if="cart.length">{{ cart.length }}</i>
			</router-link>
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
.navbar {
	position:fixed;
	bottom:0;
	width:100%;
	height: 1.4rem;
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
	width:.8rem;
	height:.8rem;
	background: url('../../static/img/icon.png') no-repeat;
	background-size: 100% auto;
	line-height: 80px;
}

.navbar .item .icon-index {
	background-position:0 0;
}

.navbar .item.active .icon-index {
	background-position:0 -.8rem;
}

.navbar .item .icon-cart {
	background-position:0 -1.6rem;
}
.navbar .item.active .icon-cart {
	background-position:0 -2.4rem;
}

.navbar .item-count{
	display: block;
	width: .45rem;
	height: .45rem;
	border-radius: .5rem;
	background: #4984ef;
	position: absolute;
	right:-.24rem;
	top:-.1rem;
	font-style: normal;
	text-align: center;
	color: #fff;
	font-size: .32rem;
	line-height: .45rem;
}

</style>