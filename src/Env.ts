import {config as configDotenv} from 'dotenv'
import {resolve} from 'path'
import {getWorkDir} from "./Helpers.js"

export function loadEnvFile() {
    const envPath = resolve(getWorkDir + "/.env")
    console.log(`Loading env file from ${envPath}`)
    configDotenv({path: envPath})
}
