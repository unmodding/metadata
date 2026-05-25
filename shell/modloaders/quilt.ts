import { Quilt } from '../../src/_index.ts';
import { writeLoaderSync } from '../lib.ts';

export const quilt = async (): Promise<void> => {
	writeLoaderSync('modloader', 'quilt', await Quilt.getBindings());

	console.log('Quilt synced');
};
