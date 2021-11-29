import { useEffect } from "react";

import TableRow from "./TableRow";
import TableHead from "./TableHead";
import { Policy } from "../../types/Types";

const Table: React.FC<{
	loading: any;
	error: any;
	sortedField: any;
	setPolicies: Function;
	sorted: boolean;
	setSorted: Function;
	sortedPolicies: Array<Policy>;
	requestSort: Function;
	active: string;
	currentPolicies: Array<Policy>;
}> = ({
	loading,
	error,
	sortedField,
	setPolicies,
	setSorted,
	sorted,
	sortedPolicies,
	requestSort,
	active,
	currentPolicies,
}) => {
	useEffect(() => {
		if (sortedField) {
			setPolicies(sortedPolicies);
			setSorted(!sorted);
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
						sorted={sorted}
						active={active}
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
