import { useState } from "react";

import { Policy } from "../types/Types";

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

	const completeName = `${firstName} ${lastName}`;

	const [editMode, setEditMode] = useState(false);

	const [edited, setEdited] = useState({
		completeName,
		provider,
		insuranceType,
		status,
		policyNumber,
		startDate,
		endDate,
		createdAt,
	});

	const handleUpdate = (e: any) => {
		setEdited({
			...edited,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
				<input
					value={edited.completeName}
					onChange={handleUpdate}
					name="completeName"
				></input>
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
				<input
					value={edited.provider}
					onChange={handleUpdate}
					name="provider"
				/>
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
