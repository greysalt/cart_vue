<script>

export default {
	computed: {
		itemName:function(){ 
			return this.$route.query.name 
		},
		item: function(){

			return this.$store.state[this.itemName];
		},
		all_selected:function(){			
			let obj = this.item.totalType;
			let sta = true;
			for (let key in obj){
				if(!obj[key]){
					sta = false;
					break
				}
			}
			return sta;
		},
		itemPrice:function(){			
			if(this.all_selected){
				let obj = this.item.totalType;
				let price=0;
				let item = this.item;
				for (let key in obj) {
					price += item[key][obj[key]];
				}
				return price;
			}else{
				return this.item.price;
			}
		}
	},
	methods: {
		changeStyle: function(payload){
			this.$store.commit('changeStyle',payload);
		},
		changeStorage: function(payload){
			this.$store.commit('changeStorage',payload);
		},
		changeConnectivity: function(payload){
			this.$store.commit('changeConnectivity',payload);
		},
		changeSize:function(payload){
			this.$store.commit('changeSize',payload);
		},
		addItem: function(itemName){
			this.$store.commit('addItem',itemName);
		}
	}


}
</script>

<template>
	<div class="container item">
		<div class="gallery">
			<img  class="img-responsive" :src="item.activeStyleUrl">
		</div>
		<div class="detail">
			<h3 class="name">{{ item.name }}</h3>
			<hr>
			<div class="options">
				<dl class="brief">
					<dt>描述：</dt>
					<dd>{{ item.desc }}</dd>
				</dl>
				<dl class="price">
					<dt>价格：</dt>
					<dd class="text-price"><strong>￥{{ itemPrice }}</strong></dd>
				</dl>
				<div class="option">
					<dl>
						<dt>外观：</dt>
						<dd>
							<ul>
								<li v-for="(value,key) in item.style"
									@click="changeStyle({key,itemName})"
									:class="{active:value == item.activeStyleUrl}"
								>{{ key }}</li>
							</ul>
						</dd>
					</dl>
					<dl  v-if="item.storage">
						<dt>尺寸：</dt>
						<dd>
							<ul>
								<li v-for="(value,key) in item.storage"
									@click="changeStorage({key,itemName})"
									:class="{active: key == item.totalType.storage}"
								>{{ key }}</li>
							</ul>
						</dd>
					</dl>
					<dl  v-if="item.size">
						<dt>尺寸：</dt>
						<dd>
							<ul>
								<li v-for="(value,key) in item.size"
									@click="changeSize({key,itemName})"
									:class="{active: key == item.totalType.size}"
								>{{ key }}</li>
							</ul>
						</dd>
					</dl>
					<dl v-if="item.connectivity">
						<dt>连接：</dt>
						<dd>
							<ul>
								<li v-for="(value,key) in item.connectivity"
									@click="changeConnectivity({key,itemName})"
									:class="{active: key == item.totalType.connectivity}"
								>{{ key }}</li>
							</ul>
						</dd>
					</dl>
				</div>
			</div>
			<button class="btn btn-block"
					@click="addItem({itemName,itemPrice})"
					:disabled="!all_selected">
			加入购物车</button>
		</div>							
	</div>	
</template>

<style>
	.container.item{
		margin-bottom:2rem;
		padding: .5rem;
	}

	.item .gallery {
		text-align: center;
		margin-bottom: .5rem;
	}
	.item .gallery img {
		max-height: 5rem;
	}

	.detail .name {
		font-weight: lighter;
		margin-bottom: .2rem;
	}
	
	.options {
		margin:.2rem 0;
	}

	.options dl{
		position: relative;

	}
	.options dt{	
		width:2.2rem;
		color: #aaa;
		text-align: right;
		float:left;
		padding: .2rem 0;
	}
	.options dd{
		margin-left:2.4rem !important;
		padding: .2rem 0;
	}




	.option dd{
		padding-bottom: 0;

	}
	.option ul{
		list-style: none;
		padding:0;
	}

	.option ul li{
		display: inline-block;
		padding: .2rem .4rem;
		margin-right: .2rem;
		border:4px solid #eee;
		border-radius: .1rem;
		cursor: pointer;
		margin-bottom: .2rem;
	}

	.option ul li:hover{
		border:4px solid #4984ef;
	}

	.option ul li.active{
		border:4px solid #4984ef;
	}

	.text-price{
		color: #4984ef;
	}

	.btn{
		font-size:.4rem;
		padding: .3rem .4rem;
		border-radius: .1rem;
	}
	.btn-block{
		width: 100%;
		margin-top:.4rem;
	}



</style>
