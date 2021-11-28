import "./index.css";
import Provider from "./api/Provider";
import Table from "./components/TableSkeleton";

const App: React.FC = () => {
	return (
		<div className="container mx-auto p-10">
			<Provider>
				<Table />
			</Provider>
		</div>
	);
};

export default App;
