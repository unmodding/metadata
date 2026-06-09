import { Bungeecord } from '../../../src/_index.ts';
import { writeLoaderSync } from '../lib.ts';

export const bungeecord = async (): Promise<void> => {
	writeLoaderSync('proxyserver', 'bungeecord', await Bungeecord.getBindings());

	console.log('Bungeecord synced');
};
