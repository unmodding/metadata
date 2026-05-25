import type { McVersion } from '../../../_index.js';
import type { Bindings } from '../../bindings.js';

export namespace Purpur {
	export const getRawMcVersions = async () => {
		return (await (await fetch('https://api.purpurmc.org/v2/purpur')).json()) as {
			versions: McVersion[];
		};
	};

	export const getRawMcVersionInfo = async (mcVersion: McVersion) => {
		return (await (await fetch(`https://api.purpurmc.org/v2/purpur/${mcVersion}`)).json()) as {
			builds: {
				latest: string;
			};
		};
	};

	export const getBindings = async (): Promise<Bindings> => {
		const mcVersions = (await getRawMcVersions()).versions.reverse();

		return Object.fromEntries(
			await Promise.all(
				mcVersions.map(async (mcVersion) => {
					const res = await getRawMcVersionInfo(mcVersion);

					return [mcVersion, res.builds.latest];
				}),
			),
		);
	};
}
