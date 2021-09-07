import React, { useEffect, useState } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { paymentIntent } from 'shared/api';
import { useDispatch, useSelector } from 'react-redux';
import { SpinnerCircularFixed } from 'spinners-react';
import { createReservation } from 'reduxstore/bookreducer/action';
import { Toast } from 'components/common/notification';

const CheckoutForm = ({bookData}) => {
    const stripe = useStripe();
    const elements = useElements();
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();
    const [loading, setIsLoading] = useState(false);
    const [err, setErr] = useState(null);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        //Send payment intent
        setIsLoading(true)
        const res = await paymentIntent({
          propertyId: bookData.propertyId,
          nights: bookData.dateArray.length,
          petNum: bookData.pets,
          petAllowed: bookData.pets?true:false
        },  token);
        
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
          const result = await stripe.confirmCardPayment(res.data.clientSecret, {
            payment_method: {
              card: cardElement,
              billing_details: {
                name: 'Jenny Rosen',
              },
            }
          });
          if (result.error) {
            // Show error to your customer (e.g., insufficient funds)
            console.log(result.error.message);
          } else {
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {
              // Show a success message to your customer
              // There's a risk of the customer closing the window before callback
              // execution. Set up a webhook or plugin to listen for the
              // payment_intent.succeeded event that handles any business critical
              // post-payment actions.
              dispatch(createReservation({
                property: bookData.propertyId,
                from: bookData.checkedin,
                to: bookData.checkedout,
                adultNum: bookData.adult,
                petNum: bookData.pets,
                total: bookData.totalCost,
                childrenNum: bookData.children,
                infants: bookData.adult
              }))
              Toast('','Reserved successfully, We will send an Email soon.', 'success')
              console.log("success");
            }
          }
        }
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false);
        setErr("An error occurred during connect API")
      }


    };
  
    return (
      <form onSubmit={handleSubmit}>
        <CardElement className="border p-3 h-full rounded-lg"/>
        <button type="submit" disabled={!stripe} className="bg-red-500 hover:bg-red-600 p-2 w-full text-white rounded-lg my-2 font-bold flex justify-center gap-4">
          Confirm and Pay (${bookData?.totalCost})
          {
            loading && <SpinnerCircularFixed size={20} thickness={200} speed={100} color="#ff0000AA" secondaryColor="#D9D9D6" />
          }
        </button>
        <p className="text-sm text-red-500">{err}</p>
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