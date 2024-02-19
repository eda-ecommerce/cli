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

export function validateCreateCustomerInput(options: createCustomerOptions): createCustomerOptions {
    if (!options.firstName || !options.lastName || !options.street || !options.number || !options.postCode || !options.email || !options.phoneNumber) {
        console.warn(chalk.redBright("firstName, lastName, street, number, postCode, email and phoneNumber are required."))
        killAndExit()
    }

    return {
        "firstName": options.firstName,
        "lastName": options.lastName,
        "street": options.street,
        "number": options.number,
        "postCode": options.postCode,
        "email": options.email,
        "phoneNumber": options.phoneNumber
    }
}

export function validateCreateBasketInput(options: createBasketOptions): createBasketOptions {
    if (!options.customerId) {
        console.warn(chalk.redBright("customerId is required."))
        killAndExit()
    }

    return {
        "customerId": options.customerId
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

export type createCustomerOptions = {
    firstName: String;
    lastName: String;
    street: String;
    number: String;
    postCode: String;
    email: String;
    phoneNumber: String;
}

export type createBasketOptions = {
    customerId: String;
}
