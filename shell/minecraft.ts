import { writeFileSync } from 'node:fs';

import { Minecraft } from '../src/_index.ts';

export const minecraft = async (): Promise<void> => {
	const mcVersions = await Minecraft.getVersions();
	const mcMajorVersions = await Minecraft.getMajorVersions();

	writeFileSync(
		'src/minecraft/version/versions.ts',
		`export const mcVersions = ${JSON.stringify(mcVersions, null, '\t').replaceAll(`"`, `'`)} as const satisfies string[];\n`,
	);
	writeFileSync(
		'src/minecraft/version/majorversions.ts',
		`import type { McVersion } from './_index.js';\n\nexport const mcMajorVersions = ${JSON.stringify(mcMajorVersions, null, '\t').replaceAll(`"`, `'`)} as const satisfies McVersion[];\n`,
	);

	console.log('Minecraft synced');
};
