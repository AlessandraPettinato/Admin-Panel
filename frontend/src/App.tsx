import "./index.css";
import Provider from "./api/Provider";
import Dashboard from "./components/Dashboard/Dashboard";

const App: React.FC = () => {
	return (
		<Provider>
			<Dashboard />
		</Provider>
	);
};

export default App;
