import { BiSearch } from "react-icons/bi";

const Navigation: React.FC = () => {
	return (
		<nav className="bg-blue-400 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
			<div className="flex flex-wrap items-center">
				<div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white" />

				<div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2 py-4">
					<div className="relative">
						<input
							className="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none text-gray-600"
							placeholder="What are you looking for?"
						/>
						<div className="absolute top-5 right-3">
							<BiSearch style={{ color: "gray" }} />
						</div>
					</div>
				</div>

				<div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
					<ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
						<li className="flex-1 md:flex-none md:mr-3">
							<div className="relative inline-block text-white font-semibold pr-6 cursor-pointer">
								Admin
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
