import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Provider from "./api/Provider";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";

const App: React.FC = () => {
	return (
		<>
			<Provider>
				<Router>
					<Routes>
						<Route path="/" element={<Login props />} />
						<Route path="/admin" element={<Dashboard />} />
					</Routes>
				</Router>
			</Provider>
		</>
	);
};

export default App;
