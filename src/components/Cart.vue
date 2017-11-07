<script>
import { mapMutations,mapState } from 'vuex'

export default {
	data(){
		return {
			popupShow:false,
		}
	},

	computed:{
		...mapState([
			'cart'
		]),

		// cart: function(){
		// 	return this.$store.state.cart
		// },
		totalPrice: function(){
			let totalPrice = 0;
			let cart = this.cart;
			for (let i in cart){
				totalPrice += cart[i].price;
			}
			return totalPrice;
		},
		btnRemove:function(){
			return document.getElementById('btn-remove-box')
		},
	},
	methods:{
		// ...mapMutations([
		// 	'removeItem'
		// ])
		
		removeItem: function(item){
			this.$store.commit('removeItem',item);
		},
		addOrder:function(totalPrice){
			this.popupShow = true;
			let that = this;
			setTimeout(function(){
				that.popupShow = false;
			},3000);
			this.$store.commit('addOrder',totalPrice);
		} 

	},
	watch:{
		cart:function(){
			let count = this.cart.length;
			this.btnRemove.style.top = (count*10+7)+'rem';
		}
	},
	mounted:function(){
			let count = this.cart.length;
			this.btnRemove.style.top = (count*10+7)+'rem';
	}
	
}
</script>

<template>
	<div class="cart-container">
		<div class="header">	
					<span class="title"> 购物车</span>
					<span class="price"><strong>总计：￥{{ totalPrice }}</strong></span>
		</div>
		<div class="cart">								
			
			<transition-group name="list" tag="ul">
				<li class="cart-item list-item"
					v-for="item in cart"
					v-bind:key="item.id">
					<div class="img-box">
						<img :src="item.imgUrl">
					</div>
					<div class="item-detail">
						<span class="item-remove"
								@click="removeItem(item)"></span>
						<span class="item-name">{{ item.name }}</span>
						<span class="item-type">{{ item.type }}</span>
						<span class="item-price text-strong">￥{{ item.price }}</span>
					</div>
					<div class="clear"></div>
				</li>
			</transition-group>
			
			<transition name="fade">
				<div class="empty-cart" v-if="!cart.length">购物车空空如也</div>
			</transition>
				
		</div>

		<div id="btn-remove-box" class="btnbox btn-move-active">
			<button  class="btn btn-remove " v-if="cart.length" @click="addOrder(totalPrice)">结算</button>
		</div>
	<transition name="fade">
		<div class="popup" v-if="popupShow">
			您选择了 <span class="count">{{ cart.length }}</span> 件商品
			<br>
			已加入订单
		</div>
	</transition>
				
	</div>							
</template>

<style>
.popup{
	position: fixed;
	margin:auto;
	top:0;
	bottom: 0;
	left:0;
	right: 0;

	width: 16rem;
	height: 10rem;
	background: rgba(33,33,33,.9);
	text-align: center;
	border-radius: .4rem;
	line-height: 2.4rem;
	padding-top:3rem;
	color: #fff;
	z-index: 9999;
}

.popup .count {
	color: #4984ef;
	font-weight: bold;
}

.btnbox{
	width: 100%;
	position: absolute;
	top: 0;
	padding: 0 2rem;
}

.btn-remove{
	width: 100%;
	position: relative;
}

.btn-move-active{
		transition: all .8s;
}


	
	.cart-container{
		position: absolute;
		width: 100%;
		z-index: 666;
		background: #fff;
	}
	.header{
		height: 5rem;
		background: #ddd;
		border-bottom: 1px solid #ccc;
		padding: 1.6rem 2rem 0 2rem;
		position: fixed;
		width: 100%;
		top:0;
		z-index: 666;
	}
	.header .title{
		color: #999;

	}
	.header .price{
		float: right;
		color: #4984ef;
	}

	.empty-cart {
		margin:2rem 0;
		height: 20rem;
		border:2px dashed #ddd;
		border-radius: .4rem;
		text-align: center;
		line-height: 20rem;
		color: #999;
	}

	.cart{
		padding: 5rem 2rem 16rem 2rem;
	}

	.cart ul {
		list-style: none;
		padding: 0;
		position: relative;

	}
	.cart li{
		padding: 1em 0;
		border-bottom: 1px solid #ddd;
		background: #fff;
		height: 10rem;
		width: 100%;
	}


	.cart-item .img-box {
		width:7rem;
		height: 7rem;
		float: left;
		text-align: center;

	}
	.img-box img{
		width: auto;
		height: 100%;
	}

	.cart .item-detail{
		margin-left:6.5rem;
	}

	.item-name{
		display: block;
		margin-bottom: .4rem;
	}
	.item-type{
		padding: .2rem .6rem;
		border-radius: 0.4rem;
		border: 1px solid #4984ef;
		color: #4984ef;
		font-size:1.2rem;
	}

	.item-price {
		display: block;
		margin-top:.4rem;
		font-size: 1.6rem;
	}

	.item-remove{
		display: block;
		width: 2rem;
		height: 2rem;
		background: url("/cart_vue/static/img/icon.png");
		background-position: 0 -26rem;
		background-size:200% auto;
		float: right;
		cursor: pointer;
	}

	.text-strong {
		color: #4984ef;
	}

	


</style>