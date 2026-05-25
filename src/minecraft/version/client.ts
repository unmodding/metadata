import type { McMajorVersion, McVersion } from './metadata.js';

export namespace Minecraft {
	export const getRawVersions = async () => {
		return (await (
			await fetch('https://piston-meta.mojang.com/mc/game/version_manifest_v2.json')
		).json()) as {
			latest: {
				release: McMajorVersion;
				snapshot: McVersion;
			};
			versions: {
				id: McVersion;
				type: 'release' | 'snapshot';
				url: string;
				time: string;
				releaseTime: string;
				sha1: string;
				complianceLevel: 1;
			}[];
		};
	};

	export const getVersions = async (): Promise<McVersion[]> => {
		return (await getRawVersions()).versions.map((version) => {
			return version.id;
		});
	};

	export const getMajorVersions = async (): Promise<McVersion[]> => {
		return (await getRawVersions()).versions
			.filter((version) => {
				return version.type === 'release';
			})
			.map((version) => {
				return version.id;
			});
	};
}
