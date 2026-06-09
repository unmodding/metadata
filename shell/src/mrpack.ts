import { writeFileSync } from 'node:fs';

import { MrpackClient } from '../../src/_index.ts';

export const mrpack = async (): Promise<void> => {
	const mrpackVersions = await MrpackClient.getMcVersions();

	writeFileSync(
		'../src/mrpack/versions.ts',
		`import type { McVersion } from '../minecraft/_index.js';\n\nexport const mrpackMcVersions = ${JSON.stringify(mrpackVersions, null, '\t').replaceAll(`"`, `'`)} as const satisfies Loose<McVersion>[];\n`,
	);

	console.log('Mrpack synced');
};
