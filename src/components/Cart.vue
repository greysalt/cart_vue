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
	<div>
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
		height: 1.4rem;
		background: #ddd;
		border-bottom: 1px solid #ccc;
		padding: .5rem .5rem 0 .5rem;
		position: fixed;
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
		margin:1rem 0;
		height: 4rem;
		border:5px dashed #ddd;
		border-radius: .2rem;
		text-align: center;
		line-height: 4rem;
		color: #999;
	}

	.cart{
		margin-bottom:2rem;
		margin-top:1rem;
		padding: .5rem;
		font-size: .36rem;
	}

	.cart ul {
		list-style: none;
		padding: 0;
		position: relative;
	}
	.cart li{
		position: relative;
		padding: .5em 0;
		border-bottom: 1px solid #ddd;
	}


	.cart .img-box {
		width:1.6rem;
		height: 1.6rem;
		float: left;
		text-align: center;

	}
	.img-box img{
		width: auto;
		height: 100%;
	}

	.cart .item-detail{
		margin-left:1.8rem;
	}
	.cart .item-detail span{
	}

	.item-name{
		display: block;
		margin-bottom: .3rem;
	}
	.item-type{
		padding: .05rem .2rem;
		border-radius: .1rem;
		border: 1px solid #4984ef;
		color: #4984ef;
		font-size:.32rem;
	}
	.item-price {
		display: block;
		position: absolute;
		top:0.2rem;
		right: 0;

	}
	.item-remove{
		display: block;
		width: 40px;
		height: 40px;
		background: url("../../static/img/icon.png");
		background-position: 0 -520px;
		float: right;
		cursor: pointer;
	}

	.text-strong {
		color: #4984ef;
	}
/*	.btn{
		font-size:.4rem;
		padding: .3rem .4rem;
		border-radius: .1rem;
	}
	.btn-block{
		width: 100%;
		margin-top:.4rem;
	}*/
</style>