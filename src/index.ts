#!/usr/bin/env node

import chalk from "chalk"
import * as commander from "commander"
import {program} from "commander"
import * as console from "console"
import {requireModule} from "./Helpers.js"

const packagejson = requireModule("../package.json")

console.log(chalk.yellow.bold("EDA-Ecommerce CLI Tool"))
console.log(`Version ${packagejson.version}`)

program
    .name(Object.keys(packagejson.bin)[0])
    .description(packagejson.description)
    .version(packagejson.version)

program.parse()

