import { TableCell, TableHead, TableRow } from "@mui/material";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

import { TableHeadFields } from "./data/TableHeadFields";

const TableHeadComponent: React.FC<{
	requestSort: Function;
	activeField: string;
	setActiveField: Function;
	sortedField: any;
}> = ({ requestSort, activeField, setActiveField, sortedField }) => {
	return (
		<>
			<TableHead>
				<TableRow>
					{TableHeadFields.map((item, index) => {
						return (
							<TableCell
								style={{
									textTransform: "uppercase",
									color: "slategrey",
									whiteSpace: "nowrap",
								}}
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
								<div>
									{item.sortField === activeField &&
									sortedField.direction === "ascending" ? (
										<TiArrowSortedUp />
									) : (
										item.sortField === activeField &&
										sortedField.direction === "descending" && (
											<TiArrowSortedDown />
										)
									)}
								</div>
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
