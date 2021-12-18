import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { useMutation } from "@apollo/client";

import {
	Button,
	TextField,
	Typography,
	CssBaseline,
	Avatar,
	Box,
	Grid,
	Paper,
	FormControlLabel,
	Checkbox,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

import useStyles from "./useStyles";
import { LOGIN_USER } from "../../queries/User";
import { AuthContext } from "../../context/auth-context";

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
		<Grid container component="main" className={classes.container}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.backgroundImage} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<Box className={classes.box}>
					<Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
						<LockIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Log in your Admin Panel
					</Typography>
					<Box component="form" noValidate sx={{ mt: 1 }}>
						<TextField
							value={formState.email}
							onChange={handleLoginInput}
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
						/>
						<TextField
							value={formState.password}
							onChange={handleLoginInput}
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						{/* <FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/> */}
						<Button
							type="submit"
							fullWidth
							variant="contained"
							className={classes.button}
							onClick={submitLogin}
						>
							Log In
						</Button>
						{/* <Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href="#" variant="body2">
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid> */}
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Login;
