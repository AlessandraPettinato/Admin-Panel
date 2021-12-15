import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { useMutation } from "@apollo/client";

import { Button, Container, TextField, Typography } from "@mui/material";

import { LOGIN_USER } from "../../queries/User";
import { AuthContext } from "../../context/auth-context";
import { Box } from "@mui/system";

const Login: React.FC<{ props: any }> = ({ props }) => {
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
		<Container
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Typography variant="h2" sx={{ textTransform: "uppercase" }}>
				Login to your account
			</Typography>

			<form
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
				onSubmit={submitLogin}
			>
				<Box>
					<Box sx={{ paddingTop: "1rem" }}>
						<TextField
							value={formState.email}
							name="email"
							type="email"
							required
							id="outlined-required"
							label="Email Address"
							defaultValue="Email Address"
							placeholder="email@domain.org"
							onChange={handleLoginInput}
						/>
					</Box>
					<Box sx={{ paddingTop: "1rem" }}>
						<TextField
							value={formState.password}
							name="password"
							type="password"
							label="Password"
							defaultValue="Password"
							placeholder="password"
							onChange={handleLoginInput}
						/>
					</Box>
				</Box>

				<Box sx={{ paddingTop: "1rem" }}>
					<Button type="submit" variant="outlined">
						Log in
					</Button>
				</Box>
			</form>
		</Container>
	);
};

export default Login;
