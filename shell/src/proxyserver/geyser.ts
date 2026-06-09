import { Geyser } from '../../../src/_index.ts';
import { writeLoaderSync } from '../lib.ts';

export const geyser = async (): Promise<void> => {
	writeLoaderSync('proxyserver', 'geyser', await Geyser.getBindings());

	console.log('Geyser synced');
};
