import { useState } from "react";

import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

import { TableHeadFields } from "./TableHeadFields";

const TableHead: React.FC<{ requestSort: any }> = ({ requestSort }) => {
	const [sorted, setSorted] = useState(false);
	return (
		<>
			<thead className="bg-gray-50">
				<tr>
					{TableHeadFields.map((item, index) => {
						return (
							<th
								key={index}
								scope="col"
								className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider whitespace-pre"
								onClick={() => requestSort(item.sortField)}
							>
								{item.fieldName}
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
