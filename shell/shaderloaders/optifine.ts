import { Optifine } from '../../src/_index.ts';
import { writeLoaderSync } from '../lib.ts';

export const optifine = async (): Promise<void> => {
	writeLoaderSync('shaderloader', 'optifine', await Optifine.getBindings());

	console.log('Optifine synced');
};
