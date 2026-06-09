import { RisugamisModLoader } from '../../../src/_index.ts';
import { writeLoaderSync } from '../lib.ts';

export const risugamisModLoader = async (): Promise<void> => {
	writeLoaderSync('modloader', 'risugamismodloader', await RisugamisModLoader.getBindings());

	console.log('ModLoader synced');
};
