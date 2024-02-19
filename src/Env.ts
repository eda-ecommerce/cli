import {config as configDotenv} from 'dotenv'
import {resolve} from 'path'
import {__dirname} from "./Helpers.js"

export function loadEnvFile() {
    const envPath = resolve(__dirname + "/.env")
    console.log(`Loading env file from ${envPath}`)
    configDotenv({path: envPath})
}
