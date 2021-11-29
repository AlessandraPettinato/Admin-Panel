const Pagination: React.FC<{
	policiesPerPage: number;
	totalPolicies: number;
	paginate: Function;
}> = ({ policiesPerPage, totalPolicies, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPolicies / policiesPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav
			className="z-0 inline-flex justify-evenly items-center rounded-md shadow-sm -space-x-px"
			aria-label="Pagination"
		>
			<ul className="flex">
				{pageNumbers.map((number) => (
					<li key={number}>
						<button
							onClick={() => paginate(number)}
							aria-current="page"
							className="z-10 bg-white border-blue-400 text-blue-400 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
						>
							{number}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
