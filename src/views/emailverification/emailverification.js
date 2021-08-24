import { Toast } from 'components/common/notification';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { emailVerify } from 'shared/api';
import BrandIcon from 'assets/imgs/brand/png-black-background.png'

function EmailVerificaionPage({match}) {
    const [success, setSuccess] = useState(false)
    useEffect(() => {
       async function emailVerification(){
           try {               
                const res = await emailVerify((match.params.token));
                Toast("", res.data.message, "success");
                setSuccess(true);
           } catch (error) {
                console.log(error);
                setSuccess(false);
           }
       }
       emailVerification()
    }, [])

    return (
        <div className="bg-gray-50 pt-10 pb-20">
            <div className="max-w-5xl mx-auto shadow-lg rounded-md bg-white p-5 text-gray-500 text-center    ">
                <div className="flex-shrink-0 flex justify-center">
                    <Link to="/" className="inline-flex">
                        <span className="sr-only">Workflow</span>
                        <img
                            className="h-24 w-auto"
                            src={BrandIcon}
                            alt=""
                        />
                    </Link>
                </div>
                {
                    success?<div>
                        <p className="text-gray-600 font-bold text-2xl my-5">Your email is verified! </p>
                        <p>
                            Get started by adding your properties and explore more to know other services we offer!<br/>
                            Click 
                            <Link to="/signin" className="italic text-blue-500"> here </Link>
                            to sign in.
                        </p>
                    </div>
                    :<div>
                        <p className ="text-gray-600 font-bold text-2xl my-5">Verification Faild </p>
                        <p>
                            Retry 
                            <Link to="/signup" className="italic text-blue-500"> sign up </Link>again
                        </p> 
                    </div>
                }

            </div>
        </div>
    )
}

export default EmailVerificaionPage
