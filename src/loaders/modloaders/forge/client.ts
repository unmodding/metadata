import type { McVersion } from '../../../minecraft/_index.js';
import type { Bindings } from '../../bindings.js';

export namespace Forge {
	export const getRawMcVersions = async () => {
		return (await (
			await fetch('https://files.minecraftforge.net/net/minecraftforge/forge/promotions_slim.json')
		).json()) as {
			homepage: string;
			promos: {
				[mcVersion in `${McVersion}-${'latest' | 'recommended'}`]: string;
			};
		};
	};

	export const getBindings = async (): Promise<Bindings> => {
		const rawMcVersions = Object.entries((await getRawMcVersions()).promos).reverse() as [
			`${McVersion}-${'latest' | 'recommended'}`,
			string,
		][];

		const bindings: Bindings = {};

		for (const [mcVersion, loaderVersion] of rawMcVersions) {
			if (mcVersion.endsWith('-latest')) {
				bindings[mcVersion.replaceAll('-latest', '').replace(/\.0$/, '') as McVersion] =
					loaderVersion.replaceAll('-latest', '');
			}
		}

		return bindings;
	};
}
