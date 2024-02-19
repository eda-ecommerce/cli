#!/usr/bin/env node

import chalk from "chalk"
import * as commander from "commander"
import {program} from "commander"
import * as console from "console"
import {requireModule} from "./Helpers.js"
import {loadEnvFile} from "./Env.js"
import {
    createCustomerOptions,
    createOfferingOptions,
    createProductOptions, validateCreateCustomerInput,
    validateCreateOfferingInput,
    validateCreateProductInput
} from "./InputValidator.js"
import {createNewProduct} from "./ProductHandler.js"
import {createNewOffering} from "./OfferingHandler.js"
import {createNewCustomer} from "./CustomerHandler.js"

const packagejson = requireModule("../package.json")

loadEnvFile()

program
    .name(Object.keys(packagejson.bin)[0])
    .description(packagejson.description)
    .version(packagejson.version)
    .action(() => {
        console.log(chalk.yellow.bold("EDA-Ecommerce CLI Tool"))
        console.log(`Version ${packagejson.version}`)

        program.help()
    })

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
        options = validateCreateProductInput(options)
        console.log("Creating product with options:", options)
        await createNewProduct(options)
    })

program.command("create-offering")
    .summary("Create a new offering")
    .description("Create a new offering in the EDA-Ecommerce system")
    .addOption(
        new commander.Option(
            "-i --productId <string>",
            "Product UUID"
        )
    )
    .addOption(
        new commander.Option(
            '-q --quantity <string>',
            'Quantity of the product in the offering'
        )
    )
    .addOption(
        new commander.Option(
            '-p --price <string>',
            'Price of the offering'
        )
    )
    .action(async (options: createOfferingOptions) => {
        options = validateCreateOfferingInput(options)
        console.log("Creating offering with options:", options)
        await createNewOffering(options)
    })

program.command("create-customer")
    .summary("Create a new offering")
    .description("Create a new offering in the EDA-Ecommerce system")
    .addOption(
        new commander.Option(
            "-f --firstName <string>",
            "First Name"
        )
    )
    .addOption(
        new commander.Option(
            '-l --lastName <string>',
            'Last Name'
        )
    )
    .addOption(
        new commander.Option(
            '-s --street <string>',
            'Street'
        )
    )
    .addOption(
        new commander.Option(
            '-n --number <string>',
            'Street Number'
        )
    )
    .addOption(
        new commander.Option(
            '-c --postCode <string>',
            'Post Code'
        )
    )
    .addOption(
        new commander.Option(
            '-e --email <string>',
            'Email'
        )
    )
    .addOption(
        new commander.Option(
            '-p --phoneNumber <string>',
            'Phone Number'
        )
    )
    .action(async (options: createCustomerOptions) => {
        options = validateCreateCustomerInput(options)
        console.log("Creating customer with options:", options)
        await createNewCustomer(options)
    })


// TODO: Choose to act on behalf of a specific customer
// TODO: Get all Offerings and put some into basket
// TODO: Checkout basket
// TODO: Pay

program.parse()

