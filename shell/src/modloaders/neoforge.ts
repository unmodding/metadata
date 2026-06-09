import { NeoForge } from '../../../src/_index.ts';
import { writeLoaderSync } from '../lib.ts';

export const neoForge = async (): Promise<void> => {
	writeLoaderSync('modloader', 'neoforge', await NeoForge.getBindings());

	console.log('NeoForge synced');
};
