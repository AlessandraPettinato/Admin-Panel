import { useState } from "react";
import { useMutation } from "@apollo/client";

import { Policy } from "../../types/Types";

import { QUERY_GET_ALL_POLICIES, UPDATE_POLICY } from "../../queries/Policies";

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
	const { firstName, lastName, dateOfBirth } = customer;

	const completeName = `${lastName} ${firstName} `;

	const convertDateToString = (date: Date) => {
		return new Date(date).toISOString().slice(0, 10);
	};

	const [editMode, setEditMode] = useState(false);

	const [edited, setEdited] = useState({
		id,
		completeName,
		dateOfBirthConverted: convertDateToString(dateOfBirth),
		provider,
		insuranceType,
		status,
		policyNumber,
		startDateConverted: convertDateToString(startDate),
		endDateConverted: convertDateToString(endDate),
		createdAtConverted: convertDateToString(createdAt),
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
				updatePolicyId: edited.id,
				provider: edited.provider,
				insuranceType: edited.insuranceType,
				status: edited.status,
				policyNumber: edited.policyNumber,
				startDate: new Date(edited.startDateConverted),
				// endDate: new Date(edited.endDateConverted),
				// createdAt: new Date(edited.createdAtConverted),
				customer: {
					firstName: edited.completeName.split(" ")[1],
					lastName: edited.completeName.split(" ")[0],
					// dateOfBirth: new Date(edited.dateOfBirthConverted),
				},
			},
		});
	};

	// console.log(JSON.stringify(error, null, 2));

	if (loading) return <p>Give it a minute</p>;
	if (error) return <p>Something's wrong: {error.message}</p>;

	return (
		<>
			<td className="p-3 whitespace-nowrap text-sm text-gray-500">
				<input
					className={
						!editMode ? "bg-transparent" : "bg-gray-50 border rounded-lg pl-2"
					}
					value={edited.completeName}
					name="completeName"
					onChange={handleUpdate}
					disabled={!editMode ? true : false}
				/>
			</td>
			{/* <td className="p-3 whitespace-nowrap text-sm text-gray-500">
				<input
				className={
						!editMode ? "bg-transparent" : "bg-gray-50 border rounded-lg pl-2"
					}
					value={edited.dateOfBirthConverted}
					name="dateOfBirthConverted"
					onChange={handleUpdate}
					disabled={!editMode ? true : false}
				/>
			</td> */}
			<td className="p-3 whitespace-nowrap text-sm text-gray-500">
				<select
					className={
						!editMode
							? "border-none appearance-none"
							: "w-36 h-5 pl-2 pr-6 text-sm border rounded-lg appearance-none focus:shadow-outline bg-gray-50"
					}
					value={edited.insuranceType}
					name="insuranceType"
					onChange={handleUpdate}
					disabled={!editMode ? true : false}
				>
					<option>LIABILITY</option>
					<option>HOUSEHOLD</option>
					<option>HEALTH</option>
				</select>
			</td>
			<td className="p-3 whitespace-nowrap text-sm text-gray-500">
				<input
					className={
						!editMode ? "bg-transparent" : "bg-gray-50 border rounded-lg pl-2"
					}
					value={edited.policyNumber}
					name="policyNumber"
					onChange={handleUpdate}
					disabled={!editMode ? true : false}
				/>
			</td>
			<td className="p-3 whitespace-nowrap text-sm text-gray-500">
				<select
					className={
						!editMode
							? "border-none appearance-none"
							: "w-36 h-5 pl-2 pr-6 text-sm border rounded-lg appearance-none focus:shadow-outline bg-gray-50"
					}
					value={edited.status}
					name="status"
					onChange={handleUpdate}
					disabled={!editMode ? true : false}
				>
					<option>ACTIVE</option>
					<option>CANCELLED</option>
					<option>DROPPED_OUT</option>
					<option>PENDING</option>
				</select>
			</td>
			<td className="p-3 whitespace-nowrap text-sm text-gray-500">
				<input
					className={
						!editMode ? "bg-transparent" : "bg-gray-50 border rounded-lg pl-2"
					}
					value={edited.provider}
					name="provider"
					onChange={handleUpdate}
					disabled={!editMode ? true : false}
				/>
			</td>
			{/* <td className="p-3 whitespace-nowrap text-sm text-gray-500">
				<input
					className={
						!editMode ? "bg-transparent" : "bg-gray-50 border rounded-lg pl-2"
					}
					value={edited.startDateConverted}
					name="startDateConverted"
					onChange={handleUpdate}
					disabled={!editMode ? true : false}
				/>
			</td>
			<td className="p-3 whitespace-nowrap text-sm text-gray-500">
				<input
					className={
						!editMode ? "bg-transparent" : "bg-gray-50 border rounded-lg pl-2"
					}
					value={edited.endDateConverted}
					name="endDateConverted"
					onChange={handleUpdate}
					disabled={!editMode ? true : false}
				/>
			</td> */}
			<td className="p-3 whitespace-nowrap text-sm text-gray-500">
				<input
					className={
						!editMode ? "bg-transparent" : "bg-gray-50 border rounded-lg pl-2"
					}
					value={edited.createdAtConverted}
					name="createdAtConverted"
					onChange={handleUpdate}
					disabled={!editMode ? true : false}
				/>
			</td>
			<td className="pr-6 whitespace-nowrap text-right text-sm font-medium">
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
