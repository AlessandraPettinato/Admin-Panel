import { useState, useEffect, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_GET_ALL_POLICIES } from "../../queries/Policies";
import { Policy } from "../../types/Types";

import TableRow from "./TableRow";
import TableHead from "./TableHead";
import { TableHeadFields } from "./TableHeadFields";

const Table: React.FC = () => {
	const { loading, error, data } = useQuery(QUERY_GET_ALL_POLICIES);

	const [policies, setPolicies] = useState([]);

	const [sortedField, setSortedField] = useState({
		key: "",
		direction: "",
	});

	let sortedPolicies: any = [...policies];

	sortedPolicies.sort((a: any, b: any) => {
		let lastNameA = a.customer.lastName.toUpperCase();
		let lastNameB = b.customer.lastName.toUpperCase();
		if (lastNameA < lastNameB) {
			return sortedField.direction === "ascending" ? -1 : 1;
		}
		if (lastNameA > lastNameB) {
			return sortedField.direction === "ascending" ? 1 : -1;
		}
		return 0;
	});

	const requestSort = (key: any) => {
		let direction = "ascending";
		if (sortedField.key === key && sortedField.direction === "ascending") {
			direction = "descending";
		}
		setSortedField({ key, direction });
	};

	useEffect(() => {
		if (!loading && data) {
			setPolicies(data.getAllPolicies.results);
		}
	}, [loading, data]);

	useEffect(() => {
		if (sortedField) {
			setPolicies(sortedPolicies);
		}
	}, [sortedField]);

	if (loading) return <p>Give it a minute</p>;
	if (error) return <p>Something's wrong: {error.message}</p>;

	return (
		<div className="flex flex-col ">
			<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"></div>
			<table className="min-w-full divide-y divide-gray-200 border-collapse border">
				<TableHead requestSort={requestSort} />
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
	);
};

export default Table;
