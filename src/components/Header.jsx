import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Badge from "@mui/material/Badge";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Header = (props) => {
	const { orderedItems, setIsOpen } = props;
	const badgeContent = orderedItems.reduce(
		(acc, item) => acc + item.quantity,
		0
	);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography
						variant="h6"
						noWrap
						component="div"
						// sx={{ display: { xs: "none", sm: "block" } }}
					>
						React Shop
					</Typography>

					<Box sx={{ flexGrow: 1 }} />
					<Box onClick={setIsOpen}>
						<IconButton color="inherit">
							<Badge badgeContent={badgeContent} color="error">
								<ShoppingCartIcon />
							</Badge>
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
