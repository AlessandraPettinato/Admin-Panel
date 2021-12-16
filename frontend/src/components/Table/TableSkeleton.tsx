import {
	Container,
	TableContainer,
	Table,
	TableBody,
	TableRow,
	TableFooter,
	Paper,
} from "@mui/material";

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
	paginate,
	totalPolicies,
}) => {
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Something's wrong: {error.message}</p>;

	return (
		<Container style={{ paddingTop: "4rem" }}>
			<TableContainer component={Paper}>
				<Table aria-label="policies-table">
					<TableHeadComponent
						requestSort={requestSort}
						activeField={activeField}
						setActiveField={setActiveField}
						sortedField={sortedField}
					/>
					<TableBody>
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
								<TableRow
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
								</TableRow>
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
