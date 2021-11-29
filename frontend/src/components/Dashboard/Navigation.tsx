import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const Navigation: React.FC = () => {
	const [dropDown, setDropDown] = useState(false);

	const handleClickDropdown = () => {
		setDropDown(!dropDown);
	};

	return (
		<nav className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
			<div className="flex flex-wrap items-center">
				<div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
					<a href="#">
						<span className="text-xl pl-2">
							<i className="em em-grinning"></i>
						</span>
					</a>
				</div>

				<div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
					<span className="relative w-full">
						<input
							type="search"
							placeholder="Search"
							className="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pl-10 appearance-none leading-normal"
						/>
						<div
							className="absolute search-icon"
							style={{ top: "1rem", left: "30rem" }}
						>
							<BiSearch />
						</div>
					</span>
				</div>

				<div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
					<ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
						<li className="flex-1 md:flex-none md:mr-3">
							<div className="relative inline-block text-white">Admin</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
