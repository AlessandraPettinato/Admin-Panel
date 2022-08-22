import {
	Container,
	TableContainer,
	Table,
	TableBody,
	TableRow,
	Paper,
} from "@mui/material";

import { styled } from '@mui/material/styles';
import useStyleTable from "./styles/useStylesTable";

import TableRowComponent from "./TableRowComponent";
import TableHeadComponent from "./TableHeadComponent";
import TableFooterComponent from "./TableFooterComponent";
import { Policy } from "../../types/Types";
import { ApolloError } from "@apollo/client";

const TableSkeleton: React.FC<{
	loading: boolean;
	error: ApolloError | undefined;
	sortedField: any;
	requestSort: Function;
	activeField: string;
	setActiveField: Function;
	searchTerm: String;
	policies: Array<Policy>;
	policiesPerPage: number;
	setPoliciesPerPage: Function;
	paginate: Function;
	totalPolicies: number;
}> = ({
	loading,
	error,
	sortedField,
	requestSort,
	activeField,
	setActiveField,
	policies,
	policiesPerPage,
	setPoliciesPerPage,
	paginate,
	totalPolicies,
}) => {

	const classes = useStyleTable();
	
	const StyledTableRow = styled(TableRow)(() => ({
		'&:nth-of-type(odd)': {
		  backgroundColor: "#DADADA",
		  color: "white"
		},
		'&:last-child td, &:last-child th': {
		  border: 0,
		},
	  }));

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Something's wrong: {error.message}</p>;

	return (
		<Container style={{ padding: "4rem 0 0" }}>
			<TableContainer>
				<Table aria-label="policies-table" sx={{ minWidth: 650, 
				border: "0.5px solid grey",
				borderCollapse: "unset" }} 
				size="small">
					<TableHeadComponent
						requestSort={requestSort}
						activeField={activeField}
						setActiveField={setActiveField}
						sortedField={sortedField}
					/>
					<TableBody className={classes.tableBody}>
						{policies.map((policy: Policy) => {
							const {
								id,
								customer,
								provider,
								insuranceType,
								status,
								policyNumber,
								startDate,
								endDate,
								createdAt,
							} = policy;
							return (
								<StyledTableRow
									key={id}
									sx={{
										"&:last-child td, &:last-child th": { border: 0 },
									}}
								>
									<TableRowComponent
										id={id}
										customer={customer}
										provider={provider}
										insuranceType={insuranceType}
										status={status}
										policyNumber={policyNumber}
										startDate={startDate}
										endDate={endDate}
										createdAt={createdAt}
									/>
								</StyledTableRow>
							);
						})}
					</TableBody>
					<TableFooterComponent
						 policiesPerPage={policiesPerPage}
						 totalPolicies={totalPolicies}
						 paginate={paginate}
						
					/>
				</Table>
			</TableContainer>
		</Container>
	);
};

export default TableSkeleton;
