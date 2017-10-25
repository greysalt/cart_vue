<script>

export default {
	computed: {
		iPad: function(){
			return this.$store.state.iPad;
		}
	},
	methods: {
		changeStyle: function(key){
			this.$store.commit('changeStyle',key);
		},
		changeStorage: function(key){
			this.$store.commit('changeStorage',key);
		},
		changeConnectivity: function(key){
			this.$store.commit('changeConnectivity',key);
		},
		addItem: function(){
			this.$store.commit('addItem');
		}
	}


}
</script>

<template>
	<div class="container">
		<div class="gallery">
			<img  class="img-responsive" :src="iPad.activeStyleUrl">
		</div>
		<div class="detail">
			<h3 class="name">{{ iPad.name }}</h3>
			<hr>
			<div class="options">
				<dl class="brief">
					<dt>描述：</dt>
					<dd>{{ iPad.desc }}</dd>
				</dl>
				<dl class="price">
					<dt>价格：</dt>
					<dd class="text-price"><strong>￥{{ iPad.price }}</strong></dd>
				</dl>
				<dl class="option">
					<dt>外观：</dt>
					<dd>
						<ul>
							<li v-for="(value,key) in iPad.style"
								@click="changeStyle(key)"
								:class="{active:value == iPad.activeStyleUrl}"
							>{{ key }}</li>
						</ul>
					</dd>
					<dt>存储容量：</dt>
					<dd>
						<ul>
							<li v-for="(value,key) in iPad.storage"
								@click="changeStorage(key)"
								:class="{active: key == iPad.activeStorage}"
							>{{ key }}</li>
						</ul>
					</dd>
					<dt>连接：</dt>
					<dd>
						<ul>
							<li v-for="(value,key) in iPad.connectivity"
								@click="changeConnectivity(key)"
								:class="{active: key == iPad.activeConnectivity}"
							>{{ key }}</li>
						</ul>
					</dd>
				</dl>
			</div>
			<button class="btn btn-block"
					@click="addItem()"
					:disabled="!(iPad.activeConnectivity && iPad.activeStorage)">
			加入购物车</button>
		</div>							
	</div>	
</template>

<style>
	.container{
		margin-bottom:2rem;
		padding: .5rem;
	}

	.gallery {
		text-align: center;
		margin-bottom: .5rem;
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




	.option ul{
		list-style: none;
		padding:0;
	}

	.option ul li{
		display: inline-block;
		padding: .1rem .4rem;
		margin-right: .2rem;
		border:3px solid #eee;
		border-radius: .1rem;
		cursor: pointer;
	}

	.option ul li:hover{
		border:3px solid #4984ef;
	}

	.option ul li.active{
		border:3px solid #4984ef;
	}

	.text-price{
		color: #4984ef;
	}

	.btn{
		font-size:.4rem;
		padding: .2rem .4rem;
		border-radius: .1rem;
	}
	.btn-block{
		width: 100%;
		margin-top:.2rem;
	}



</style>
