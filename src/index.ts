#!/usr/bin/env node

import chalk from "chalk"
import * as commander from "commander"
import {program} from "commander"
import * as console from "console"
import {requireModule} from "./Helpers.js"
import {loadEnvFile} from "./Env.js"
import {createProductOptions, validateCreateProductInput} from "./InputValidator.js"
import {createNewProduct} from "./ProductHandler.js"

const packagejson = requireModule("../package.json")

console.log(chalk.yellow.bold("EDA-Ecommerce CLI Tool"))
console.log(`Version ${packagejson.version}`)

loadEnvFile()

program
    .name(Object.keys(packagejson.bin)[0])
    .description(packagejson.description)
    .version(packagejson.version)

program.command("create-product")
    .summary("Create a new product")
    .description("Create a new product in the EDA-Ecommerce system")
    .addOption(
        new commander.Option(
            "-c --color <string>",
            "Color"
        )
    )
    .addOption(
        new commander.Option(
            '-d --description <string>',
            'Description'
        )
    )
    .action(async (options: createProductOptions) => {
        validateCreateProductInput(options)
        console.log("Creating product with options:", options)
        await createNewProduct(options)
    })

// TODO: Create Offering
// TODO: Create customer
// TODO: Choose to act on behalf of a specific customer
// TODO: Get all Offerings and put some into basket
// TODO: Checkout basket
// TODO: Pay

program.parse()

