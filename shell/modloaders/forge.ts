import { Forge } from '../../src/_index.ts';
import { writeLoaderSync } from '../lib.ts';

export const forge = async (): Promise<void> => {
	writeLoaderSync('modloader', 'forge', await Forge.getBindings());

	console.log('Forge synced');
};
