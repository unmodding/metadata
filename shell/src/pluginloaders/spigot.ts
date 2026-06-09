import { Spigot } from '../../../src/_index.ts';
import { writeLoaderSync } from '../lib.ts';

export const spigot = async () => {
	writeLoaderSync('pluginloader', 'spigot', await Spigot.getBindings());

	console.log('Spigot synced');
};
