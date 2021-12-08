import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";

import { AuthContext } from "../context/auth-context";

const AuthRoute = ({ component: Component, ...rest }: any) => {
	const { user } = useContext(AuthContext);

	return user ? <Navigate to="/" /> : <Dashboard />;
};

export default AuthRoute;
