import React, { useState } from "react";
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import { useForm } from "react-hook-form";
import { contactus } from "shared/api";
import { Toast } from "components/common/notification";
import { useHistory } from "react-router";

export default function ContactUsPage() {
  //Submit Email form
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const templateParams = {
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      phone: data.phone,
      message: data.message,
      subject: data.subject,
    };
    try {
      await contactus(templateParams);
      history.push("/contact-success");
    } catch (error) {
      Toast("", "Faild", "danger");
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="max-w-5xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="relative bg-white shadow-xl">
          <h2 className="sr-only">Contact us</h2>

          <div className="grid grid-cols-1 lg:grid-cols-1">
            {/* Contact form */}
            <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-lg font-medium text-gray-900">Send us a message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label htmlFor="first_name" className="block text-sm font-medium text-gray-900">
                    First name*
                  </label>
                  <div className="mt-1">
                    {errors.firstName && <span className="text-red-700">This field is required</span>}
                    <input
                      type="text"
                      {...register("firstName", { required: true, maxLength: 80 })}
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last_name" className="block text-sm font-medium text-gray-900">
                    Last name*
                  </label>
                  <div className="mt-1">
                    {errors.lastName && <span className="text-red-700">This field is required</span>}
                    <input
                      type="text"
                      {...register("lastName", { required: true, maxLength: 80 })}
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    Email*
                  </label>
                  <div className="mt-1">
                    {errors.email && <span className="text-red-700">This field is required</span>}
                    <input
                      {...register("email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                      Phone*
                    </label>
                  </div>
                  <div className="mt-1">
                    {errors.phone && <span className="text-red-700">This field is required</span>}
                    <input
                      type="text"
                      {...register("phone", {
                        required: true,
                        minLength: 6,
                        maxLength: 15,
                      })}
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      aria-describedby="phone-optional"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
                    Subject*
                  </label>
                  <div className="mt-1">
                    {errors.subject && <span className="text-red-700">This field is required</span>}
                    <input
                      type="text"
                      {...register("subject", { required: true, maxLength: 200 })}
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                      Message*
                    </label>
                    <span id="message-max" className="text-sm text-gray-500">
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    {errors.message && <span className="text-red-700">This field is required</span>}
                    <textarea
                      {...register("message", { required: true })}
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      aria-describedby="message-max"
                      defaultValue={""}
                    />
                  </div>
                  {/* <div className={recaptureCallback?"hidden":"flex justify-center mt-10"}>
                    <RecaptureComponent setrecaptureCallback = {setrecaptureCallback}/>
                  </div> */}
                </div>
                {/* {
                  recaptureCallback &&
                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                      <button
                        type="submit"
                        className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto"
                      >
                        Submit
                      </button>
                    </div>
                } */}
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    type="submit"
                    className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
