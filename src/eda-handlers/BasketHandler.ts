import {createBasketOptions, } from "../InputValidator.js"


export async function createNewBasket(options: createBasketOptions) {
    console.log(`Creating new basket for customer ${options.customerId} with the following data: `, options)

    const response = await fetch(process.env['BASKET_URL'] + "shoppingBasket", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(options)
    })

    if (response.status !== 201) throw new Error("basket creation failed: " + response.status)

    const customerResponse = await response.json() as {shoppingBasketId: string}

    console.log(`basket created successfully. ID: ${customerResponse.shoppingBasketId}`)
}
