import {
	Box,
	IconButton,
	ListItem,
	ListItemText,
	Typography,
	Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";

export const CartListItem = (props) => {
	const { orderedItem, onRemove, onIncreaseQtv, onDecreaseQtv } = props;

	const removeItemHandler = () => {
		onRemove(orderedItem.id);
	};

	const onIncreaseHandler = () => {
		onIncreaseQtv(orderedItem.id);
	};

	const onDecreaseHandler = () => {
		onDecreaseQtv(orderedItem.id);
	};

	return (
		<>
			<ListItem
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<ListItemText
					primary={orderedItem.name}
					sx={{ flex: "none", width: "20%" }}
				/>
				<Box
					sx={{
						display: "flex",
						flexGrow: 1,
						justifyContent: "space-around",
						alignItems: "center",
						flexWrap: "wrap",
					}}
				>
					<Box>
						Qtv:
						<IconButton
							onClick={onDecreaseHandler}
							disabled={orderedItem.quantity === 1}
						>
							<RemoveIcon sx={{ fontSize: "small" }} />
						</IconButton>
						{orderedItem.quantity}
						<IconButton onClick={onIncreaseHandler}>
							<AddIcon sx={{ fontSize: "small" }} />
						</IconButton>
					</Box>

					<Typography>
						{orderedItem.price * orderedItem.quantity}
					</Typography>
				</Box>
				<IconButton
					sx={{ color: "red", justifySelf: "end" }}
					onClick={() => removeItemHandler(orderedItem.id)}
				>
					<ClearIcon />
				</IconButton>
			</ListItem>
			<Divider />
		</>
	);
};
