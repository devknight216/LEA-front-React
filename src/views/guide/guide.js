import React from 'react'

const layout = [
    {
        title: "Check in and Check out Information",
        content: "Please indicate your desired check in and check out time for your guests. Please also indicate any special instructions related to check in and out that your guests should take note of.",
        image: "",
        variableName: "checkinout"
    },
    {
        title: "House Rules",
        content: "Please indicate your house rules that guests should be aware of.",
        image: "",
        variableName: "hostRule"
    },
    {
        title: "Neighborhood and Local Spots",
        content: "Let your guests know about places they can explore around the property. You can offer suggestions of the best places to eat, hang out and shop.",
        image: "",
        variableName: "neighboarhoodLoalSpots"
    }
]

function GuidePage() {
    return (
        <div>
            <div className="max-w-5xl mx-auto">
                <div className="text-center py-10">
                    <p className="text-4xl font-extrabold tracking-tight text-gray-900">Guides</p>
                </div>
                {
                    layout.map( ( item, index ) => (                        
                        <div key={index}>
                            <h4 className="text-xl font-extrabold tracking-tight text-gray-900 py-5">{item.title}</h4>
                            <p className="text-gray-500 italic">{item.content}</p>
                            <div className="w-full py-5">
                                <textarea rows={8} className="border w-full rounded-md p-2" name={item.variableName}/>
                            </div>
                        </div>
                    ) )
                }
            </div>
        </div>
    )
}

export default GuidePage
