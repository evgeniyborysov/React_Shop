import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { Button, Typography } from "@mui/material";
import { CartListItem } from "./CartListItem";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useCallback } from "react";

export const CartList = (props) => {
	const { orderedItems } = props;
	const {
		setMessage,
		toggleCart,
		sendOrder,
		increaseQuantity,
		decreaseQuantity,
		removeOrderedItem,
	} = useContext(ShopContext);

	const itemsQtv = orderedItems.reduce((acc, item) => acc + item.quantity, 0);

	const totalPrice = useCallback(
		(orderedItems) => {
			let sum = 0;
			orderedItems.forEach((item) => (sum += item.price * item.quantity));
			return sum;
		},
		[orderedItems]
	);

	const onOrderButtonHandler = () => {
		setMessage("Order sent!");
		sendOrder();
		toggleCart();
	};

	return (
		<Box sx={{ width: "100%", bgcolor: "background.paper" }}>
			<List>
				{orderedItems.map((item) => (
					<CartListItem
						key={item.id}
						orderedItem={item}
						onRemove={removeOrderedItem}
						onIncreaseQtv={increaseQuantity}
						onDecreaseQtv={decreaseQuantity}
					/>
				))}
			</List>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Typography>
					Subtotal{" "}
					{`(${itemsQtv} items): ${totalPrice(orderedItems)}€`}
				</Typography>
				<Button
					onClick={onOrderButtonHandler}
					variant="contained"
					color="success"
				>
					Order
				</Button>
			</Box>
		</Box>
	);
};
