import React from 'react';
import { ExternalLinkIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

export default function CtaComponent() {
    return (
        <div>            
            <div className="relative bg-white">
                <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
                        alt=""
                    />
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600"
                        style={{ mixBlendMode: 'multiply' }}
                    />
                </div>
                <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
                    <div className="md:ml-auto md:w-1/2 md:pl-10">
                        <h2 className="text-base font-semibold uppercase tracking-wider text-gray-800">
                            TALK TO OUR TEAM OF EXPERTS
                        </h2>
                        <p className="mt-2 text-gray-800 text-3xl font-extrabold tracking-tight sm:text-4xl">We're here to help</p>
                        <p className="mt-3 text-lg text-gray-800">
                            Want to know more about our properties? Maybe you have some questions about the rates. 
                            Fill out the contact form and one our  real estate consultants will reach out to you and assist you with your concerns. 
                        </p>
                        <div className="mt-8">
                            <div className="inline-flex rounded-md shadow">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-400 hover:bg-red-700"
                                >
                                    Contact Us
                                    <ExternalLinkIcon className="-mr-1 ml-3 h-5 w-5 text-white" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

