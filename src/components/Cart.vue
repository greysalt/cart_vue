<script>
import { mapMutations,mapState } from 'vuex'

export default {
	data(){
		return {
			btnMove:false,
			btnMoveActive:false,
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
		}
	},
	methods:{
		// ...mapMutations([
		// 	'removeItem'
		// ])
		
		removeItem: function(item){
			this.$store.commit('removeItem',item);
		}, 

	},
	watch:{
		cart:function(){
			let count = this.cart.length;
			this.btnRemove.style.top = (count*9+7)+'rem';
		}
	},
	mounted:function(){
			let count = this.cart.length;
			this.btnRemove.style.top = (count*9+7)+'rem';
	}
	
}
</script>

<template>
	<transition name="fade">
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
			<button  class="btn btn-remove " 
						v-if="cart.length">结算</button>
		</div>
				
	</div>
	</transition>
			
		
	
</template>

<style>
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
		margin-bottom:10rem;
		padding: 5rem 2rem 0 2rem;
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
		height: 9rem;
		width: 100%;
	}


	.cart .img-box {
		width:6rem;
		height: 6rem;
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
	}

	.item-remove{
		display: block;
		width: 2rem;
		height: 2rem;
		background: url("../../static/img/icon.png");
		background-position: 0 -26rem;
		background-size:200% auto;
		float: right;
		cursor: pointer;
	}

	.text-strong {
		color: #4984ef;
	}

	


</style>