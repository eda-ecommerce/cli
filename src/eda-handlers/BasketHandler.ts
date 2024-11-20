import {addOfferingToBasketOptions, checkoutBasketOptions, createBasketOptions,} from "../InputValidator.js"


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

    return customerResponse.shoppingBasketId
}

export async function addOfferingToBasket(options: addOfferingToBasketOptions) {
    const body = {
        "offeringID": options.offeringId,
        "quantity": options.quantity
    }

    console.log(`Adding offering ${options.offeringId} into basket ${options.basketId} with the following data: `, body)

    const response = await fetch(process.env['BASKET_URL'] + "shoppingBasket/" + options.basketId + "/addOffering", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })

    if (response.status !== 201) throw new Error("Adding offering to basket failed: " + response.status)

    const customerResponse = await response.json()

    console.log(`Offering added to Basket successfully. Basket now looks like this:`, customerResponse)
}

export async function checkoutBasket(options: checkoutBasketOptions) {
    console.log(`Checking out basket ${options.basketId}`)

    const response = await fetch(process.env['BASKET_URL'] + "shoppingBasket/" + options.basketId + "/checkout", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })

    if (response.status !== 200) throw new Error("Checking out basket failed: " + response.status)

    console.log(`Checked out Basket successfully.`)
}
