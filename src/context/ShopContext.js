import { createContext, useReducer } from "react";
import { ShopReducer } from "../reducer/ShopReducer";

const initState = {
	goods: [],
	orderedItems: [],
	isShowCart: false,
	loading: false,
	alertMessage: "",
};

// Context
export const ShopContext = createContext();

// Provider
export const ShopContextProvider = ({ children }) => {
	const [context, dispatch] = useReducer(ShopReducer, initState);

	context.addToOrder = (id, name, price) => {
		dispatch({ type: "ADD_TO_ORDER", payload: { id, name, price } });
	};

	context.increaseQuantity = (id) => {
		dispatch({ type: "INCREASE_QUANTITY", payload: id });
	};

	context.decreaseQuantity = (id) => {
		dispatch({ type: "DECREASE_QUANTITY", payload: id });
	};

	context.removeOrderedItem = (id) => {
		dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: id });
	};

	context.toggleCart = () => {
		dispatch({ type: "TOGGLE_CART" });
	};

	context.setMessage = (name) => {
		dispatch({ type: "SET_MESSAGE", payload: name });
	};

	context.setLoading = (status) => {
		dispatch({ type: "SET_LOADING", payload: status });
	};

	context.sendOrder = (data = []) => {
		dispatch({ type: "SEND_ORDER", payload: data });
	};

	return (
		<ShopContext.Provider value={context}>{children}</ShopContext.Provider>
	);
};
