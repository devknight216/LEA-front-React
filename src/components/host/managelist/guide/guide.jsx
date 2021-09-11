import React from "react";

const layout = [
  {
    title: "Check in and Check out Information",
    content:
      "Please indicate your desired check in and check out time for your guests. Please also indicate any special instructions related to check in and out that your guests should take note of.",
    image: "",
    variableName: "checkinout",
  },
  {
    title: "House Rules",
    content: "Please indicate your house rules that guests should be aware of.",
    image: "",
    variableName: "hostRule",
  },
  {
    title: "Neighborhood and Local Spots",
    content:
      "Let your guests know about places they can explore around the property. You can offer suggestions of the best places to eat, hang out and shop.",
    image: "",
    variableName: "neighboarhoodLoalSpots",
  },
];

function ManageListGuideComponent() {
  return (
    <div className="py-5">
      <div className="relative bg-gray-900">
        <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
          <div className="h-full w-full xl:grid xl:grid-cols-2">
            <div className="h-full xl:relative xl:col-start-2">
              <img
                className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                src="https://legendarystorage.s3.us-east-2.amazonaws.com/background/bg-discuss-guest.jpg"
                alt="People working on laptops"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
              />
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
          <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
            <h2 className="text-sm font-semibold tracking-wide uppercase">
              <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">Guide</span>
            </h2>
            <p className="mt-3 text-3xl font-extrabold text-white">Guests will soon be on the way.</p>
            <p className="mt-5 text-lg text-gray-300">When they book, they’ll show up here.</p>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto">
        {layout.map((item, index) => (
          <div key={index}>
            <h4 className="text-xl font-extrabold tracking-tight text-gray-900 py-5">{item.title}</h4>
            <p className="text-gray-500 italic">{item.content}</p>
            <div className="w-full py-5">
              <textarea rows={5} className="border w-full rounded-md p-2" name={item.variableName} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageListGuideComponent;
