import type { McVersion } from '../../../_index.js';
import type { Bindings } from '../../bindings.js';

export namespace LegacyFabric {
	export const getRawMcVersions = async () => {
		return (await (await fetch('https://meta.legacyfabric.net/v2/versions/game')).json()) as {
			version: McVersion;
			stable: boolean;
		}[];
	};

	export const getRawMcVersionInfo = async (mcVersion: McVersion) => {
		return (await (
			await fetch(`https://meta.legacyfabric.net/v2/versions/loader/${mcVersion}`)
		).json()) as {
			loader: {
				version: string;
				stable: boolean;
			};
		}[];
	};

	export const getBindings = async (): Promise<Bindings> => {
		const mcVersions = (await getRawMcVersions())
			.filter((rawMcVersion) => {
				return rawMcVersion.stable;
			})
			.map((rawMcVersion) => {
				return rawMcVersion.version;
			});

		return Object.fromEntries(
			await Promise.all(
				mcVersions.map(async (mcVersion) => {
					return [
						mcVersion,
						(await getRawMcVersionInfo(mcVersion)).find((maven) => {
							return maven.loader.stable;
						})!.loader.version,
					];
				}),
			),
		);
	};
}
