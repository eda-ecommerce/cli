import chalk from "chalk"

export function validateCreateProductInput(options: createProductOptions): createProductOptions {
    if (!options.color || !options.description) {
        console.warn(chalk.redBright("Color and Description are required."))
        killAndExit()
    }

    return {
        "color": options.color,
        "description": options.description
    }
}

export function validateCreateOfferingInput(options: createOfferingOptions): createOfferingOptions {
    if (!options.productId || !options.price || !options.quantity) {
        console.warn(chalk.redBright("productId, price and quantity are required."))
        killAndExit()
    }

    return {
        "productId": options.productId,
        "price": Number(options["price"]),
        "quantity": Number(options["quantity"])
    }
}

function killAndExit() {
    console.error(chalk.red("Input not valid! Exiting."))
    process.exit()
}

export type createProductOptions = {color: String; description: String}

export type createOfferingOptions = {
    "productId": String;
    "quantity": Number;
    "price": Number;
}
