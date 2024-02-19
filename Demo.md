`eda-ecommerce-cli create-product --color green --description T-shirt`

`eda-ecommerce-cli create-offering --productId <id> --quantity 3 --price 4`

`eda-ecommerce-cli create-customer --firstName Tim --lastName Tester --street Irgendwo --number 12 --postCode 12345 --email "tim.tester@examle.de" --phoneNumber "12345698765"`

`eda-ecommerce-cli create-basket --customerId <id>`

`eda-ecommerce-cli add-offering-to-basket --basketId <id> --offeringId <id> --quantity 2`

`eda-ecommerce-cli checkout-basket --basketId <id>`
