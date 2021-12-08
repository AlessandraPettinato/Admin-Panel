import { useState } from "react";
import { useNavigate } from "react-router";
import { useMutation } from "@apollo/client";

import { LOGIN_USER } from "../../queries/User";

const Login: React.FC<{ props: any }> = ({ props }) => {
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
		update(_, result) {
			navigate("/admin");
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
		<div className="min-h-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-600">
					Log in to your account
				</h2>
			</div>
			<form className="mt-8 space-y-6" onSubmit={submitLogin}>
				<input type="hidden" name="remember" defaultValue="true" />
				<div className="rounded-md shadow-sm -space-y-px">
					<div>
						<label htmlFor="email-address" className="sr-only">
							Email address
						</label>
						<input
							id="email-address"
							value={formState.email}
							name="email"
							type="email"
							autoComplete="email"
							required
							className="appearance-none rounded-none relative block w-full px-12 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
							placeholder="Email address"
							onChange={handleLoginInput}
						/>
					</div>
					<div>
						<label htmlFor="password" className="sr-only">
							Password
						</label>
						<input
							id="password"
							value={formState.password}
							name="password"
							type="password"
							autoComplete="current-password"
							required
							className="appearance-none rounded-none relative block w-full px-12 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10 sm:text-sm"
							placeholder="Password"
							onChange={handleLoginInput}
						/>
					</div>
				</div>

				<div>
					<button
						type="submit"
						className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
					>
						Sign in
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
