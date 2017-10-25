const mutations = {

		changeStyle(state,styleKey){
			state.iPad.activeStyle = styleKey;
			state.iPad.activeStyleUrl = state.iPad.style[styleKey];

		},
		changeStorage(state,storageKey){
			state.iPad.activeStorage = storageKey;
			const connectivityKey = state.iPad.activeConnectivity;
			if(connectivityKey) {
				state.iPad.price = state.iPad.storage[storageKey] + state.iPad.connectivity[connectivityKey]
			}
			
		},
		changeConnectivity(state,connectivityKey){
			state.iPad.activeConnectivity = connectivityKey;
			const storageKey = state.iPad.activeStorage;
			if(storageKey) {
				state.iPad.price = state.iPad.storage[storageKey] + state.iPad.connectivity[connectivityKey]
			} 
		},
		addItem(state){
			const type = state.iPad.activeStyle +','+ state.iPad.activeStorage +','+ state.iPad.activeConnectivity;
			const cartInfo = {
				name:state.iPad.name,
				type: type,
				price: state.iPad.price,
				imgUrl: state.iPad.activeStyleUrl
			};
			state.cart.push(cartInfo);
		},
		removeItem(state,item){
			state.cart.splice(state.cart.indexOf(item),1);
		}
}

export default mutations