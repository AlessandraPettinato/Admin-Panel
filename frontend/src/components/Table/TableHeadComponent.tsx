import { TableCell, TableHead, TableRow, Container, Box } from "@mui/material";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

import useStyleTable from "./styles/useStylesTable";

import { TableHeadFields } from "./data/TableHeadFields";

const TableHeadComponent: React.FC<{
	requestSort: Function;
	activeField: string;
	setActiveField: Function;
	sortedField: any;
}> = ({ requestSort, activeField, setActiveField, sortedField }) => {
	const classes = useStyleTable();

	return (
		<>
			<TableHead>
				<TableRow>
					{TableHeadFields.map((item, index) => {
						return (
							<TableCell
								className={classes.tableCell}
								align="left"
								component="th"
								scope="col"
								key={index}
								onClick={(e) => {
									setActiveField(item.sortField);
									requestSort(item.sortField);
								}}
							>
								{item.fieldName}
								<Box className={classes.boxHead}>
									{item.sortField === activeField &&
									sortedField.direction === "ascending" ? (
										<TiArrowSortedUp className={classes.arrow} />
									) : (
										item.sortField === activeField &&
										sortedField.direction === "descending" && (
											<TiArrowSortedDown className={classes.arrow} />
										)
									)}
								</Box>
							</TableCell>
						);
					})}

					<TableCell align="left" />
				</TableRow>
			</TableHead>
		</>
	);
};

export default TableHeadComponent;
