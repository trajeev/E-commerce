import React from 'react';

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51HnpIYCUdONUL0CoWiUhvkZNEnfpirpM0X0JU2zyQvp2N9bsrfarauHFeMJ59M1bN22JaNexKkzyiHqomGEwe0U700m1eyRo86'

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
    };

    return (
        <StripeCheckout 
            label = 'pay now'
            name = 'clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton