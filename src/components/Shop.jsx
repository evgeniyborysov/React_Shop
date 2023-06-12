import React from "react";
import { useEffect, useState } from "react";

import Container from "@mui/material/Container";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { AlertSnackbar } from "./AlertSnackbar";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Progress } from "./Progress";

export const Shop = () => {
	const [goods, setGoods] = useState([]);
	const { alertMessage, setMessage, loading, setLoading } =
		useContext(ShopContext);

	const getGoods = () => {
		setLoading(true);
		fetch("https://fortniteapi.io/v2/shop?lang=en", {
			headers: {
				Authorization: process.env.REACT_APP_API_KEY,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setGoods(data.shop);
				setLoading(false);
			});
	};

	useEffect(() => {
		getGoods();
		// eslint-disable-next-line
	}, []);

	return (
		<main>
			{loading && <Progress />}
			<Container fixed sx={{ padding: 2 }}>
				<GoodsList goods={goods} />
			</Container>
			<Cart />
			{alertMessage && (
				<AlertSnackbar
					message={alertMessage}
					onSetMessage={setMessage}
				/>
			)}
		</main>
	);
};
