import { useState, useEffect, ChangeEventHandler, useContext } from "react";
import { useQuery } from "@apollo/client";

import { QUERY_GET_ALL_POLICIES } from "../../queries/Policies";
import { AuthContext } from "../../context/auth-context";
import { Policy } from "../../types/Types";

import MenuBar from "./MenuBar";
import Table from "../Table/TableSkeleton";
import Pagination from "../Pagination/Pagination";

const Dashboard: React.FC = () => {
	const { user } = useContext(AuthContext);

	const { loading, error, data } = useQuery(QUERY_GET_ALL_POLICIES);

	// const [policies, setPolicies] = useState<Array<Policy>>([]);

	const [sortedField, setSortedField] = useState({
		key: "",
		direction: "",
	});

	const [activeField, setActiveField] = useState<string>("");

	const [currentPage, setCurrentPage] = useState<number>(1);
	const [policiesPerPage] = useState<number>(5);

	const [searchTerm, setSearchTerm] = useState<string>("");

	if (loading)
		return (
			<div className="flex justify-center items-center">
				<div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-400" />
			</div>
		);

	if (!data?.getAllPolicies?.results) return <p>No data</p>;

	const policies = data.getAllPolicies.results;

	const indexOfLastPolicy: number = currentPage * policiesPerPage;

	const indexOfFirstPolicy: number = indexOfLastPolicy - policiesPerPage;

	const currentPolicies: Array<Policy> = policies.slice(
		indexOfFirstPolicy,
		indexOfLastPolicy
	);

	const paginate: Function = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	currentPolicies.sort((a: any, b: any) => {
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

	const requestSort: Function = (key: string) => {
		let direction = "ascending";
		if (sortedField.key === key && sortedField.direction === "ascending") {
			direction = "descending";
		}
		setSortedField({ key, direction });
	};

	const handleSearch: ChangeEventHandler<HTMLInputElement> = (e: any) => {
		setSearchTerm(e.target.value.trim());
	};

	const filteredPolicies = currentPolicies.filter((policy: any) => {
		if (searchTerm === "") {
			return policy;
		} else {
			for (let values of Object.values(policy)) {
				if (typeof values === "object") {
					let { firstName, lastName }: any = values;
					if (
						firstName.toUpperCase().includes(searchTerm.toUpperCase()) ||
						lastName.toUpperCase().includes(searchTerm.toUpperCase())
					) {
						return policy;
					}
				} else if (typeof values === "string") {
					if (values.toUpperCase().includes(searchTerm.toUpperCase())) {
						return policy;
					}
				}
			}
		}
	});

	// useEffect(() => {
	// 	if (!loading && data) {
	// 		setPolicies(data.getAllPolicies.results);
	// 	}
	// }, [loading, data]);

	return (
		<>
			{user && (
				<div className="flex flex-col justify-center items-center bg-white font-sans leading-normal tracking-normal h-screen">
					<>
						<MenuBar handleSearch={handleSearch} />
						{}
						<Table
							loading={loading}
							error={error}
							sortedField={sortedField}
							requestSort={requestSort}
							activeField={activeField}
							setActiveField={setActiveField}
							policies={filteredPolicies}
							searchTerm={searchTerm}
						/>
						{searchTerm === "" ? (
							<Pagination
								policiesPerPage={policiesPerPage}
								totalPolicies={policies.length}
								paginate={paginate}
							/>
						) : null}
					</>
				</div>
			)}
		</>
	);
};

export default Dashboard;
