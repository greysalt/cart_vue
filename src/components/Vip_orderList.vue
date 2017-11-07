<script>
export default {
	computed:{
		orderList:function(){
			return this.$store.state.orderList;
		},
	},
	methods:{
		removeOrder:function(list){
			this.$store.commit('removeOrder',list);
		}

	},
}
</script>
<template>
	<div class="orderList">
		<div class="header">	
					<router-link to="/vip">
						<span class="return">&lt;</span>
					</router-link>
					<span class="title">我的订单</span>
		</div>
		<div class="list">
			<ul>
				<li class="list-item" 
				v-for="(list,index) in orderList">
					<div class="list-head">
						订单{{ index+1 }}
						<div class="remove-box">	
							<span class="remove" @click="removeOrder(list)">删除订单</span>
						</div>
					</div>
					<div class="list-bd">
						<ul>
							<li 
								v-for="item in list.items"
								v-bind:key="item.id">
								<div class="img-box">
									<img :src="item.imgUrl">
								</div>
								<div class="info">
									<span class="name">{{ item.name }}</span>
									<br>
									<span class="type">{{ item.type }}</span>&nbsp;x1
										
								</div>
								<span class="price">￥{{ item.price }}</span>
								<div class="clear"></div>		
							</li>
							
						</ul>
						<div class="list-foot">
							共 <i>{{ list.items.length }}</i> 件商品，总计：<i>￥{{ list.totalPrice }}</i>
						</div>
					</div>
					
				</li>
			</ul>

			<div v-if="!orderList.length" class="empty-list">
				<span>
					暂无订单
				</span>
				
			</div>
		</div>
	</div>
</template>
<style>
	.orderList{
		position: absolute;
		width: 100%;
		padding-bottom: 16rem;
		background: #fff;
	}
	.orderList .header{
		height: 5rem;
		background: #ddd;
		border-bottom: 1px solid #ccc;
		padding: 1.6rem 2rem 0 2rem;
		position: fixed;
		width: 100%;
		top:0;
		z-index: 666;
		text-align: center;
		color: #999;
	}
	.header .return {
		display: block;
		float: left;
		font-family: ariel;
		color: #999;
	}

	.orderList .list{
		padding-top:5rem;
		width: 100%;
	}

	.orderList .list .list-item{
		margin-top:1rem;
	}

	.orderList .list-head{
		padding: 0 2rem;
		height: 3rem;
		line-height: 3rem;
		background: #f2f2f2;
		color: #4984ef;
	}
	.orderList .list-head .remove-box{
		display: block;
		float: right;
		line-height: 3rem;
	}

	
	.orderList .list-head .remove{		
		color: #ccc;
		border:1px solid #ccc;
		font-size:1.2rem;
		padding:.3rem .5rem;
		border-radius:.4rem;
		cursor: pointer;
	}

	.orderList .list-head .remove:active{
		background: #ddd;
	}

	.orderList .list-bd{
		padding: 0 2rem;
/*		border-bottom: 1px solid #ddd;*/
	}

	.orderList .list-bd li{
		padding:1rem 0;
		border-bottom: 1px solid #ddd;

	}

	.orderList .list-bd .img-box{
		width: 5rem;
		height: 5rem;
		float: left;
		text-align: center;
	}

	.orderList .list-bd .price{
		float: right;

	}

	.orderList .list-bd .info{
		margin-left:.5rem;
		float: left;
		line-height: 2rem;
	}
	.orderList .list-bd .type{
		padding: .2rem .6rem;
		border-radius: 0.4rem;
		border: 1px solid #4984ef;
		color: #4984ef;
		font-size:1.2rem;
	}
	

	.orderList .list-foot{
		text-align: right;
		padding:1rem 0 2rem;
	}

	.orderList .list-foot i{
		color: #4984ef;
		font-style: normal;
	}

	.orderList .empty-list{
		padding: 2rem 2rem 0;
		text-align: center;
	}
	
	.orderList .empty-list span{
		display: block;
		height: 20rem;
		line-height: 20rem;
		border:2px dashed #ddd;
		border-radius: .4rem;
		color: #999;
	}


</style>
