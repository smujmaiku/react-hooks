import { useEffect, useRef } from 'react';
import { UseTimedCallback, useTimedCallback } from './use-timed-callback';

/**
 * Call a function on an interval
 * @param callback Callback function
 * @param delay Interval in ms
 * @param userDataInit User defined data provied in callback event
 * @example
 * useInterval(({ count }) => {
 *   console.log(count);
 * }, 1000);
 */
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
