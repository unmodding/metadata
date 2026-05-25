import { z } from 'zod';

import type { ModLoader } from './modloaders/_index.js';
import type { PluginLoader } from './pluginloaders/_index.js';
import type { ProxyServer } from './proxyservers/_index.js';
import type { ShaderLoader } from './shaderloaders/_index.js';

export const loaderTypes = [
	'modloader',
	'pluginloader',
	'proxyserver',
	'shaderloader',
] as const satisfies string[];

export type LoaderType = (typeof loaderTypes)[number];

export const loaderTypeValidator = z.enum(loaderTypes);

export type Loader = ModLoader | PluginLoader | ProxyServer | ShaderLoader;
