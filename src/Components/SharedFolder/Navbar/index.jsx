import { useState } from "react";
import useNewsQuery from "../../CustomHook/useNewsQuery ";
import { WorldIcon } from "../../icons";

export const Navbar = () => {
	const [showInput, setShowInput] = useState(false);
	const [value, setValue] = useState("");
	// eslint-disable-next-line no-unused-vars
	const text = useNewsQuery(`${value}`);
	return (
		<nav className="py-6 md:py-8">
			<div className="container mx-auto grid grid-cols-3 items-center justify-between gap-6">
				<div className="flex items-center space-x-4">
					<WorldIcon />
					<span>Thursday, February 25, 2021</span>
				</div>
				<a href="/" className="flex justify-center">
					<img className="max-w-[100px] md:max-w-[165px] " src="./logo.png" alt="Lws" />
				</a>
				<div className="flex justify-end">
					<div className="flex items-center  relative">
						<img
							className="cursor-pointer z-10"
							src="./icons/search.svg"
							onClick={() => setShowInput(!showInput)}
						/>
						{showInput && (
							<input
								onChange={(e) => setValue(e.target.value)}
								className="border border-gray-300 pl-2 pr-8 py-1 rounded absolute right-[-30%]"
								placeholder="Search your news.."
								type="text"
							/>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};
