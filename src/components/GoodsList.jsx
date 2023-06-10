import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { GoodItem } from "./GoodItem";

export const GoodsList = ({ goods, addToOrder }) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				{goods.map((good) => (
					<GoodItem
						key={good.mainId}
						good={good}
						addToOrder={addToOrder}
					/>
				))}
			</Grid>
		</Box>
	);
};
