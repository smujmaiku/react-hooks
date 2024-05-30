import { useEffect, useState } from 'react';

/**
 * Debounce a value
 * @param value Value to debounce
 * @param delay Delay in ms
 * @param initialValue Optional initial value 
 * @returns Debounced value
 * @example
 * const debouncedValue = useDebounce(value, 500);
 */
export function useDebounce<T = unknown>(value: T, delay: number, initialValue = undefined as T): T {
	const [state, setState] = useState(arguments.length > 2 ? initialValue : value);

	useEffect(() => {
		if (value === state) return;

		const timer = setTimeout(() => setState(value), delay);

		return () => {
			clearTimeout(timer);
		};
	}, [value, delay]);

	return state;
}

export default useDebounce;