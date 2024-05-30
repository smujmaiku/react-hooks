import { useState } from 'react';
import useInterval from './use-interval';

/**
 * Flips between true and false on a delay
 * @param delay Interval in ms
 * @param initState Initial state
 * @returns Current value
 * @example
 * const blink = useBlink(500, true);
 */
export function useBlink(delay: number, initState = false): boolean {
	const [blink, setBlink] = useState(initState);

	useInterval(() => {
		setBlink((current) => !current);
	}, delay);

	return blink;
}

export default useBlink;
