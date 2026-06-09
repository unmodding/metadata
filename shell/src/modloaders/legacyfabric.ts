import { LegacyFabric } from '../../../src/_index.ts';
import { writeLoaderSync } from '../lib.ts';

export const legacyFabric = async (): Promise<void> => {
	writeLoaderSync('modloader', 'legacyfabric', await LegacyFabric.getBindings());

	console.log('LegacyFabric synced');
};
