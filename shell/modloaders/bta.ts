import { BTA } from '../../src/_index.ts';
import { writeLoaderSync } from '../lib.ts';

export const bta = async (): Promise<void> => {
	writeLoaderSync('modloader', 'bta', await BTA.getBindings());

	console.log('Bta synced');
};
