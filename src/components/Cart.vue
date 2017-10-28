<script>
import { mapMutations,mapState } from 'vuex'

export default {
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
		}
	},
	methods:{
		...mapMutations([
			'removeItem'
		])
		
		// removeItem: function(item){
		// 	this.$store.commit('removeItem',item);
		// }
	}
}
</script>

<template>
	<div class="cart-container">
		<div class="header">	
					<span class="title"> 购物车</span>
					<span class="price"><strong>总计：{{ totalPrice }}</strong></span>
		</div>
		<div class="cart">								
					<ul>
						<li class="cart-item"
							v-for="item in cart">
							<div class="img-box">
								<img :src="item.imgUrl">
							</div>
							<div class="item-detail">
								
								<span class="item-name">{{ item.name }}</span>
								<span class="item-type">{{ item.type }}</span>
								<span class="item-price text-strong"><strong>{{ item.price }}</strong></span>
								<span class="item-remove"
										@click="removeItem(item)"></span>
							</div>
							<div class="clear"></div>
						</li>
					</ul>
					<div class="empty-cart" v-if="!cart.length">购物车空空如也</div>
					<button class="btn btn-block" v-if="cart.length">结算</button>
				</div>
				
				
			</div>
			
		</div>
		
	</div>	
</template>

<style>
	.header{
		height: 5rem;
		background: #ddd;
		border-bottom: 1px solid #ccc;
		padding: 1.6rem 2rem 0 2rem;
		position: absolute;
		width: 100%;
		top:0;
		z-index: 999;
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
		margin-bottom:20rem;
		margin-top:3rem;
		padding: 2rem;
	}

	.cart ul {
		list-style: none;
		padding: 0;
		position: relative;
	}
	.cart li{
		position: relative;
		padding: 1em 0;
		border-bottom: 1px solid #ddd;
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
	.cart .item-detail span{
	}

	.item-name{
		display: block;
		margin-bottom: 1rem;
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
		position: absolute;
		top:1.4rem;
		right: 0;

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