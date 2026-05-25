import { Canvas } from '../../src/_index.ts';
import { writeLoaderSync } from '../lib.ts';

export const canvas = async (): Promise<void> => {
	writeLoaderSync('shaderloader', 'canvas', await Canvas.getBindings());

	console.log('Canvas synced');
};
