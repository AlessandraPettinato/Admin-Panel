import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../context/auth-context";

const AuthRoute = ({ children }: { children: any }) => {
	let location = useLocation();
	const { user } = useContext(AuthContext);

	if (!user) {
		return <Navigate to="/" state={{ from: location }} />;
	}
	return children;
};

export default AuthRoute;
