import { z } from 'zod';

export const modLoaders = [
	'vanilla',
	'java-agent',
	/*  */
	'babric',
	'bta-babric',
	'fabric',
	'forge',
	'legacyfabric',
	'liteloader',
	'modloader',
	'neoforge',
	'nilloader',
	'ornithe',
	'quilt',
	'rift',
] as const satisfies string[];

export type ModLoader = (typeof modLoaders)[number];

export const modLoaderValidator = z.enum(modLoaders);
