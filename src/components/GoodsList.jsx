import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { GoodItem } from "./GoodItem";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export const GoodsList = ({ goods }) => {
	const { addToOrder, setMessage } = useContext(ShopContext);
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				{goods.map((good) => (
					<GoodItem
						key={good.mainId}
						good={good}
						addToOrder={addToOrder}
						setMessage={setMessage}
					/>
				))}
			</Grid>
		</Box>
	);
};
