import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import { CartList } from "./CartList";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 800,
	maxWidth: "95%",
	bgcolor: "background.paper",
	border: "2px solid #000",
	borderRadius: "10px",
	boxShadow: 24,
	p: 2,
};

export const Cart = (props) => {
	const {
		isOpen,
		setIsOpen,
		orderedItems = [],
		onRemove,
		onIncreaseQtv,
		onDecreaseQtv,
	} = props;

	return (
		<div>
			<Modal
				open={isOpen}
				onClose={setIsOpen}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Typography
							id="modal-modal-title"
							variant="h6"
							component="h2"
						>
							Shopping Cart
						</Typography>
						<IconButton onClick={setIsOpen}>
							<ClearIcon />
						</IconButton>
					</Box>

					<Divider />
					{orderedItems.length ? (
						<CartList
							orderedItems={orderedItems}
							onRemove={onRemove}
							onIncreaseQtv={onIncreaseQtv}
							onDecreaseQtv={onDecreaseQtv}
						/>
					) : (
						<Typography
							id="modal-modal-description"
							sx={{
								mt: 2,
								textAlign: "center",
							}}
						>
							Your Cart is empty
						</Typography>
					)}
				</Box>
			</Modal>
		</div>
	);
};
