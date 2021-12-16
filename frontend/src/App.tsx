import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AuthProvider } from "./context/auth-context";
import AuthRoute from "./util/AuthRoute";

import Provider from "./api/Provider";
import Login from "./components/Login/Login";
import "./index.css";
import Dashboard from "./components/Dashboard/Dashboard";

import "./styles.css";

const App: React.FC = () => {
	return (
		<AuthProvider>
			<Provider>
				<Router>
					<Routes>
						<Route path="/" element={<Login props />} />
						<Route
							path="/dashboard"
							element={
								<AuthRoute>
									<Dashboard />
								</AuthRoute>
							}
						/>
					</Routes>
				</Router>
			</Provider>
		</AuthProvider>
	);
};

export default App;
