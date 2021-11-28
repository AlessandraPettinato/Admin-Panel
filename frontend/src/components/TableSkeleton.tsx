import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_GET_ALL_POLICIES } from "../queries/Policies";
import { Policy } from "../types/Types";

import TableRow from "./TableRow";
import TableHead from "./TableHead";

const Table: React.FC = () => {
	const { loading, error, data } = useQuery(QUERY_GET_ALL_POLICIES);

	const [policies, setPolicies] = useState([]);

	const [sortedField, setSortedField] = useState("");

	let sortedPolicies: any = [...policies];
	console.log("This is the copy sortedPolicies:", sortedPolicies);
	if (sortedField !== "") {
		sortedPolicies.sort((a: any, b: any) => {
			var lastNameA = a.customer.lastName.toUpperCase();
			var lastNameB = b.customer.lastName.toUpperCase();
			console.log(
				"These are what's compared in the function:",
				lastNameB,
				" and ",
				lastNameA
			);
			if (lastNameA < lastNameB) {
				return -1;
			}
			if (lastNameA > lastNameB) {
				return 1;
			}
			return 0;
		});
	}

	useEffect(() => {
		if (!loading && data) {
			setPolicies(data.getAllPolicies.results);
		}
	}, [loading, data]);

	if (loading) return <p>Give it a minute</p>;
	if (error) return <p>Something's wrong: {error.message}</p>;

	return (
		<>
			<div className="flex flex-col ">
				<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"></div>
						<table className="min-w-full divide-y divide-gray-200 border-collapse border">
							<TableHead setSortedField={setSortedField} />
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
		</>
	);
};

export default Table;
