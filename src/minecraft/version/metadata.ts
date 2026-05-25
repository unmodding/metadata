import { z } from 'zod';

import { mcVersions } from './versions.js';

export type McVersion = (typeof mcVersions)[number];

export const mcVersionValidator = z.enum(mcVersions);

/*  */

import { mcMajorVersions } from './majorversions.js';

export type McMajorVersion = (typeof mcMajorVersions)[number];

export const mcMajorVersionValidator = z.enum(mcMajorVersions);

/*  */

import { mcLegacyVersions } from './legacyversions.js';

export type McLegacyVersion = (typeof mcLegacyVersions)[number];

export const mcLegacyVersionValidator = z.enum(mcLegacyVersions);
