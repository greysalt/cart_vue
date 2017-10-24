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
		<div class="row">
			<div class="col-md-8 col-sm-8 col-md-offset-2 col-sm-offset-2">
				<div class="row">
					<div class="gallery col-md-6 col-sm-6">
						<img  class="img-responsive" :src="iPad.activeStyleUrl">
					</div>
					<div class="detail col-md-6 col-sm-6">
						<h3 class="name">{{ iPad.name }}</h3>
						<hr>
						<div class="options">
							<dl class="brief dl-horizontal">
								<dt>描述：</dt>
								<dd>{{ iPad.desc }}</dd>
							</dl>
							<dl class="price dl-horizontal">
								<dt>价格：</dt>
								<dd class="text-danger"><strong>￥{{ iPad.price }}</strong></dd>
							</dl>
							<dl class="option dl-horizontal">
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
						<hr>
						<button class="btn btn-block btn-addToCart"
								@click="addItem()"
								:disabled="!(iPad.activeConnectivity && iPad.activeStorage)">
							<span class="glyphicon glyphicon-shopping-cart"></span> 加入购物车</button>
					</div>
				</div>
			</div>
		</div>							
	</div>	
</template>

<style>

	.btn-addToCart{
		background: #4984ef !important;
		color: #fff !important;
	}
	.btn-addToCart:hover{
		background: #316fe0 !important;
		color: #fff !important;
	}
	.btn-addToCart:focus{
		background: #316fe0 !important;
		color: #fff !important;
	}

	.options dt{	
		width:70px !important;
		color: #aaa !important;
		padding: 4px 0 !important;
	}

	.option dt{
		padding: 10px 0 !important;
	}

	.options dd{
		margin-left:70px !important;
		padding: 4px 0 !important;
	}

	.option ul{
		list-style: none !important;
		padding:0 !important;
	}

	.option ul li{
		display: inline-block;
		padding: 4px 8px;
		margin-right: 4px;
		border:2px solid #eee;
		border-radius: 4px;
		cursor: pointer;
	}

	.option ul li:hover{
		border:2px solid #4984ef;
	}

	.option ul li.active{
		border:2px solid #4984ef;
	}



</style>
