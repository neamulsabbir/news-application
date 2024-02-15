import useNewsQuery from "../../../../CustomHook/useNewsQuery ";
import { NewsCards } from "../../../../SharedFolder";

export const HomeNewsList = () => {
	const { newsData, loading } = useNewsQuery("");
	console.log(newsData);

	return (
		<>
			{loading ? (
				<p>Loading......</p>
			) : newsData?.articles && newsData.articles.length > 0 ? (
				<div>
					{newsData?.articles?.map((data, i) => (
						<NewsCards key={i} data={data} i={i} />
					))}
				</div>
			) : (
				<h1>No Data found</h1>
			)}
		</>
	);
};

// {i === 1 && (
// 	<div className="col-span-12 grid grid-cols-12 gap-4">
// 		<div className="col-span-12 lg:col-span-4">
// 			<a href="#">
// 				<h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
// 					{news?.title}
// 				</h3>
// 			</a>
// 			<p className="text-base text-[#5C5955]">{news?.description}</p>
// 			<p className="mt-5 text-base text-[#5C5955]">1 hour ago</p>
// 		</div>

// 		<div className="col-span-12 lg:col-span-8">
// 			<img className="w-full" src={news?.urlToImage} alt="thumb" />
// 			<p className="mt-5 text-base text-[#5C5955]">{news?.author}</p>
// 		</div>
// 	</div>
// )}

// {i === 2 && (
// 	<>
// 		<div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
// 			<div className="col-span-12 md:col-span-6">
// 				<a href="">
// 					<h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
// 						{news?.title}
// 					</h3>
// 				</a>
// 				<p className="text-base text-[#292219]">{news?.description}</p>
// 				<p className="mt-5 text-base text-[#5C5955]">1 hour ago</p>
// 			</div>
// 			<div className="col-span-12 md:col-span-6">
// 				<img className="w-full" src={news?.urlToImage} alt="thumb" />
// 			</div>
// 		</div>

// 		<div className="col-span-12 md:col-span-6 lg:col-span-4">
// 			<div className="col-span-12 md:col-span-4">
// 				<a href="#">
// 					<h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
// 						Spac led by tech founders targets Europe’s unicorns for US
// 						listings
// 					</h3>
// 				</a>
// 				<p className="text-base text-[#292219]">
// 					Tailwind International looks to bypass EU and UK markets to build a
// 					European tech franchise
// 				</p>
// 				<p className="mt-5 text-base text-[#94908C]">Yesterday</p>
// 			</div>
// 		</div>
// 	</>
// )}
// {i > 3 && (
// 	<div className="col-span-12 md:col-span-6 lg:col-span-4">
// 		<div className="col-span-12 md:col-span-4">
// 			<a href="#">
// 				<h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
// 					Spac led by tech founders targets Europe’s unicorns for US listings
// 				</h3>
// 			</a>
// 			<p className="text-base text-[#292219]">
// 				Tailwind International looks to bypass EU and UK markets to build a
// 				European tech franchise
// 			</p>
// 			<p className="mt-5 text-base text-[#94908C]">Yesterday</p>
// 		</div>
// 	</div>
// )}
