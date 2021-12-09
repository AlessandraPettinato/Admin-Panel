import { useReducer, createContext } from "react";
import jwtDecode from "jwt-decode";

const initialState = {
	user: null,
};

if (localStorage.getItem("jwtToken")) {
	const decodedToken: any = jwtDecode(localStorage.getItem("jwtToken") || "");
	//the local storage return type is string|null. When you declare the data, its value is null until you render the component. We add "" so that is not null anymore

	if (decodedToken.exp * 1000 < Date.now()) {
		//from seconds to milliseconds to check if the token is expired
		localStorage.removeItem("jwtToken");
	} else {
		initialState.user = decodedToken;
	}
}

const AuthContext = createContext({
	user: null,
	login: (userData: any) => {},
	logout: () => {},
});

const authReducer = (state: any, action: any) => {
	// it receives a state and action with a type and a payload and determined what to do according to the info received
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				user: action.payload,
				//
			};
		case "LOGOUT":
			return {
				...state,
				user: null,
			};
		default:
			return state;
	}
};

const AuthProvider = (props: any) => {
	//useReducer hook to manage complex state which involves sub-values. It takes a reducer, a state and a dispatch. Dispatch will "dispatch" any value/action attached to it
	const [state, dispatch] = useReducer(authReducer, initialState);

	const login = (userData: any) => {
		localStorage.setItem("jwtToken", userData.token);
		dispatch({
			type: "LOGIN",
			payload: userData,
		});
	};

	const logout = () => {
		localStorage.removeItem("jwtToken");
		dispatch({
			type: "LOGOUT",
		});
	};

	return (
		<AuthContext.Provider
			value={{ user: state.user, login, logout }}
			{...props}
		/>
	);
};

export { AuthContext, AuthProvider };
