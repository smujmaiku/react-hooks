import { useRef, useEffect } from 'react';
import { UseTimedCallback, useTimedCallback } from './use-timed-callback';

/**
 * Call a function on an animation frames
 * @param callback Callback function
 * @param userDataInit User defined data provied in callback event
 */
export function useAnimationFrame<T = unknown>(callback: UseTimedCallback<T>, userDataInit = undefined as T) {
	const ref = useRef(callback);
	ref.current = callback;

	const timedCallback = useTimedCallback(callback, userDataInit);

	useEffect(() => {
		let cancel = false;

		const render = () => {
			if (cancel) return;
			requestAnimationFrame(render);
			timedCallback();
		}
		requestAnimationFrame(render);

		return () => {
			cancel = true;
		}
	}, [timedCallback]);
}

export default useAnimationFrame;
