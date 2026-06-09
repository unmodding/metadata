import { Waterfall } from '../../../src/_index.ts';
import { writeLoaderSync } from '../lib.ts';

export const waterfall = async (): Promise<void> => {
	writeLoaderSync('proxyserver', 'waterfall', await Waterfall.getBindings());

	console.log('Waterfall synced');
};
