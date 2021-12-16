import { useState } from "react";
import { useMutation } from "@apollo/client";

import { TableCell, TextField, Select, MenuItem, Button } from "@mui/material";
import useStyleDashboard from "../styles/useStylesDashboard";

import { Policy } from "../../types/Types";

import { QUERY_GET_ALL_POLICIES, UPDATE_POLICY } from "../../queries/Policies";

const TableRowComponent: React.FC<Policy> = ({
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
	const classes = useStyleDashboard();

	const { firstName, lastName, dateOfBirth } = customer;

	const completeName: string = `${lastName} ${firstName} `;

	const convertDateToString = (date: Date) => {
		return new Date(date).toISOString().slice(0, 10);
	};

	const [editMode, setEditMode] = useState<boolean>(false);

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

	const [updatePolicy] = useMutation(UPDATE_POLICY, {
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
				endDate: new Date(edited.endDateConverted),
				createdAt: new Date(edited.createdAtConverted),
				customer: {
					firstName: edited.completeName.split(" ")[1],
					lastName: edited.completeName.split(" ")[0],
					dateOfBirth: new Date(edited.dateOfBirthConverted),
				},
			},
		});
	};

	return (
		<>
			<TableCell>
				<TextField
					fullWidth
					variant="outlined"
					size="small"
					value={edited.completeName}
					name="completeName"
					onChange={handleUpdate}
					disabled={!editMode ? true : false}
					InputProps={{
						className: classes.textFieldActive,
					}}
				/>
			</TableCell>
			<TableCell>
				<Select
					fullWidth
					size="small"
					value={edited.insuranceType}
					name="insuranceType"
					onChange={handleUpdate}
					disabled={!editMode ? true : false}
				>
					<MenuItem value={"LIABILITY"}>LIABILITY</MenuItem>
					<MenuItem value={"HOUSEHOLD"}>HOUSEHOLD</MenuItem>
					<MenuItem value={"HEALTH"}>HEALTH</MenuItem>
				</Select>
			</TableCell>
			<TableCell>
				<TextField
					fullWidth
					size="small"
					value={edited.policyNumber}
					name="policyNumber"
					onChange={handleUpdate}
					disabled={!editMode ? true : false}
					InputProps={{
						className: classes.textFieldActive,
					}}
				/>
			</TableCell>
			<TableCell>
				<Select
					fullWidth
					size="small"
					value={edited.status}
					name="status"
					onChange={handleUpdate}
					disabled={!editMode ? true : false}
				>
					<MenuItem value={"ACTIVE"}>ACTIVE</MenuItem>
					<MenuItem value={"CANCELLED"}>CANCELLED</MenuItem>
					<MenuItem value={"DROPPED_OUT"}>DROPPED_OUT</MenuItem>
					<MenuItem value={"PENDING"}>PENDING</MenuItem>
				</Select>
			</TableCell>
			{/* <TableCell>
				<TextField
					fullWidth
					size="small"
					value={edited.provider}
					name="provider"
					onChange={handleUpdate}
					disabled={!editMode ? true : false}
				/>
			</TableCell> */}
			<TableCell>
				<TextField
					fullWidth
					size="small"
					value={edited.createdAtConverted}
					name="createdAtConverted"
					onChange={handleUpdate}
					disabled={!editMode ? true : false}
					InputProps={{
						className: classes.textFieldActive,
					}}
				/>
			</TableCell>
			<TableCell>
				<Button
					variant="text"
					onClick={!editMode ? handleEdit : () => handleClickUpdate()}
				>
					{!editMode ? "Edit" : "Save"}
				</Button>
			</TableCell>
		</>
	);
};

export default TableRowComponent;
