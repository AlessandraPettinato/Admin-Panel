import { TableFooter, Button, TableCell } from "@mui/material";

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
		<TableFooter style={{ display: "flex", padding: "0.5rem" }}>
			{pageNumbers.map((number, index) => (
				<Button
					key={index}
					variant="outlined"
					style={{
						borderColor: "#16161d",
						color: "#16161d",
						margin: "0.5rem",
					}}
					onClick={() => paginate(number)}
					aria-current="page"
				>
					{number}
				</Button>
			))}
		</TableFooter>
	);
};

export default Pagination;
