import { LiteLoader } from '../../src/_index.ts';
import { writeLoaderSync } from '../lib.ts';

export const liteLoader = async (): Promise<void> => {
	writeLoaderSync('modloader', 'liteloader', await LiteLoader.getBindings());

	console.log('LiteLoader synced');
};
