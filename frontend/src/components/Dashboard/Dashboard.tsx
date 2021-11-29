import Navigation from "./Navigation";

import Table from "../Table/TableSkeleton";

const Dashboard: React.FC = () => {
	return (
		<div className="bg-gray-800 font-sans leading-normal tracking-normal mt-12">
			<Navigation />
			<Table />
		</div>
	);
};

export default Dashboard;
