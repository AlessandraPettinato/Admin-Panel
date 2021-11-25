import { useState } from "react";
import { useMutation } from "@apollo/client";

import { Policy } from "../types/Types";

import { QUERY_UPDATE_POLICY } from "../queries/Policies";

const TableRow: React.FC<Policy> = ({
	id,
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
		id,
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

	const handleClickUpdate = (e: any) => {
		e.preventDefault(e);
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
				<input
					value={edited.endDate}
					name="endDate"
					onChange={handleUpdate}
					disabled={!editMode ? true : false}
				/>
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
					onClick={!editMode ? handleEdit : handleClickUpdate}
					className="text-indigo-600 hover:text-indigo-900"
				>
					{!editMode ? "Edit" : "Save"}
				</button>
			</td>
		</>
	);
};

export default TableRow;
