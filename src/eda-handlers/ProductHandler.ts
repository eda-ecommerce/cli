import {createProductOptions} from "../InputValidator.js"
import console from "console"


export async function createNewProduct(options: createProductOptions) {
    console.log("Creating product with options:", options)

    const response = await fetch(process.env['PRODUCT_URL'] + "products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(options)
    })

    if (response.status !== 201) throw new Error("Product creation failed: " + response.status)

    const location = response.headers.get("Location")
    const productId = location?.split("/").pop()

    console.log(`Product created successfully. ID: ${productId}`)

    return productId
}
