import { useRef, useMemo } from 'react';

export interface UseTimedCallbackEventI<T = unknown> {
	readonly first: boolean;
	readonly count: number;
	readonly start: number;
	readonly previous: number;
	readonly now: number;
	readonly duration: number;
	userData: T;
}

export type UseTimedCallback<T = unknown> = (event: UseTimedCallbackEventI<T>) => void;

export function useTimedCallback<T = unknown>(callback: UseTimedCallback<T>, userDataInit = undefined as T): () => void {
	const ref = useRef(callback);
	ref.current = callback;
	const userDataInitRef = useRef(userDataInit);

	return useMemo(() => {
		const start = Date.now();
		let count = 1;
		let previous = start;
		let userData = userDataInitRef.current;

		return () => {
			const now = Date.now();
			const event = {
				first: start === previous,
				count,
				start,
				previous,
				now,
				duration: now - previous,
				userData,
			}

			if (ref.current) {
				ref.current(event);
				userData = event.userData;
				previous = now;
				count += 1;
			}
		}
	}, []);
}