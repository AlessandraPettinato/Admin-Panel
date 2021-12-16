import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { useMutation } from "@apollo/client";

import {
	Button,
	Container,
	TextField,
	Typography,
	CssBaseline,
	Avatar,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

import useStyles from "./useStyles";
import { LOGIN_USER } from "../../queries/User";
import { AuthContext } from "../../context/auth-context";
import { Box } from "@mui/system";

const Login: React.FC<{ props: any }> = ({ props }) => {
	const classes = useStyles();

	const context = useContext(AuthContext);

	const navigate = useNavigate();
	const [formState, setFormState] = useState({
		email: "",
		password: "",
	});

	const handleLoginInput = (e: any) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const [login] = useMutation(LOGIN_USER, {
		update(_, { data: { login: userData } }) {
			context.login(userData);
			navigate("/dashboard");
		},
		variables: {
			email: formState.email,
			password: formState.password,
		},
	});

	const submitLogin = (e: any) => {
		e.preventDefault();
		login();
	};

	return (
		<Container component="main" maxWidth={false}>
			<CssBaseline />
			<Box className={classes.box}>
				<Avatar className={classes.avatar}>
					<LockIcon />
				</Avatar>
				<Typography variant="h4" className={classes.login}>
					Login
				</Typography>
				<form className={classes.form} onSubmit={submitLogin}>
					<Box component="form" noValidate>
						<TextField
							value={formState.email}
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
							onChange={handleLoginInput}
						/>

						<TextField
							value={formState.password}
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							onChange={handleLoginInput}
						/>
					</Box>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						className={classes.button}
					>
						Log in
					</Button>
				</form>
			</Box>
		</Container>
	);
};

export default Login;
