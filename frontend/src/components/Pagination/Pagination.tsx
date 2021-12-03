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
		<div className="mt-2 flex flex-col">
			<div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
				<div className="py-2 align-middle inline-block min-w-full pt-6">
					<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
						<nav
							className="z-0 inline-flex justify-evenly items-center rounded-md shadow-sm -space-x-px cursor-pointer
							"
							aria-label="Pagination"
						>
							<ul className="flex">
								{pageNumbers.map((number) => (
									<li key={number}>
										<button
											onClick={() => paginate(number)}
											aria-current="page"
											className="z-10 bg-white border-gray-200 text-blue-400 hover:text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
										>
											{number}
										</button>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pagination;
