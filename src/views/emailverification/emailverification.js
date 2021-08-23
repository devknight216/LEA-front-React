import { Toast } from 'components/common/notification';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { emailVerify } from 'shared/api';

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
                {
                    success?<div>
                        <p>Verification </p>
                        <p>
                            Click 
                            <Link to="/signin" className="italic text-blue-500"> here </Link>
                            to sign in.
                        </p>
                    </div>
                    :<div>
                        <p>Verification Faild </p>
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
