import { z } from 'zod';

import type { ModLoader } from '../loaders/_index.js';

import { mrpackMcVersions } from './versions.js';

export const mrpackModLoaders = [
	'fabric',
	'forge',
	'neoforge',
	'quilt',
] as const satisfies ModLoader[];

export const mrpackValidator = z.object({
	formatVersion: z.union([z.literal(1)]),
	game: z.enum(['minecraft']),
	name: z.string(),
	summary: z.string().optional(),
	versionId: z.string(),
	files: z.array(
		z.object({
			path: z.string(),
			env: z.object({
				client: z.literal('required'),
				server: z.literal('required'),
			}),
			fileSize: z.number(),
			downloads: z.array(z.url()),
			hashes: z.object({
				sha1: z.string(),
				sha512: z.string(),
			}),
		}),
	),
	dependencies: z.object({
		minecraft: z.enum(mrpackMcVersions),
		'fabric-loader': z.string().optional(),
		forge: z.string().optional(),
		neoforge: z.string().optional(),
		'quilt-loader': z.string().optional(),
	}),
});

export type Mrpack = z.infer<typeof mrpackValidator>;
