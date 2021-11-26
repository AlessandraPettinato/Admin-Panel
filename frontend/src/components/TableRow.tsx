import { useState } from "react";
import { useMutation } from "@apollo/client";

import { Policy } from "../types/Types";

import { QUERY_GET_ALL_POLICIES, UPDATE_POLICY } from "../queries/Policies";

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
	const { firstName, lastName, dateOfBirth } = customer[0];

	const completeName = `${firstName} ${lastName}`;

	const [editMode, setEditMode] = useState(false);

	const [edited, setEdited] = useState({
		id,
		completeName,
		dateOfBirth,
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

	const [updatePolicy, { loading, error, data }] = useMutation(UPDATE_POLICY, {
		refetchQueries: [QUERY_GET_ALL_POLICIES],
	});

	const handleClickUpdate = () => {
		setEditMode(!editMode);
		updatePolicy({
			variables: {
				id: edited.id,
				provider: edited.provider,
				insuranceType: edited.insuranceType,
				status: edited.status,
				policyNumber: edited.policyNumber,
				startDate: edited.startDate,
				endDate: edited.endDate,
				createdAt: edited.createdAt,
				customer: {
					firstName: edited.completeName.split(" ")[0],
					lastName: edited.completeName.split(" ")[1],
					dateOfBirth: edited.dateOfBirth,
				},
			},
		});
		console.log(id);
	};

	console.log(JSON.stringify(error, null, 2));

	console.log(id);

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
					value={edited.dateOfBirth}
					name="dateOfBirth"
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
					onClick={!editMode ? handleEdit : () => handleClickUpdate()}
					className="text-indigo-600 hover:text-indigo-900"
				>
					{!editMode ? "Edit" : "Save"}
				</button>
			</td>
		</>
	);
};

export default TableRow;
