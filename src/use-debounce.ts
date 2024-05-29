import { useEffect, useState } from 'react';

export function useDebounce<T = unknown>(value: T, delay: number, initialValue = undefined as T): T {
	const [state, setState] = useState(initialValue);

	useEffect(() => {
		const timer = setTimeout(() => setState(value), delay);

		return () => {
			clearTimeout(timer);
		};
	}, [value, delay]);

	return state;
}

export default useDebounce;