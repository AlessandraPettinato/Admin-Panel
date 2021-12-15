import TableFooter from "@mui/material/TableFooter";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import TableCell from "@mui/material/TableCell";

const Pagination: React.FC<{
	policiesPerPage: number;
	totalPolicies: number;
	paginate: Function;
}> = ({ policiesPerPage, totalPolicies, paginate }) => {
	const pageNumbers: Array<number> = [];

	for (let i = 1; i <= Math.ceil(totalPolicies / policiesPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<TableFooter
			style={{
				display: "flex",
				justifyContent: "center",
				border: "none",
			}}
		>
			<TableRow style={{ border: "none" }}>
				{pageNumbers.map((number) => (
					<TableCell key={number}>
						<button
							onClick={() => paginate(number)}
							aria-current="page"
							className="z-10 bg-white border-gray-200 text-blue-400 hover:text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
						>
							{number}
						</button>
					</TableCell>
				))}
			</TableRow>
		</TableFooter>
	);
};

export default Pagination;
