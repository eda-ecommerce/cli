// Require file or CommonJS from Module context
import {createRequire} from "node:module"

export const requireModule = createRequire(import.meta.url)

export const getWorkDir = process.cwd()

