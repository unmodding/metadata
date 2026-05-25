import { Rift } from '../../src/_index.ts';
import { writeLoaderSync } from '../lib.ts';

export const rift = async (): Promise<void> => {
	writeLoaderSync('modloader', 'rift', await Rift.getBindings());

	console.log('Rift synced');
};
