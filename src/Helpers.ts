// Require file or CommonJS from Module context
import {createRequire} from "node:module"
import {dirname} from "path"
import {fileURLToPath} from "url"

export const requireModule = createRequire(import.meta.url)

export const __dirname = dirname(fileURLToPath(import.meta.url)).slice(0, -4)
