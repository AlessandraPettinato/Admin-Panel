import {
	TiArrowSortedUp,
	TiArrowSortedDown,
	TiArrowUnsorted,
} from "react-icons/ti";

import { TableHeadFields } from "./data/TableHeadFields";

const TableHead: React.FC<{
	requestSort: Function;
	// sorted: boolean;
	active: string;
	setActive: Function;
	sortedField: any;
}> = ({ requestSort, active, setActive, sortedField }) => {
	return (
		<>
			<thead className="bg-gray-50">
				<tr>
					{TableHeadFields.map((item, index) => {
						return (
							<th
								key={index}
								scope="col"
								className=" px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-pre"
								onClick={(e) => {
									setActive(item.sortField);
									requestSort(item.sortField);
								}}
							>
								{item.fieldName}
								<div className="inline-table align-text-bottom">
									{item.sortField === active &&
									sortedField.direction === "ascending" ? (
										<TiArrowSortedUp />
									) : (
										item.sortField === active &&
										sortedField.direction === "descending" && (
											<TiArrowSortedDown />
										)
									)}
								</div>
							</th>
						);
					})}
					<th className="sr-only">Edit</th>
				</tr>
			</thead>
		</>
	);
};

export default TableHead;
