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
			className="relative z-0 inline-flex justify-evenly items-center rounded-md shadow-sm -space-x-px"
			aria-label="Pagination"
		>
			<ul>
				{pageNumbers.map((number) => (
					<li key={number}>
						<a
							onClick={() => paginate(number)}
							href="/#"
							aria-current="page"
							className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
						>
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
