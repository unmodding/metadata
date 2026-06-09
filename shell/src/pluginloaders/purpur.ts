import { Purpur } from '../../../src/_index.ts';
import { writeLoaderSync } from '../lib.ts';

export const purpur = async () => {
	writeLoaderSync('pluginloader', 'purpur', await Purpur.getBindings());

	console.log('Purpur synced');
};
