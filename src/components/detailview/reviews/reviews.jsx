import React from "react";
import ReactStars from "react-rating-stars-component";

export default function ReveiwsComponent({ reviews }) {
  return (
    <div>
      {reviews && reviews?.length !== 0 ? (
        <>
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <div className="p-5 flex items-center flex-wrap">
              <p className="text-gray-500 font-extrabold">
                Score: {4.8} ({3} Reviews)
              </p>
              <div className="ml-2">
                <ReactStars {...{ size: 25, value: 5, edit: false }} />
              </div>
            </div>
            <ul>
              {reviews.map((application) => (
                <li key={application.applicant.email}>
                  <div className="block hover:bg-gray-50">
                    <div className="flex items-center px-4 py-4 sm:px-6">
                      <div className="min-w-0 flex-1 flex items-center">
                        <div className="flex-shrink-0">
                          <img className="h-12 w-12 rounded-full" src={application.applicant.imageUrl} alt="" />
                        </div>
                        <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                          <div>
                            <p className="text-sm font-medium text-indigo-600 truncate">{application.applicant.name}</p>
                            <ReactStars {...{ size: 15, value: 4, edit: false }} />
                          </div>
                          <div className="hidden md:block">
                            <div>
                              <p className="text-sm text-gray-500">
                                Applied on <time dateTime={application.date}>{application.dateFull}</time>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="py-2 md:px-10 lg:px-16 px-2">
                      <p className="text-gray-500">{reviews.contents}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div className="text-center bg-white shadow overflow-hidden sm:rounded-md py-5">
          <p className="text-gray-300 font-semibold">No Reviews</p>
        </div>
      )}
    </div>
  );
}
