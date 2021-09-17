import React from "react";
import BrandIcon from "assets/imgs/brand/brand.svg";
import { Link } from "react-router-dom";

function StagingEmailSuccess() {
  return (
    <div className="bg-gray-100 py-48">
      <div className="mx-auto max-w-3xl bg-white px-5 py-10 shadow-lg rounded-lg text-center">
        <div className="flex-shrink-0 flex justify-center">
          <Link to="/" className="inline-flex">
            <span className="sr-only">Workflow</span>
            <img className="h-24 w-auto" src={BrandIcon} alt="" />
          </Link>
        </div>
        <h2 className="text-gray-600 font-bold text-2xl my-5">Your request was submitted successfully!</h2>
        <p className="text-gray-500 ">
          Thank you for your interest with our staging services.
          <br /> One of our staging consultants will reach out to you shortly. We are excited to help you transform your space and
          get it rented fast!
        </p>
      </div>
    </div>
  );
}

export default StagingEmailSuccess;
