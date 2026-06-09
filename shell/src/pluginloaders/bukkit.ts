import { Bukkit } from '../../../src/_index.ts';
import { writeLoaderSync } from '../lib.ts';

export const bukkit = async (): Promise<void> => {
	writeLoaderSync('pluginloader', 'bukkit', await Bukkit.getBindings());

	console.log('Bukkit synced');
};
