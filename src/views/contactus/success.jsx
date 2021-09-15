import React from "react";
import BrandIcon from "assets/imgs/brand/brand.svg";
import { Link } from "react-router-dom";

function ContactUsSuccessPage() {
  return (
    <div className="bg-gray-100 py-48">
      <div className="mx-auto max-w-3xl bg-white px-5 py-10 shadow-lg rounded-lg text-center">
        <div className="flex-shrink-0 flex justify-center">
          <Link to="/" className="inline-flex">
            <span className="sr-only">Workflow</span>
            <img className="h-24 w-auto" src={BrandIcon} alt="" />
          </Link>
        </div>
        <h2 className="text-gray-600 font-bold text-2xl my-5">Thank you for your message!</h2>
        <p className="text-gray-500 ">
          Your email request was sent successfully.
          <br /> One of our team members will contact you shortly. Thank you for reaching out to us.
        </p>
      </div>
    </div>
  );
}

export default ContactUsSuccessPage;
