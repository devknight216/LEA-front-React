import React, { useEffect } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = ({bookData}) => {
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
     
    }, [])
  
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
          Confirm and Pay (${bookData?.totalCost})
        </button>
      </form>
    );
};

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const StripeComponent = ({bookData}) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm  bookData={bookData}/>
  </Elements>
);

export default StripeComponent;