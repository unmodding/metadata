import { z } from 'zod';

export const shaderLoaders = [
	'vanilla',
	/*  */
	'canvas',
	'iris',
	'optifine',
] as const satisfies string[];

export type ShaderLoader = (typeof shaderLoaders)[number];

export const shaderLoaderValidator = z.enum(shaderLoaders);
