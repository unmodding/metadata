import type { McVersion } from '../../../minecraft/version/metadata.js';
import type { ProjectBindings } from '../../bindings.js';

export namespace Optifine {
	export const getBindings = async (): Promise<ProjectBindings> => {
		const html = await (await fetch('https://optifine.net/downloads')).text();

		const regex = /http:\/\/optifine\.net\/adloadx\?f=OptiFine_(.+)\.jar/g;

		const bindings: ProjectBindings = {
			vanilla: {},
		};

		for (const match of html.matchAll(regex)) {
			const [mcVersion, ...rest] = match[1].split('_');

			bindings.vanilla![mcVersion.replace(/\.0$/, '') as McVersion] = rest.join(' ');
		}

		return bindings;
	};
}
