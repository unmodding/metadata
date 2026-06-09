import { Folia } from '../../../src/_index.ts';
import { writeLoaderSync } from '../lib.ts';

export const folia = async (): Promise<void> => {
	writeLoaderSync('pluginloader', 'folia', await Folia.getBindings());

	console.log('Folia synced');
};
