import { useEffect } from "react";

import TableRow from "./TableRow";
import TableHead from "./TableHead";
import { Policy } from "../../types/Types";

const Table: React.FC<{
	loading: any;
	error: any;
	sortedField: any;
	setPolicies: Function;
	sortedPolicies: Array<Policy>;
	requestSort: Function;
	activeField: string;
	setActiveField: Function;
	currentPolicies: Array<Policy>;
}> = ({
	loading,
	error,
	sortedField,
	setPolicies,
	sortedPolicies,
	requestSort,
	activeField,
	setActiveField,
	currentPolicies,
}) => {
	useEffect(() => {
		if (sortedField) {
			setPolicies(sortedPolicies);
		}
	}, [sortedField]);

	if (loading) return <p>Give it a minute</p>;
	if (error) return <p>Something's wrong: {error.message}</p>;

	return (
		<>
			<div className="flex flex-col container mx-auto px-4 py-12">
				<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"></div>
				<table className="table-fixed divide-y divide-gray-200 border-collapse border">
					<TableHead
						requestSort={requestSort}
						activeField={activeField}
						setActiveField={setActiveField}
						sortedField={sortedField}
					/>
					<tbody className="bg-white divide-y divide-gray-200">
						{currentPolicies.map((policy: Policy) => {
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
		</>
	);
};

export default Table;
