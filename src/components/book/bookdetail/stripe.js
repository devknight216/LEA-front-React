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

      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }

      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const cardElement = elements.getElement(CardElement);

      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        console.log('[error]', error);
      } else {
        console.log('[PaymentMethod]', paymentMethod);
      }
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

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const StripeComponent = ({bookData}) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm  bookData={bookData}/>
  </Elements>
);

export default StripeComponent;