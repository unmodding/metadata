import { Velocity } from '../../../src/_index.ts';
import { writeLoaderSync } from '../lib.ts';

export const velocity = async (): Promise<void> => {
	writeLoaderSync('proxyserver', 'velocity', await Velocity.getBindings());

	console.log('Velocity synced');
};
