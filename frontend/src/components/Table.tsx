import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_GET_ALL_POLICIES } from "../queries/Policies";

const Table: React.FC = () => {
	const { loading, error, data } = useQuery(QUERY_GET_ALL_POLICIES);

	const [policies, setPolicies] = useState([]);

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
			<div className="flex flex-col">
				<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"></div>
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-50">
								<tr>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Customer
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
									<span className="sr-only">Edit</span>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{policies.map((item: any, index: number) => {
									return (
										<tr key={index}>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
												{item.customer[0].firstName}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
												{item.provider}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
												{item.insuranceType}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
												{item.status}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
												{item.policyNumber}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
												{item.startDate}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
												{item.endDate}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
												{item.createdAt}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
												<a
													href="#"
													className="text-indigo-600 hover:text-indigo-900"
												>
													Edit
												</a>
											</td>
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
