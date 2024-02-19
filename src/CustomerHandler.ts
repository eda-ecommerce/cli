import {createCustomerOptions, createProductOptions} from "./InputValidator.js"


export async function createNewCustomer(options: createCustomerOptions) {
    const response = await fetch(process.env['CUSTOMER_URL'] + "customer", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "firstName": options.firstName,
            "lastName": options.lastName,
            "address": {
                "street": options.street,
                "number": options.number,
                "postCode": options.postCode,
            },
            "email": options.email,
            "phoneNumber": options.phoneNumber
        })
    })

    if (response.status !== 201) throw new Error("customer creation failed: " + response.status)

    const customerResponse = await response.json() as {id: string}

    console.log(`customer created successfully. ID: ${customerResponse.id}`)
}
