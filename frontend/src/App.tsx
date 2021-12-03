import "./index.css";
import Provider from "./api/Provider";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";

const App: React.FC = () => {
	return (
		<>
			<Provider>
				<Login />
				{/* <Dashboard /> */}
			</Provider>
		</>
	);
};

export default App;
