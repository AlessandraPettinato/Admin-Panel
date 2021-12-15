import { Button, TableCell } from "@mui/material";

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
		<>
			{pageNumbers.map((number, index) => (
				<TableCell style={{ border: "none" }}>
					<Button
						key={index}
						variant="outlined"
						style={{
							borderColor: "darkblue",
							color: "darkblue",
						}}
						onClick={() => paginate(number)}
						aria-current="page"
					>
						{number}
					</Button>
				</TableCell>
			))}
		</>
	);
};

export default Pagination;
