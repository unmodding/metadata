import type { McVersion } from '../_index.js';

export namespace MrpackClient {
	export const getRawMcVersions = async () => {
		return (await (await fetch('https://api.modrinth.com/v2/tag/game_version')).json()) as {
			date: string;
			version: McVersion;
			version_type: 'release' | 'snapshot';
		}[];
	};

	export const getMcVersions = async (): Promise<McVersion[]> => {
		return (await getRawMcVersions()).map((maven) => {
			return maven.version;
		});
	};
}
