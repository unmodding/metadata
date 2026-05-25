import type { McVersion } from '../../../minecraft/_index.js';
import type { Bindings } from '../../bindings.js';

export namespace NeoForge {
	export const getRawMcVersions = async () => {
		return (await (
			await fetch('https://maven.neoforged.net/api/maven/versions/releases/net/neoforged/neoforge')
		).json()) as {
			versions: string[];
		};
	};

	export const getBindings = async (): Promise<Bindings> => {
		const rawMcVersions = (await getRawMcVersions()).versions.reverse();

		const bindings: Bindings = {};

		for (const loaderVersion of rawMcVersions) {
			const [major, minor] = loaderVersion.split('.');

			if (major === '26') {
				bindings[`${major}.${minor}` as McVersion] = loaderVersion;
			} else if (major === '0') {
				bindings[minor.replace(/\.0$/, '') as McVersion] = loaderVersion;
			} else {
				bindings[`1.${major}${`.${minor}`.replace(/\.0$/, '')}` as McVersion] = loaderVersion;
			}
		}

		return bindings;
	};
}
