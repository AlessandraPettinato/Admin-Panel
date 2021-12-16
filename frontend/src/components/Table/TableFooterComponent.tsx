import { TableFooter, Button, TableRow, TableCell } from "@mui/material";

import useStyleDashboard from "../styles/useStylesDashboard";

const Pagination: React.FC<{
	policiesPerPage: number;
	totalPolicies: number;
	paginate: Function;
}> = ({ policiesPerPage, totalPolicies, paginate }) => {
	const classes = useStyleDashboard();

	const pageNumbers: Array<number> = [];

	for (let i = 1; i <= Math.ceil(totalPolicies / policiesPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<TableFooter className={classes.tableFooter}>
			<TableRow>
				{pageNumbers.map((number, index) => (
					<TableCell key={index} className={classes.tableCellFooter}>
						<Button
							key={index}
							variant="outlined"
							className={classes.button}
							onClick={() => paginate(number)}
							aria-current="page"
						>
							{number}
						</Button>
					</TableCell>
				))}
			</TableRow>
		</TableFooter>
	);
};

export default Pagination;
