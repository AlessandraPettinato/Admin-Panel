import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AuthProvider } from "./context/auth-context";
import Provider from "./api/Provider";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import "./index.css";

const App: React.FC = () => {
	return (
		<AuthProvider>
			<Provider>
				<Router>
					<Routes>
						<Route path="/" element={<Login props />} />
						<Route path="/admin" element={<Dashboard />} />
					</Routes>
				</Router>
			</Provider>
		</AuthProvider>
	);
};

export default App;
