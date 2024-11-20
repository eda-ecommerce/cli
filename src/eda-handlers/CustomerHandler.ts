import {createCustomerOptions} from "../InputValidator.js"


export async function createNewCustomer(options: createCustomerOptions) {
    const body = {
        "firstName": options.firstName,
        "lastName": options.lastName,
        "address": {
            "street": options.street,
            "number": options.number,
            "postCode": options.postCode,
        },
        "email": options.email,
        "phoneNumber": options.phoneNumber
    }

    console.log("Creating customer with the following data: ", body)

    const response = await fetch(process.env['CUSTOMER_URL'] + "customer", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })

    if (response.status !== 201) throw new Error("customer creation failed: " + response.status)

    const customerResponse = await response.json() as {id: string}

    console.log(`customer created successfully. ID: ${customerResponse.id}`)

    return customerResponse.id
}
