import { Babric } from '../../src/_index.ts';
import { writeLoaderSync } from '../lib.ts';

export const babric = async (): Promise<void> => {
	writeLoaderSync('modloader', 'babric', await Babric.getBindings());

	console.log('Babric synced');
};
