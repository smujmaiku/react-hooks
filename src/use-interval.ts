import { useEffect, useRef } from 'react';
import { UseTimedCallback, useTimedCallback } from './use-timed-callback';

export function useInterval<T = unknown>(callback: UseTimedCallback<T>, delay: number, userDataInit = undefined as T) {
	const ref = useRef(callback);
	ref.current = callback;

	const timedCallback = useTimedCallback(callback, userDataInit);

	useEffect(() => {
		const timer = setInterval(timedCallback, delay);

		return () => {
			clearInterval(timer);
		}
	}, [delay, timedCallback]);
}

export default useInterval;
