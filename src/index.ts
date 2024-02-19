#!/usr/bin/env node

import chalk from "chalk"
import * as commander from "commander"
import {program} from "commander"
import * as console from "console"
import {requireModule} from "./Helpers.js"
import {loadEnvFile} from "./Env.js"
import {
    addOfferingToBasketOptions,
    createBasketOptions,
    createCustomerOptions,
    createOfferingOptions,
    createProductOptions, validateAddOfferingToBasketInput, validateCreateBasketInput, validateCreateCustomerInput,
    validateCreateOfferingInput,
    validateCreateProductInput
} from "./InputValidator.js"
import {createNewProduct} from "./eda-handlers/ProductHandler.js"
import {createNewOffering} from "./eda-handlers/OfferingHandler.js"
import {createNewCustomer} from "./eda-handlers/CustomerHandler.js"
import {addOfferingToBasket, createNewBasket} from "./eda-handlers/BasketHandler.js"

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
        await createNewCustomer(options)
    })


program.command("create-basket")
    .summary("Create a new basket")
    .description("Create a new basket in the EDA-Ecommerce system")
    .addOption(
        new commander.Option(
            "-i --customerId <string>",
            "Customer UUID"
        )
    )
    .action(async (options: createBasketOptions) => {
        options = validateCreateBasketInput(options)
        await createNewBasket(options)
    })


program.command("add-offering-to-basket")
    .summary("Add an offering to a basket")
    .description("Add an offering to a basket in the EDA-Ecommerce system")
    .addOption(
        new commander.Option(
            "-b --basketId <string>",
            "Basket UUID"
        )
    )
    .addOption(
        new commander.Option(
            "-o --offeringId <string>",
            "Offering UUID"
        )
    ).addOption(
        new commander.Option(
            "-q --quantity <string>",
            "Quantity"
        )
    )
    .action(async (options: addOfferingToBasketOptions) => {
        options = validateAddOfferingToBasketInput(options)
        await addOfferingToBasket(options)
    })




// TODO: Put offering into basket
// TODO: Checkout basket
// TODO: Pay

program.parse()

