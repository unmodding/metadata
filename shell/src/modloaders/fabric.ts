import { Fabric } from '../../../src/_index.ts';
import { writeLoaderSync } from '../lib.ts';

export const fabric = async (): Promise<void> => {
	writeLoaderSync('modloader', 'fabric', await Fabric.getBindings());

	console.log('Fabric synced');
};
