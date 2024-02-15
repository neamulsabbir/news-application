import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

const useNewsQuery = (query) => {
	console.log(query);
	const [newsData, setNewsData] = useState([]);

	const [loading, setLoading] = useState(false);

	const getNewsAllData = async () => {
		try {
			setLoading(true);
			const res = await fetch("http://localhost:8000/v2/top-headlines");
			const data = await res.json();
			if (data?.status === "ok") {
				setNewsData(data);
			}
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (query === "") {
			getNewsAllData();
		}
	}, []);

	const getNewsCategory = async () => {
		try {
			setLoading(true);
			const res = await fetch(`http://localhost:8000/v2/top-headlines?category=${query}`);
			const d = await res.json();
			if (d?.status === "ok") {
				setNewsData(d);
			}
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (query !== "") {
			getNewsCategory();
		}
	}, [query]);

	const { debouncedValue } = useDebounce(query, 300);

	const getSearchNewsData = async () => {
		try {
			setLoading(true);
			const res = await fetch(`http://localhost:8000/v2/search?q=${debouncedValue}`);
			const d = await res.json();
			if (d?.status === "ok") {
				setNewsData(d);
			}
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (query !== "") {
			getSearchNewsData();
		}
	}, [query]);

	return { newsData, loading };
};

export default useNewsQuery;
