import type { McVersion } from '../../../_index.js';
import type { Bindings } from '../../bindings.js';

export namespace Quilt {
	export const getRawMcVersions = async () => {
		return (await (await fetch('https://quiltmc.org/api/v1/latest-version-components')).json()) as {
			[mcVersion in McVersion]: {
				quilt_loader: string;
			};
		};
	};

	export const getBindings = async (): Promise<Bindings> => {
		const maven = Object.entries(await getRawMcVersions()) as [
			McVersion,
			{
				quilt_loader: string;
			},
		][];

		const bindings: Bindings = {};

		for (const [mcVersion, release] of maven) {
			bindings[mcVersion] = release.quilt_loader;
		}

		return bindings;
	};
}
