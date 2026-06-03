import { minecraft } from './minecraft.ts';
import { babric } from './modloaders/babric.ts';
import { bta } from './modloaders/bta.ts';
import { fabric } from './modloaders/fabric.ts';
import { forge } from './modloaders/forge.ts';
import { legacyFabric } from './modloaders/legacyfabric.ts';
import { liteLoader } from './modloaders/liteloader.ts';
import { neoForge } from './modloaders/neoforge.ts';
import { nilLoader } from './modloaders/nilloader.ts';
import { ornithe } from './modloaders/ornithe.ts';
import { quilt } from './modloaders/quilt.ts';
import { rift } from './modloaders/rift.ts';
import { risugamisModLoader } from './modloaders/risugamismodloader.ts';
import { mrpack } from './mrpack.ts';
import { bukkit } from './pluginloaders/bukkit.ts';
import { folia } from './pluginloaders/folia.ts';
import { paper } from './pluginloaders/paper.ts';
import { purpur } from './pluginloaders/purpur.ts';
import { spigot } from './pluginloaders/spigot.ts';
import { sponge } from './pluginloaders/sponge.ts';
import { bungeecord } from './proxyserver/bungeecord.ts';
import { geyser } from './proxyserver/geyser.ts';
import { velocity } from './proxyserver/velocity.ts';
import { waterfall } from './proxyserver/waterfall.ts';
import { canvas } from './shaderloaders/canvas.ts';
import { iris } from './shaderloaders/iris.ts';
import { optifine } from './shaderloaders/optifine.ts';

await Promise.all([
	minecraft(),

	/* modloaders */
	babric(),
	bta(),
	fabric(),
	forge(),
	legacyFabric(),
	liteLoader(),
	neoForge(),
	nilLoader(),
	ornithe(),
	quilt(),
	rift(),
	risugamisModLoader(),

	/* pluginloaders */
	bukkit(),
	folia(),
	paper(),
	purpur(),
	spigot(),
	sponge(),

	/* proxyservers */
	bungeecord(),
	geyser(),
	velocity(),
	waterfall(),

	/* shaderloaders */
	canvas(),
	iris(),
	optifine(),

	/*  */

	mrpack(),
]);
