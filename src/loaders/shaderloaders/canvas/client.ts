import type { McVersion, ModLoader } from '../../../_index.js';
import type { ProjectBindings } from '../../bindings.js';

export namespace Canvas {
	export const getBindings = async (): Promise<ProjectBindings> => {
		const maven = (await (await fetch('https://api.modrinth.com/v3/project/canvas')).json()) as {
			game_versions: McVersion[];
			loaders: ModLoader[];
		};
		const mcVersions = maven.game_versions.reverse();

		const bindings: ProjectBindings = {};

		for (const loader of maven.loaders) {
			bindings[loader] = {};
		}

		const releases = (await (
			await fetch('https://api.modrinth.com/v3/project/canvas/version')
		).json()) as {
			version_number: string;
			loaders: ModLoader[];
			game_versions: McVersion[];
		}[];

		for (const loader of maven.loaders) {
			for (const mcVersion of mcVersions) {
				const release = releases.find((release) => {
					return release.loaders.includes(loader) && release.game_versions.includes(mcVersion);
				});

				if (!release) {
					continue;
				}

				bindings[loader]![mcVersion] = release.version_number;
			}
		}

		return bindings;
	};
}
