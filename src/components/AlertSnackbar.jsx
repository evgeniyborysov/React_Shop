import * as React from "react";

import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export const AlertSnackbar = ({ message, onSetMessage }) => {
	const [open, setOpen] = React.useState(true);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
		onSetMessage("");
	};

	const action = (
		<React.Fragment>
			<IconButton
				size="small"
				aria-label="close"
				color="inherit"
				onClick={handleClose}
			>
				<CloseIcon fontSize="small" />
			</IconButton>
		</React.Fragment>
	);

	return (
		<div>
			<Snackbar
				open={open}
				autoHideDuration={3000}
				onClose={handleClose}
				message={message}
				action={action}
			/>
		</div>
	);
};
