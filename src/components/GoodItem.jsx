import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

export const GoodItem = ({ good, addToOrder, setMessage }) => {
	const handleClick = (id, name, price) => {
		addToOrder(id, name, price);
		setMessage(`${name} added to cart`);
	};

	return (
		<Grid
			justifyContent="space-between"
			alignItems="center"
			align="center"
			item
			xs={12}
			sm={6}
			md={4}
			lg={3}
		>
			<Card
				sx={{
					maxWidth: 355,
					height: 520,
					display: "flex",
					flexDirection: "column",
				}}
			>
				<CardMedia
					component="img"
					alt={good.displayName}
					height="320"
					image={good.displayAssets[0]?.background}
				/>
				<CardContent
					sx={{
						flexGrow: 1,
					}}
				>
					<Typography gutterBottom variant="h5" component="div">
						{good.displayName}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{good.displayDescription}
					</Typography>
				</CardContent>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-around",
						padding: "10px",
					}}
				>
					<Typography
						sx={{
							alignSelf: "center",
						}}
						variant="h5"
						color="text.secondary"
					>
						{`${good.price.finalPrice}€`}
					</Typography>

					<Button
						onClick={() =>
							handleClick(
								good.mainId,
								good.displayName,
								good.price.finalPrice
							)
						}
						variant="contained"
						color="success"
					>
						Add to cart
					</Button>
				</Box>
			</Card>
		</Grid>
	);
};
