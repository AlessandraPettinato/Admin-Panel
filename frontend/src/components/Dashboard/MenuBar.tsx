import { ChangeEventHandler, useContext, useState } from "react";
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
	const { logout } = useContext(AuthContext);

	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="static">
			<Toolbar
				disableGutters
				sx={{
					display: "flex",
					justifyContent: "space-between",
					background: "darkBlue",
				}}
			>
				<Box sx={{ padding: "1.5rem" }}>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
					>
						ADMIN PANEL
					</Typography>
				</Box>
				<Box sx={{ padding: "1.5rem" }}>
					<TextField
						style={{ background: "white", borderRadius: "0.5rem" }}
						size="small"
						variant="outlined"
						placeholder="Search"
						onChange={handleSearch}
					/>
				</Box>
				<Box sx={{ padding: "1.5rem" }}>
					<Button style={{ color: "white" }} variant="text" onClick={logout}>
						Logout
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default MenuBar;
