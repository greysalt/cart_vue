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
	<div class="container">
		<div id="cart" class="cart col-sm-8 col-md-8 col-md-offset-2 col-sm-offset-2">
			<div class="panel panel-default">
				<div class="panel-heading">
					<span class="glyphicon glyphicon-shopping-cart text-muted"></span>
					<span class="text-muted"> 购物车</span>
					<span class="pull-right text-strong"><strong>总计：{{ totalPrice }}</strong></span>
				</div>
				<div class="panel-body">
					<ul>
						<li class="cart-item"
							v-for="item in cart">
							<span class="glyphicon glyphicon-remove-circle text-strong"
									@click="removeItem(item)"></span>
							<span>Apple iPad</span>
							<span class="item-type">{{ item.type }}</span>
							<span>x1</span>
							<span class="cart-price pull-right"><strong>{{ item.price }}</strong></span>
						</li>
					</ul>
				</div>
				<div class="panel-footer">
					<button class="btn btn-block btn-buy">结算</button>
				</div>
				
			</div>
			
		</div>
		
	</div>	
</template>

<style>
	.cart ul {
		list-style: none;
		padding: 0;
	}

	.cart li {
		padding: 4px 8px;
	}
	.btn-buy{
		background: #4984ef;
		color: #fff;
	}
	.btn-buy:hover{
		background: #316fe0;
		color: #fff;
	}

	.btn-buy:focus{
		background: #4984ef;
		color: #fff;
	}
	.item-type{
		padding: 2px 8px;
		border-radius: 4px;
		border: 1px solid #4984ef;
		color: #4984ef;
	}

	.cart-price,.text-strong {
		color: #4984ef;
	}
	.cart-item span{
		margin-right: 4px;

	}
</style>