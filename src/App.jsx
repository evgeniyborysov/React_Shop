import { useEffect, useState } from "react";
import "./App.css";
import Container from "@mui/material/Container";
import { GoodsList } from "./components/GoodsList";
import { Cart } from "./components/Cart";
import { Header } from "./components/Header";

function App() {
	const [goods, setGoods] = useState([]);
	// const [loading, setLoading] = useState(false);
	const [orderedItems, setOrderedItems] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	// console.log(goods);

	const getGoods = () => {
		// setLoading(true);
		fetch("https://fortniteapi.io/v2/shop?lang=en", {
			headers: {
				Authorization: process.env.REACT_APP_API_KEY,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setGoods(data.shop);
				// setLoading(false);
			});
	};

	useEffect(() => {
		getGoods();
	}, []);

	const addToOrder = (id, name, price) => {
		const indexItem = orderedItems.findIndex((item) => item.id === id);

		if (indexItem !== -1) {
			const updatedOrder = [...orderedItems];
			updatedOrder[indexItem].quantity += 1;
			updatedOrder[indexItem].price += price;
			setOrderedItems(updatedOrder);
		} else {
			const newItem = {
				id: id,
				name: name,
				price: price,
				quantity: 1,
			};
			setOrderedItems([...orderedItems, newItem]);
		}
	};

	const removeItem = (id) => {
		const updatedOrder = orderedItems.filter((item) => item.id !== id);
		setOrderedItems(updatedOrder);
	};

	const increaseQuantity = (id) => {
		const updatedOrder = orderedItems.map((item) =>
			item.id === id
				? {
						...item,
						quantity: item.quantity + 1,
				  }
				: item
		);
		setOrderedItems(updatedOrder);
	};

	const decreaseQuantity = (id) => {
		const updatedOrder = orderedItems.map((item) =>
			item.id === id
				? {
						...item,
						quantity: item.quantity - 1,
				  }
				: item
		);
		setOrderedItems(updatedOrder);
	};

	const setIsOpenHandler = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div className="App">
			<Header orderedItems={orderedItems} setIsOpen={setIsOpenHandler} />
			<Container fixed sx={{ padding: 2 }}>
				<GoodsList goods={goods} addToOrder={addToOrder} />
			</Container>
			<Cart
				orderedItems={orderedItems}
				isOpen={isOpen}
				setIsOpen={setIsOpenHandler}
				onRemove={removeItem}
				onIncreaseQtv={increaseQuantity}
				onDecreaseQtv={decreaseQuantity}
			/>
		</div>
	);
}

export default App;
