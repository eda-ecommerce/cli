import {createOfferingOptions} from "./InputValidator.js"


export async function createNewOffering(options: createOfferingOptions) {
    const response = await fetch(process.env['OFFERING_URL'] + "offering", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(options)
    })

    if (response.status !== 201) throw new Error("Offering creation failed: " + response.status,)

    const location = response.headers.get("Location")
    const productId = location?.split("/").pop()

    console.log(`Offering created successfully. ID: ${productId}`)
}
