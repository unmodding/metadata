import { Iris } from '../../src/_index.ts';
import { writeLoaderSync } from '../lib.ts';

export const iris = async (): Promise<void> => {
	writeLoaderSync('shaderloader', 'iris', await Iris.getBindings());

	console.log('Iris synced');
};
