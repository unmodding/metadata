import type { McVersion } from '../../../_index.js';
import type { Bindings } from '../../bindings.js';

export namespace Folia {
	export const getRawMcVersions = async () => {
		return (await (await fetch('https://fill.papermc.io/v3/projects/folia')).json()) as {
			versions: [McVersion[]];
		};
	};

	export const getRawMcVersionInfo = async (mcVersion: McVersion) => {
		return (await (
			await fetch(`https://fill.papermc.io/v3/projects/folia/versions/${mcVersion}`)
		).json()) as {
			builds: number[];
		};
	};

	export const getBindings = async (): Promise<Bindings> => {
		const mcVersions = Object.values((await getRawMcVersions()).versions).flat();

		return Object.fromEntries(
			await Promise.all(
				mcVersions.map(async (mcVersion) => {
					const res = await getRawMcVersionInfo(mcVersion);

					return [mcVersion, res.builds[0].toString()];
				}),
			),
		);
	};
}
