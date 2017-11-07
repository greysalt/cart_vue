<script>
export default{
	computed:{
		orderCount:function(){
			return this.$store.state.orderList.length;
		},
	},
}

</script>
<template>
		<div class="vip-container vip">
			<div class="head">
				<div class="portrait">
				</div>
				<div class="user-id">USER ID</div>
			</div>
			<div class="menu">
				<ul>
					<li>
						<i class="icon icon-collection"></i>
						<span>我的收藏</span>
						<span class="icon-arrow">&gt;</span>
					</li>
					<hr>
					<li>
						<router-link to="/vip/order-list" class="menu-link">
							
								<i class="icon icon-order"></i>
								<span>我的订单 <span class="order-count">({{ orderCount }})</span></span>
								<span class="icon-arrow">&gt;</span>
							
						</router-link>
					</li>					
					<hr>
					<li>
						<i class="icon icon-coupon"></i>
						<span>我的优惠券</span>
						<span class="icon-arrow">&gt;</span>
					</li>
					<hr>
					<li>
						<i class="icon icon-setup"></i>
						<span>账户设置</span>
						<span class="icon-arrow">&gt;</span>
					</li>
				</ul>
			</div>
		</div>
</template>

<style>
	.vip-container{
		position: absolute;
		width: 100%;
		height: 100%;
		background: #fff;
	}
	.vip .head{
		height: 20rem;
		background: #ddd;
		overflow: hidden;
		/*border-bottom: 1px solid #ccc;*/
	}
	.vip .portrait{
		height: 10rem;
		width:10rem;
		border-radius: 8rem;
		margin:3rem auto 2rem;
		background: url('/cart_vue/static/img/user.png') no-repeat;
		background-size:100% auto;
	}

	.vip .user-id {
		color: #4984ef;
		text-align: center;
	}

	.vip .menu{
		margin-top:2rem;
		border-top:1px solid #ddd;
		border-bottom:1px solid #ddd;
	}
	.vip .menu li{
		height: 5rem;
		line-height: 5rem;
		padding:0 2rem;
		background: #fff;
	}

	.vip .menu hr{
		margin-left: 2rem;
	}


	.vip .menu li:active{
		background:#f2f2f2;
	}

	.vip .menu .icon-arrow{
		display: block;
		float: right;
	}

	.vip .menu .icon{
		display:inline-block;
		height: 2rem;
		width: 2rem;
		vertical-align: middle;
		background: url('/cart_vue/static/img/icon.png') no-repeat;
		background-size: 100% auto;
		margin-right: .5rem;
	}

	.vip .menu .icon.icon-collection{
		background-position:0 -14rem;
	}

	.vip .menu .icon.icon-order{
		background-position:0 -16rem;
	}

	.vip .menu .icon.icon-coupon{
		background-position:0 -18rem;
	}

	.vip .menu .icon.icon-setup{
		background-position:0 -20rem;
	}

	.vip .menu .order-count{
		color: #4984ef;
	}

	.vip .menu .menu-link{
		display: block;
		width: 100%;
		height:100%;
	}

</style>
