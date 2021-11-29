import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_GET_ALL_POLICIES } from "../../queries/Policies";
import { Policy } from "../../types/Types";

import TableRow from "./TableRow";
import TableHead from "./TableHead";
import Pagination from "../Pagination/Pagination";

const Table: React.FC = () => {
	const { loading, error, data } = useQuery(QUERY_GET_ALL_POLICIES);

	const [policies, setPolicies] = useState([]);

	const [sortedField, setSortedField] = useState({
		key: "",
		direction: "",
	});
	const [sorted, setSorted] = useState<boolean>(false);
	const [active, setActive] = useState<string>("");

	const [currentPage, setCurrentPage] = useState<number>(1);
	const [policiesPerPage] = useState<number>(5);

	let sortedPolicies: any = [...policies];

	sortedPolicies.sort((a: any, b: any) => {
		if (sortedField.key === "lastName") {
			let lastNameA = a.customer.lastName.toUpperCase();
			let lastNameB = b.customer.lastName.toUpperCase();
			if (lastNameA < lastNameB) {
				return sortedField.direction === "ascending" ? -1 : 1;
			}
			if (lastNameA > lastNameB) {
				return sortedField.direction === "ascending" ? 1 : -1;
			}
			return 0;
		} else {
			if (a[sortedField.key] < b[sortedField.key]) {
				return sortedField.direction === "ascending" ? -1 : 1;
			}
			if (a[sortedField.key] > b[sortedField.key]) {
				return sortedField.direction === "ascending" ? 1 : -1;
			}
			return 0;
		}
	});

	const requestSort = (key: any) => {
		let direction = "ascending";
		if (sortedField.key === key && sortedField.direction === "ascending") {
			direction = "descending";
		}
		setSortedField({ key, direction });
		setActive(sortedField.key);
	};

	const indexOfLastPolicy = currentPage * policiesPerPage;
	const indexOfFirstPolicy = indexOfLastPolicy - policiesPerPage;

	const currentPolicies = policies.slice(indexOfFirstPolicy, indexOfLastPolicy);

	const paginate = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	useEffect(() => {
		if (!loading && data) {
			setPolicies(data.getAllPolicies.results);
		}
	}, [loading, data]);

	useEffect(() => {
		if (sortedField) {
			setPolicies(sortedPolicies);
			setSorted(!sorted);
		}
	}, [sortedField]);

	console.log("This is currentPolicies:", currentPolicies);

	if (loading) return <p>Give it a minute</p>;
	if (error) return <p>Something's wrong: {error.message}</p>;

	return (
		<div className="flex flex-col ">
			<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"></div>
			<table className="min-w-full divide-y divide-gray-200 border-collapse border">
				<TableHead requestSort={requestSort} sorted={sorted} active={active} />
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
			<Pagination
				policiesPerPage={policiesPerPage}
				totalPolicies={policies.length}
				paginate={paginate}
			/>
		</div>
	);
};

export default Table;
