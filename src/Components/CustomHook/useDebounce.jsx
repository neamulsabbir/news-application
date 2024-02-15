import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
	console.log(value);
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => clearTimeout(timeout);
	}, [value, delay]);

	return debouncedValue;
};
export default useDebounce;
