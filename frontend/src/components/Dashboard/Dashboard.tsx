import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_GET_ALL_POLICIES } from "../../queries/Policies";
import { Policy } from "../../types/Types";

import Navigation from "./Navigation";
import Table from "../Table/TableSkeleton";
import Pagination from "../Pagination/Pagination";

const Dashboard: React.FC = () => {
	const { loading, error, data } = useQuery(QUERY_GET_ALL_POLICIES);

	const [policies, setPolicies] = useState<Array<Policy>>([]);

	const [sortedField, setSortedField] = useState({
		key: "",
		direction: "",
	});
	const [sorted, setSorted] = useState<boolean>(false);
	const [active, setActive] = useState<string>("");

	const [currentPage, setCurrentPage] = useState<number>(1);
	const [policiesPerPage] = useState<number>(5);

	const indexOfLastPolicy = currentPage * policiesPerPage;
	const indexOfFirstPolicy = indexOfLastPolicy - policiesPerPage;

	const currentPolicies = policies.slice(indexOfFirstPolicy, indexOfLastPolicy);

	const paginate = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

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

	useEffect(() => {
		if (!loading && data) {
			setPolicies(data.getAllPolicies.results);
		}
	}, [loading, data]);

	return (
		<div className="flex flex-col justify-center items-center bg-white font-sans leading-normal tracking-normal mt-12 h-screen">
			<Navigation />
			<Table
				loading={loading}
				error={error}
				sortedField={sortedField}
				setPolicies={setPolicies}
				sorted={sorted}
				setSorted={setSorted}
				sortedPolicies={sortedPolicies}
				requestSort={requestSort}
				active={active}
				currentPolicies={currentPolicies}
			/>
			<Pagination
				policiesPerPage={policiesPerPage}
				totalPolicies={policies.length}
				paginate={paginate}
			/>
		</div>
	);
};

export default Dashboard;
