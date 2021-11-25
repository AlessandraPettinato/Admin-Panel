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

	const handleEdit = () => {
		setEditMode(!editMode);
	};

	return (
		<>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
				<input
					value={edited.completeName}
					name="completeName"
					onChange={handleUpdate}
					disabled={!editMode ? true : false}
				/>
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
				<input
					value={edited.provider}
					name="provider"
					onChange={handleUpdate}
					disabled={!editMode ? true : false}
				/>
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
				<input
					value={edited.insuranceType}
					name="insuranceType"
					onChange={handleUpdate}
					disabled={!editMode ? true : false}
				/>
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
				<input
					value={edited.status}
					name="status"
					onChange={handleUpdate}
					disabled={!editMode ? true : false}
				/>
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
				<input
					value={edited.policyNumber}
					name="policyNumber"
					onChange={handleUpdate}
					disabled={!editMode ? true : false}
				/>
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
				<input
					value={edited.startDate}
					name="startDate"
					onChange={handleUpdate}
					disabled={!editMode ? true : false}
				/>
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
				<input value={edited.endDate} name="endDate" onChange={handleUpdate} />
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
				<input
					value={edited.createdAt}
					name="createdAt"
					onChange={handleUpdate}
					disabled={!editMode ? true : false}
				/>
			</td>
			<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
				<button
					onClick={handleEdit}
					className="text-indigo-600 hover:text-indigo-900"
				>
					Edit
				</button>
			</td>
		</>
	);
};

export default TableRow;
