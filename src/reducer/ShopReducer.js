export const ShopReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_ORDER": {
			const indexItem = state.orderedItems.findIndex(
				(item) => item.id === action.payload.id
			);

			if (indexItem !== -1) {
				return {
					...state,
					orderedItems: state.orderedItems.map((orderedItem, index) =>
						index === indexItem
							? {
									...orderedItem,
									quantity: orderedItem.quantity + 1,
							  }
							: orderedItem
					),
				};
			} else {
				const newOrderedItem = {
					id: action.payload.id,
					name: action.payload.name,
					price: action.payload.price,
					quantity: 1,
				};
				return {
					...state,
					orderedItems: [...state.orderedItems, newOrderedItem],
				};
			}
		}
		case "INCREASE_QUANTITY": {
			return {
				...state,
				orderedItems: state.orderedItems.map((orderedItem) =>
					orderedItem.id === action.payload
						? {
								...orderedItem,
								quantity: orderedItem.quantity + 1,
						  }
						: orderedItem
				),
			};
		}
		case "DECREASE_QUANTITY": {
			return {
				...state,
				orderedItems: state.orderedItems.map((orderedItem) =>
					orderedItem.id === action.payload
						? {
								...orderedItem,
								quantity: orderedItem.quantity - 1,
						  }
						: orderedItem
				),
			};
		}
		case "REMOVE_ITEM_FROM_CART": {
			return {
				...state,
				orderedItems: state.orderedItems.filter(
					(item) => item.id !== action.payload
				),
			};
		}
		case "TOGGLE_CART": {
			return { ...state, isShowCart: !state.isShowCart };
		}
		case "SET_MESSAGE": {
			return { ...state, alertMessage: action.payload };
		}
		case "SET_LOADING": {
			return { ...state, loading: action.payload };
		}
		case "SEND_ORDER": {
			return { ...state, orderedItems: action.payload };
		}

		default:
			return state;
	}
};
