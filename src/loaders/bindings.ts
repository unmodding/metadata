import type { McVersion } from '../minecraft/_index.js';
import type { ModLoader } from './modloaders/_index.js';
import type { PluginLoader } from './pluginloaders/_index.js';
import type { ShaderLoader } from './shaderloaders/_index.js';

export type Bindings = {
	[mcVersion in McVersion]?: string;
};

export type ProjectBindings = {
	[loader in ModLoader | PluginLoader | ShaderLoader]?: Bindings;
};
