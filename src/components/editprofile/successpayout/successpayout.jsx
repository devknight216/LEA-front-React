import React, { useEffect } from "react";
import BrandIcon from "assets/imgs/brand/brand.svg";
import { Link } from "react-router-dom";
import { stripeCheck } from "shared/api";
import { useSelector } from "react-redux";

function RedirectFromConnectStripeComponent() {
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    stripeCheck(token);
  }, []);

  return (
    <div className="bg-gray-100 py-48">
      <div className="mx-auto max-w-3xl bg-white px-5 py-10 shadow-lg rounded-lg text-center">
        <div className="flex-shrink-0 flex justify-center">
          <Link to="/" className="inline-flex">
            <span className="sr-only">Workflow</span>
            <img className="h-24 w-auto" src={BrandIcon} alt="" />
          </Link>
        </div>
        <h2 className="text-gray-600 font-bold text-2xl my-5">Thank you for your connecting Payout method</h2>
        <p className="text-gray-500 ">
          Thank you for connecting Payout! <br />
          We are excited to have you here and can`&apos;`t wait to get you onboard
          {"·"} <br />
          Before we get started, we`&apos;`ll need to verify your email. <br />
          Please check your inbox and click the link for email verification.
        </p>
      </div>
    </div>
  );
}

export default RedirectFromConnectStripeComponent;
