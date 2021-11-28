import { useState } from "react";

import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

const TableHead: React.FC<{ setSortedField: any }> = ({ setSortedField }) => {
	const [sorted, setSorted] = useState(false);
	return (
		<>
			<thead className="bg-gray-50">
				<tr>
					<th
						scope="col"
						className="flex px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
						onClick={() => setSortedField("lastName")}
					>
						Customer
						{!sorted ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
					</th>
					{/* <th
						scope="col"
						className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
					>
						Date of Birth
					</th> */}
					<th
						scope="col"
						className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
					>
						Insurance Type
					</th>
					<th
						scope="col"
						className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
					>
						Policy Number
					</th>
					<th
						scope="col"
						className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
					>
						Status
					</th>
					<th
						scope="col"
						className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
					>
						Provider
					</th>
					<th
						scope="col"
						className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
					>
						Start Date
					</th>
					<th
						scope="col"
						className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
					>
						End Date
					</th>
					<th
						scope="col"
						className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
					>
						Created At
					</th>
					<th className="sr-only">Edit</th>
				</tr>
			</thead>
		</>
	);
};

export default TableHead;
