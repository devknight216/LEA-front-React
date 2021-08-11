import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";

function RecaptureComponent({setrecaptureCallback}) {
    const onChange = (value) => {
        setrecaptureCallback(value)
    }
    return (
        <div>
            <ReCAPTCHA
                sitekey={ process.env.REACT_APP_GOOGLE_RECAPTURE_API_KEY }
                onChange={onChange}
            />
        </div>
    )
}

export default RecaptureComponent
