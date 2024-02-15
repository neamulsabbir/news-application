import { useState } from "react";
import {
	BusinessNewsList,
	EntertainmentNewsList,
	GeneralNewsList,
	HealthNewsList,
	HomeNewsList,
	ScienceNewsList,
	SportsNewsList,
	TechnologyNewsList,
} from "./NewsLists";
import { tabData } from "./constants";

export const NewsItem = () => {
	const [active, setActive] = useState("Home");

	return (
		<div>
			<div className="mx-auto  ">
				<ul className="flex flex-wrap items-center justify-center gap-5  border-b border-black  pb-6 md:pb-8">
					{tabData.map(({ type }, i) => (
						<div key={i}>
							<div
								className={`text-xs font-semibold lg:text-base ${active === type && "text-[#00D991]"}`}
							>
								<div onClick={() => setActive(type)}>
									<a href="#">{type}</a>
								</div>
							</div>
						</div>
					))}
				</ul>
			</div>
			<div className="container my-10 lg:my-14">
				{active === "Home" && <HomeNewsList />}
				{active === "General" && <GeneralNewsList />}
				{active === "Business" && <BusinessNewsList />}
				{active === "Entertainment" && <EntertainmentNewsList />}
				{active === "Health" && <HealthNewsList />}
				{active === "Science" && <ScienceNewsList />}
				{active === "Sports" && <SportsNewsList />}
				{active === "Technology" && <TechnologyNewsList />}
			</div>
		</div>
	);
};
