import TableRow from "./TableRow";
import TableHead from "./TableHead";
import { Policy } from "../../types/Types";

const Table: React.FC<{
	loading: any;
	error: any;
	sortedField: any;
	requestSort: Function;
	activeField: string;
	setActiveField: Function;
	currentPolicies: Array<Policy>;
	searchTerm: any;
	policies: Array<Policy>;
}> = ({
	loading,
	error,
	sortedField,
	requestSort,
	activeField,
	setActiveField,
	currentPolicies,
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
									{(searchTerm === "" ? currentPolicies : policies)
										.filter((policy: any) => {
											if (searchTerm === "") {
												return policy;
											} else {
												for (let values of Object.values(policy)) {
													if (typeof values === "object") {
														let { firstName, lastName }: any = values;
														if (
															firstName
																.toUpperCase()
																.includes(searchTerm.toUpperCase()) ||
															lastName
																.toUpperCase()
																.includes(searchTerm.toUpperCase())
														) {
															return policy;
														}
													} else if (typeof values === "string") {
														if (
															values
																.toUpperCase()
																.includes(searchTerm.toUpperCase())
														) {
															return policy;
														}
													}
												}
											}
										})
										.map((policy: Policy) => {
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
