type Policy = {
	id: string;
	customer: [
		{
			firstName: string;
			lastName: string;
			dateOfBirth: string;
		}
	];
	provider: string;
	insuranceType: string;
	status: string;
	policyNumber: string;
	startDate: string;
	endDate: string;
	createdAt: string;
};

const TableRow: React.FC<Policy> = ({
	customer,
	provider,
	insuranceType,
	status,
	policyNumber,
	startDate,
	endDate,
	createdAt,
}) => {
	const { firstName, lastName } = customer[0];

	return (
		<>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
				{lastName} {firstName}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
				{provider}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
				{insuranceType}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
				{status}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
				{policyNumber}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
				{startDate}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
				{endDate}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
				{createdAt}
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
				<a href="#" className="text-indigo-600 hover:text-indigo-900">
					Edit
				</a>
			</td>
		</>
	);
};

export default TableRow;
