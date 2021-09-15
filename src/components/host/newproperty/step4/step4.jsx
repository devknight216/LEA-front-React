import React from "react";

function HostNewPropertyStepFour({ previousStep, property, setProperty, nextStep }) {
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
  return (
    <div>
      <div className="max-w-4xl mx-auto rounded-md shadow-md p-3 sm:p-8 bg-white px-2">
        {layout.map((item, index) => (
          <div key={index}>
            <h4 className="text-xl font-extrabold tracking-tight text-gray-900">{item.title}</h4>
            <p className="text-gray-500 italic">{item.content}</p>
            <div className="w-full py-2">
              <textarea rows={5} className="border w-full rounded-md p-2" name={item.variableName} />
            </div>
          </div>
        ))}
        <div className="text-right">
          <button className="bg-red-500 focus:bg-red-700 text-white px-10 py-2 rounded-md" onClick={nextStep}>
            Complete
          </button>
        </div>
      </div>
    </div>
  );
}

export default HostNewPropertyStepFour;
