import React from 'react'
import GoogleMapReact from 'google-map-react';
import MarkIcon from 'assets/imgs/icon/mark.png'

const AnyReactComponent = ({  }) => <img src={MarkIcon} className="h-12"/>;


function GoogleMapComponent() {
    const data = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 15
    }
    return (
        <div>
             <div className="w-full h-52 border-2 rounded-md border-gray-900">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY}}
                    defaultCenter={data.center}
                    defaultZoom={data.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                    />
                </GoogleMapReact>
            </div>
        </div>
    )
}

export default GoogleMapComponent
