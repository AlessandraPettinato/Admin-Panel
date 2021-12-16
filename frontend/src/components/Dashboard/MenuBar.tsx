import { ChangeEventHandler, useContext } from "react";

import useStyleDashboard from "../styles/useStylesDashboard";
import { AuthContext } from "../../context/auth-context";

import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	TextField,
	Button,
} from "@mui/material";

const MenuBar: React.FC<{
	handleSearch: ChangeEventHandler<HTMLInputElement>;
}> = ({ handleSearch }) => {
	const classes = useStyleDashboard();

	const { logout } = useContext(AuthContext);

	return (
		<AppBar position="static">
			<Toolbar disableGutters className={classes.toolbar}>
				<Box className={classes.box}>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
					>
						ADMIN PANEL
					</Typography>
				</Box>
				<Box className={classes.box}>
					<TextField
						style={{ background: "white", borderRadius: "0.5rem" }}
						size="small"
						variant="outlined"
						placeholder="Search"
						onChange={handleSearch}
					/>
				</Box>
				<Box className={classes.box}>
					<Button style={{ color: "white" }} variant="text" onClick={logout}>
						Logout
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default MenuBar;
