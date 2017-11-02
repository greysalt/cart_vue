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
		},
		slideName_cart:function(){
			return this.$store.state.slideName_cart;
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
		},
		addSlideName: function(){
			this.$store.commit('addSlideName');
		},
		removeSlideName: function(){
			this.$store.commit('removeSlideName');
		}
	}


}
</script>

<template>
	<transition :name="slideName_cart">
	<div class="detail-item item">
		<div class="btn-back">
			<router-link to="/index">&lt;</router-link>
		</div>
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
	</transition>
</template>

<style>
	.btn-back{
		height: 3rem;
		width: 3rem;
		line-height: 2.9rem;
		background: #ddd;
		opacity: .5;
		position: absolute;
		top:2rem;
		left:2rem;
		text-align: center;
		font-size:2rem;
		border-radius: 4rem;
		font-family: ariel;
	}

	.btn-back:active{
		background: #aaa;

	}
	
	.detail-item.item{
		padding: 2rem;
		position: absolute;
		width: 100%;
		top:0;
		left:0;
		background: #fff;
		z-index: 888;
		padding-bottom: 15rem;
	}

	.item .gallery {
		text-align: center;
		margin-bottom: 2rem;
	}
	.item .gallery img {
		max-height: 16rem;
	}

	.detail .name {
		font-weight: lighter;
		margin-bottom: 1rem;
	}
	
	.options {
		margin:1rem 0;
		font-size: 1.4rem;
	}

	.options dl{
		position: relative;

	}

	.options dl.brief,.options dl.price{
		margin-bottom: 1rem;
	}
	.options dt{	
		width:5rem;
		color: #aaa;
		text-align: right;
		float:left;
	}
	.options dd{
		margin-left:5rem !important;
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
		padding: .6rem 1.2rem;
		margin-right: .5rem;
		border:2px solid #eee;
		border-radius: .4rem;
		cursor: pointer;
		margin-bottom: 1rem;
	}

	.option ul li:hover{
		border:2px solid #4984ef;
	}

	.option ul li.active{
		border:2px solid #4984ef;
	}

	.text-price{
		color: #4984ef;
	}

	.btn{
		font-size: 1.6rem;
		padding: 1rem 2rem;
		border-radius: .4rem;
	}
	.btn-block{
		width: 100%;
	}

</style>
