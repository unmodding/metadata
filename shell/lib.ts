import { writeFileSync } from 'node:fs';

import type { Bindings, ProjectBindings } from '../src/loaders/bindings.ts';

export const writeLoaderSync = (
	category: 'modloader' | 'pluginloader' | 'proxyserver' | 'shaderloader',
	name: string,
	data: Bindings | ProjectBindings,
) => {
	const i =
		category === 'shaderloader' ?
			`import type { ProjectBindings } from '../../bindings.js';\n\nexport const ${name}Bindings: ProjectBindings = `
		:	`import type { Bindings } from '../../bindings.js';\n\nexport const ${name}Bindings: Bindings = `;

	const text = `${i + JSON.stringify(data, null, '\t').replaceAll(`"`, `'`)};\n`;

	writeFileSync(`src/loaders/${category}s/${name}/metadata.ts`, text);
};
