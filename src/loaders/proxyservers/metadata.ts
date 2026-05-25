import { z } from 'zod';

export const proxyServers = [
	'bungeecord',
	'geyser',
	'velocity',
	'waterfall',
] as const satisfies string[];

export type ProxyServer = (typeof proxyServers)[number];

export const proxyServerValidator = z.enum(proxyServers);
