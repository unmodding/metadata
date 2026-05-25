import { z } from 'zod';

import type { Context } from '../context.js';
import type { Edition, McVersion, MultiplayerEnv } from '../minecraft/_index.js';
import { moddingTypes, type ModdingProject } from './modding/_index.js';
import { vanillaTypes, type VanillaProject } from './vanilla/_index.js';

export const projectTypes = [...vanillaTypes, ...moddingTypes] as const satisfies string[];

export type ProjectType = (typeof projectTypes)[number];

export const projectTypeValidator = z.enum(projectTypes);

/*  */

export type Project = VanillaProject | ModdingProject;

/*  */

export type Metadata = {
	type: ProjectType;
	context: Context;
	editions: Edition[];
	versions: McVersion[];
	gameplayEnvs: {
		singleplayer: boolean;
		multiplayer: false | MultiplayerEnv[];
	};
};
