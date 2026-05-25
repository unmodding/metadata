import { NilLoader } from '../../src/_index.ts';
import { writeLoaderSync } from '../lib.ts';

export const nilLoader = async (): Promise<void> => {
	writeLoaderSync('modloader', 'nilloader', await NilLoader.getBindings());

	console.log('NilLoader synced');
};
