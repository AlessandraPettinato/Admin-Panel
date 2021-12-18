import { ChangeEventHandler, useContext, useState } from "react";
import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	TextField,
	CssBaseline,
	Avatar,
	IconButton,
	Tooltip,
	Menu,
	MenuItem,
} from "@mui/material";
import { StylesProvider } from "@material-ui/core";

import useStyleDashboard from "./styles/useStylesDashboard";
import { AuthContext } from "../../context/auth-context";

const MenuBar: React.FC<{
	handleSearch: ChangeEventHandler<HTMLInputElement>;
}> = ({ handleSearch }) => {
	const classes = useStyleDashboard();

	const [anchorUser, setAnchorUser] = useState<null | HTMLElement>(null);

	const settings = ["Profile", "Logout"];

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorUser(null);
	};

	const { logout } = useContext(AuthContext);

	return (
		<StylesProvider injectFirst>
			<AppBar position="static">
				<CssBaseline />
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
							className={classes.textSearch}
							fullWidth
							size="small"
							variant="outlined"
							placeholder="Search"
							onChange={handleSearch}
						/>
					</Box>
					<Box className={classes.box}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="Admin User" />
							</IconButton>
						</Tooltip>
						<Menu
							className={classes.menu}
							id="menu-appbar"
							anchorEl={anchorUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									{setting === "Logout" ? (
										<Typography textAlign="center" onClick={logout}>
											{setting}
										</Typography>
									) : (
										<Typography textAlign="center">{setting}</Typography>
									)}
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</AppBar>
		</StylesProvider>
	);
};

export default MenuBar;
