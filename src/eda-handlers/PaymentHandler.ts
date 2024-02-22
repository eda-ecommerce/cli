import {createProductOptions, payOptions} from "../InputValidator.js"
import console from "console"


export async function pay(options: payOptions) {
    const requestOptions = {
        paymentDate: (new Date()).toISOString().split('T')[0]
    }

    console.log(`Paying order with payment ID: ${options.paymentId} with options `, requestOptions)

    const response = await fetch(process.env['PAYMENT_URL'] + "api/Payments/paid/" + options.paymentId, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestOptions)
    })

    if (response.status !== 204) throw new Error("Paying failed: " + response.status)

    console.log('Payment was successful!')
}
