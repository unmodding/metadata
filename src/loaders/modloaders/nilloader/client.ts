import { mcVersions, type McVersion } from '../../../_index.js';
import type { Bindings } from '../../bindings.js';

export namespace NilLoader {
	export const getRawMcVersions = async () => {
		return await (
			await fetch('https://repo.sleeping.town/com/unascribed/nilloader/maven-metadata.xml')
		).text();
	};

	export const getBindings = async (): Promise<Bindings> => {
		const loaderVersion = [...(await getRawMcVersions()).matchAll(/<version>(.+)<\/version>/g)]
			.map((match) => {
				return match[1];
			})
			.at(-1) as McVersion;

		const bindings: Bindings = Object.fromEntries(
			mcVersions.map((mcVersion) => {
				return [mcVersion, loaderVersion];
			}),
		);

		return bindings;
	};
}
