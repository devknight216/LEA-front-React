import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <CardElement className="border p-3 h-full rounded-lg"/>
        <button type="submit" disabled={!stripe} className="bg-red-500 hover:bg-red-600 p-2 w-full text-white rounded-lg my-2 font-bold">
          Confirm and Pay
        </button>
      </form>
    );
};

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const StripeComponent = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default StripeComponent;