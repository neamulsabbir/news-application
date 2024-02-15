import useNewsQuery from "../../../../CustomHook/useNewsQuery ";
import { NewsCards } from "../../../../SharedFolder";

export const EntertainmentNewsList = () => {
	const { newsData, loading } = useNewsQuery("entertainment");
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
