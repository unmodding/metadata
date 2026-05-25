import { Sponge } from '../../src/_index.ts';
import { writeLoaderSync } from '../lib.ts';

export const sponge = async () => {
	writeLoaderSync('pluginloader', 'sponge', await Sponge.getBindings());

	console.log('Sponge synced');
};
