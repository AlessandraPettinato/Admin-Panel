import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_GET_ALL_POLICIES } from "../queries/Policies";
import { Policy } from "../types/Types";

import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import TableRow from "./TableRow";

const Table: React.FC = () => {
	const { loading, error, data } = useQuery(QUERY_GET_ALL_POLICIES);

	const [policies, setPolicies] = useState([]);
	const [sorted, setSorted] = useState(false);
	const [sortedField, setSortedField] = useState("");

	let sortedPolicies: any = [...policies];
	console.log("This is the copy sortedPolicies:", sortedPolicies);
	if (sortedField !== "") {
		sortedPolicies.sort((a: any, b: any) => {
			var lastNameA = a.customer[0].lastName.toUpperCase();
			var lastNameB = b.customer[0].lastName.toUpperCase();
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
	}, [loading]);

	if (loading) return <p>Give it a minute</p>;
	if (error) return <p>Something's wrong: {error.message}</p>;

	console.log(policies);

	return (
		<>
			<div className="flex flex-col ">
				<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"></div>
						<table className="min-w-full divide-y divide-gray-200 border-collapse border">
							<thead className="bg-gray-50">
								<tr>
									<th
										scope="col"
										className="flex px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										onClick={() => setSortedField("lastName")}
									>
										Customer
										{!sorted ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Date of Birth
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Provider
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Insurance Type
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Status
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Policy Number
									</th>

									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Start Date
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										End Date
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Created At
									</th>
									<th className="sr-only">Edit</th>
								</tr>
							</thead>
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
