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
	background: #efefef;
	border-top: 1px solid #ddd;
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
	width:80px;
	height: 80px;
	background: url('../../static/img/icon.png') no-repeat;
	line-height: 80px;
}

.navbar .item .icon-index {
	background-position:0 0;
}

.navbar .item.active .icon-index {
	background-position:0 -80px;
}

.navbar .item .icon-cart {
	background-position:0 -160px;
}
.navbar .item.active .icon-cart {
	background-position:0 -240px;
}

.navbar .item-count{
	display: block;
	width: 46px;
	height: 46px;
	border-radius: 30px;
	background: #4984ef;
	position: absolute;
	right:-24px;
	top:-10px;
	font-style: normal;
	text-align: center;
	color: #fff;
	font-size: 32px;
	line-height: 46px;
}

</style>