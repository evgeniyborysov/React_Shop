import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { Button, Typography } from "@mui/material";
import { CartListItem } from "./CartListItem";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export const CartList = (props) => {
	const { orderedItems, onRemove, onIncreaseQtv, onDecreaseQtv } = props;
	const itemsQtv = orderedItems.reduce((acc, item) => acc + item.quantity, 0);
	const totalPrice = orderedItems.reduce((acc, item) => acc + item.price, 0);

	const { setMessage, toggleCart } = useContext(ShopContext);

	const onOrderButtonHandler = () => {
		setMessage("Order sent!");
		toggleCart();
	};

	return (
		<Box sx={{ width: "100%", bgcolor: "background.paper" }}>
			<List>
				{orderedItems.map((item) => (
					<CartListItem
						key={item.id}
						orderedItem={item}
						onRemove={onRemove}
						onIncreaseQtv={onIncreaseQtv}
						onDecreaseQtv={onDecreaseQtv}
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
					Subtotal {`(${itemsQtv} items): ${totalPrice * itemsQtv}€`}
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
