import {
    addOfferingToBasketOptions,
    createBasketOptions,
    createCustomerOptions,
    createOfferingOptions,
    createProductOptions
} from "../InputValidator.js"
import console from "console"
import {createNewProduct} from "./ProductHandler.js"
import {createNewOffering} from "./OfferingHandler.js"
import {createNewCustomer} from "./CustomerHandler.js"
import {addOfferingToBasket, checkoutBasket, createNewBasket} from "./BasketHandler.js"

export async function produceOrderRequestedEvent() {
    console.log("Producing OrderRequested event. For that we need to:")
    console.log("1. Create a product")
    console.log("2. Create an offering")
    console.log("3. Create a customer")
    console.log("4. Create a basket")
    console.log("5. Add the offering to the basket")
    console.log("6. Checkout the basket")
    console.log("\nWe will do that with random IDs and Values.")

    // Create a product
    const newProductOptions : createProductOptions  = {
        "color": "yellow",
        "description": `submarine ${Math.random() * 100}`
    }
    const productId= await createNewProduct(newProductOptions)

    console.log("Now we need to create an offering for new product with ID:", productId)
    console.log("But for that, we need to wait for the product to be registered by the offering service. (aka ~3 seconds)")

    // Wait for the product to be created
    await new Promise(resolve => setTimeout(resolve, 3000))
    console.log("Wait over, lets hope the product is registered.")

    // Create an offering
    const newOfferingOptions : createOfferingOptions = {
        "productId": productId,
        "price": Math.random() * 100,
        "quantity": Math.random() * 100
    }
    const offeringId = await createNewOffering(newOfferingOptions)

    console.log("Now we need to create a customer.")

    // Create a customer
    const newCustomerOptions : createCustomerOptions = {
        firstName: "John",
        lastName: "Doe",
        street: "Main Street",
        number: "123",
        postCode: "12345",
        email: "john@example.com",
        phoneNumber: "123456789"
    }
    const customerId = await createNewCustomer(newCustomerOptions)

    console.log("Now we need to create a basket for the customer.")
    console.log("But for that, we need to wait for the new customer to be registered by the shopping basket. (aka ~3 seconds)")

    // Wait for the customer to be created
    await new Promise(resolve => setTimeout(resolve, 3000))
    console.log("Wait over, lets hope the customer is registered.")

    // Create a basket
    const createBasketOptions : createBasketOptions = {
        customerId: customerId
    }
    const basketId = await createNewBasket(createBasketOptions)

    console.log("Now we need to add the offering to the basket. (We assume the offering is already registered as we waited before)")

    // Add the offering to the basket
    const addOfferingToBasketOptions : addOfferingToBasketOptions = {
        basketId: basketId,
        offeringId: offeringId,
        quantity: 1
    }
    await addOfferingToBasket(addOfferingToBasketOptions)

    console.log("Now we need to checkout the basket with id: ", basketId)

    // Checkout the basket
    await checkoutBasket({basketId: basketId})

    console.log("OrderRequested event will be produced soon once the checkout event reaches the order service.")
}
