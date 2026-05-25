import { Paper } from '../../src/_index.ts';
import { writeLoaderSync } from '../lib.ts';

export const paper = async (): Promise<void> => {
	writeLoaderSync('pluginloader', 'paper', await Paper.getBindings());

	console.log('Paper synced');
};
