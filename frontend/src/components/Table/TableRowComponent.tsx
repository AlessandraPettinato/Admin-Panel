import { useState } from "react";
import { useMutation } from "@apollo/client";

import { TableCell, TextField, Select, MenuItem, Button } from "@mui/material";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import SaveIcon from '@mui/icons-material/Save';
import useStyleTable from "./styles/useStylesTable";

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
	const classes = useStyleTable();

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
			<TableCell variant="body" sx={{ fontSize: ".9rem" }}>
				{!editMode ? (
					edited.completeName
				) : (
					<TextField
						fullWidth
						size="small"
						value={edited.completeName}
						name="completeName"
						onChange={handleUpdate}
						InputProps={{
							className: classes.textFieldActive,
						}}
					/>
				)}
			</TableCell>
			<TableCell variant="body" sx={{ fontSize: ".9rem" }} >
				{!editMode ? (
					edited.insuranceType
				) : (
					<Select
						fullWidth
						size="small"
						value={edited.insuranceType}
						name="insuranceType"
						onChange={handleUpdate}
						sx={{ fontSize: ".9rem" }}
					>
						<MenuItem value={"LIABILITY"} sx={{ fontSize: ".9rem" }}>LIABILITY</MenuItem>
						<MenuItem value={"HOUSEHOLD"} sx={{ fontSize: ".9rem" }}>HOUSEHOLD</MenuItem>
						<MenuItem value={"HEALTH"} sx={{ fontSize: ".9rem" }}>HEALTH</MenuItem>
					</Select>
				)}
			</TableCell>
			<TableCell variant="body" sx={{ fontSize: ".9rem" }}>
				{!editMode ? (
					edited.policyNumber
				) : (
					<TextField
						fullWidth
						size="small"
						value={edited.policyNumber}
						name="policyNumber"
						onChange={handleUpdate}
						InputProps={{
							className: classes.textFieldActive,
						}}
					/>
				)}
			</TableCell>
			<TableCell variant="body" sx={{ fontSize: ".9rem" }} >
				{!editMode ? (
					edited.status
				) : (
					<Select
						fullWidth
						size="small"
						value={edited.status}
						name="status"
						onChange={handleUpdate}
						disabled={!editMode ? true : false}
						sx={{ fontSize: ".9rem" }}
					>
						<MenuItem value={"ACTIVE"} sx={{ fontSize: ".9rem" }}>ACTIVE</MenuItem>
						<MenuItem value={"CANCELLED"} sx={{ fontSize: ".9rem" }}>CANCELLED</MenuItem>
						<MenuItem value={"DROPPED_OUT"} sx={{ fontSize: ".9rem" }}>DROPPED_OUT</MenuItem>
						<MenuItem value={"PENDING"} sx={{ fontSize: ".9rem" }}>PENDING</MenuItem>
					</Select>
				)}
			</TableCell>

			<TableCell variant="body" sx={{ fontSize: ".9rem" }}>
				{!editMode ? (
					edited.provider
				) : (
					<TextField
						fullWidth
						size="small"
						value={edited.provider}
						name="provider"
						onChange={handleUpdate}
						InputProps={{
							className: classes.textFieldActive,
						}}
					/>
				)}
			</TableCell>

			<TableCell variant="body" sx={{ fontSize: ".9rem" }} >
				{!editMode ? (
					edited.createdAtConverted
				) : (
					<TextField
						fullWidth
						size="small"
						value={edited.createdAtConverted}
						name="createdAtConverted"
						onChange={handleUpdate}
						InputProps={{
							className: classes.textFieldActive,
						}}
					/>
				)}
			</TableCell>

			<TableCell>
				<Button
					variant="text"
					onClick={!editMode ? handleEdit : () => handleClickUpdate()}
				>
					{!editMode ? <ModeEditIcon sx={{color: "black"}}/> : <SaveIcon sx={{color: "black"}}/>}
				</Button>
			</TableCell>
		</>
	);
};

export default TableRowComponent;
