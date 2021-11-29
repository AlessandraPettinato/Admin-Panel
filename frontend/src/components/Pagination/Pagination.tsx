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
		<nav>
			<ul>
				{pageNumbers.map((number) => (
					<li key={number}>
						<a onClick={() => paginate(number)} href="/#">
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
