import type { McVersion } from '../../../_index.js';
import type { Bindings } from '../../bindings.js';

export namespace Ornithe {
	export const getRawMcVersions = async () => {
		return (await (await fetch('https://meta.ornithemc.net/v2/versions/game')).json()) as {
			version: McVersion;
			stable: boolean;
		}[];
	};

	export const getRawMcVersionInfo = async (mcVersion: McVersion) => {
		const res = (await (
			await fetch(`https://meta.ornithemc.net/v2/versions/loader/${mcVersion}`)
		).json()) as {
			version: string;
		}[];

		return [mcVersion, res[0].version];
	};

	export const getBindings = async (): Promise<Bindings> => {
		const mcVersions = (await getRawMcVersions())
			.filter((maven) => {
				return maven.stable;
			})
			.map((maven) => {
				return maven.version;
			});

		return Object.fromEntries(
			await Promise.all(
				mcVersions.map((mcVersion) => {
					return getRawMcVersionInfo(mcVersion);
				}),
			),
		);
	};
}
