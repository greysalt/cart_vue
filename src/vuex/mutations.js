const mutations = {

		changeStyle(state,payload){
			let itemName = payload.itemName;
			state[itemName].activeStyle = payload.key;
			state[itemName].activeStyleUrl = state[itemName].style[payload.key];

		},
		changeStorage(state,payload){
			let itemName = payload.itemName;
			let storageKey = payload.key;  	
			state[itemName].totalType.storage = storageKey;					
		},
		changeConnectivity(state,payload){
			let itemName = payload.itemName;
			let connectivityKey = payload.key;			
			state[itemName].totalType.connectivity = connectivityKey;
		},
		changeSize(state,payload){
			let itemName = payload.itemName;
			let sizeKey = payload.key;			
			state[itemName].totalType.size = sizeKey;
		},
		addItem(state,payload){
			let totalType = state[payload.itemName].totalType;
			let type='';
			for (let key in totalType){
				type = type + totalType[key] + ','; 
			}
			type = type.slice(0,-1);
			const cartInfo = {
				name:state[payload.itemName].name,
				type: type,
				price: payload.itemPrice,
				imgUrl: state[payload.itemName].activeStyleUrl
			};
			state.cart.push(cartInfo);
		},
		removeItem(state,item){
			state.cart.splice(state.cart.indexOf(item),1);
		}
}

export default mutations