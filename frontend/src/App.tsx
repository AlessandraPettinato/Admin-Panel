import "./index.css";
import Provider from "./api/Provider";
import Table from "./components/Table/TableSkeleton";

const App: React.FC = () => {
	return (
		<div className="container m-8">
			<Provider>
				<Table />
			</Provider>
		</div>
	);
};

export default App;
