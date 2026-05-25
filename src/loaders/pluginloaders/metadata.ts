import { z } from 'zod';

export const pluginLoaders = [
	'vanilla',
	/*  */
	'bukkit',
	'folia',
	'paper',
	'purpur',
	'spigot',
	'sponge',
] as const satisfies string[];

export type PluginLoader = (typeof pluginLoaders)[number];

export const pluginLoaderValidator = z.enum(pluginLoaders);
