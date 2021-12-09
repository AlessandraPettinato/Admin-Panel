import TableRow from "./TableRow";
import TableHead from "./TableHead";
import { Policy } from "../../types/Types";
import { ApolloError } from "@apollo/client";

const Table: React.FC<{
	loading: boolean;
	error: ApolloError | undefined;
	sortedField: any;
	requestSort: Function;
	activeField: string;
	setActiveField: Function;
	searchTerm: any;
	policies: Array<Policy>;
}> = ({
	loading,
	error,
	sortedField,
	requestSort,
	activeField,
	setActiveField,
	searchTerm,
	policies,
}) => {
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Something's wrong: {error.message}</p>;

	return (
		<>
			<div className="mt-2 flex flex-col">
				<div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
					<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
							<table className="table-fixed min-w-full divide-y divide-gray-200">
								<TableHead
									requestSort={requestSort}
									activeField={activeField}
									setActiveField={setActiveField}
									sortedField={sortedField}
								/>
								<tbody className="bg-white divide-y divide-gray-200">
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
											<tr key={id}>
												<TableRow
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
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Table;
