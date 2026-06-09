import { Ornithe } from '../../../src/_index.ts';
import { writeLoaderSync } from '../lib.ts';

export const ornithe = async (): Promise<void> => {
	writeLoaderSync('modloader', 'ornithe', await Ornithe.getBindings());

	console.log('Ornithe synced');
};
