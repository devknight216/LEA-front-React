import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import AvatarEditorComponent from 'components/editprofile/avatarupload';
import { getUserByID, updateUser } from 'reduxstore/userreducer/action';
import { useForm } from 'react-hook-form';
import { saveAvatarUrlToBackend } from 'shared/api';
import TapComponent from 'components/editprofile/tap';
import EditAccountPersonalInfoComponent from 'components/editprofile/personalinfo';
import { PrivateRoute } from 'shared/function';
import EditAccountSecuritySettingComponent from 'components/editprofile/securitysetting';
import EditAccountPaymentSettingComponent from 'components/editprofile/paymentsetting';

export default function EditProfilePage() {
    //Control Taps
    const location = useLocation();
    const [tabs, setTaps] = useState([
        { name: 'Personal info', href: '/user/edit-profile', current: false },
        { name: 'Login & Security', href: '/user/edit-profile/security-setting', current: false },
        { name: 'Payment & Payout', href: '/user/edit-profile/payment-setting', current: true },
    ])
    useEffect(() => {
       switch (location.pathname) {
           case "/user/edit-profile":
                setTaps([
                    { name: 'Personal info', href: '/user/edit-profile', current: true },
                    { name: 'Login & Security', href: '/user/edit-profile/security-setting', current: false },
                    { name: 'Payment & Payout', href: '/user/edit-profile/payment-setting', current: false },
                ])
                break;
            case "/user/edit-profile/security-setting":
                setTaps([
                    { name: 'Personal info', href: '/user/edit-profile', current: false },
                    { name: 'Login & Security', href: '/user/edit-profile/security-setting', current: true },
                    { name: 'Payment & Payout', href: '/user/edit-profile/payment-setting', current: false },
                ])
                break;
            case "/user/edit-profile/payment-setting":
                setTaps([
                    { name: 'Personal info', href: '/user/edit-profile', current: false },
                    { name: 'Login & Security', href: '/user/edit-profile/security-setting', current: false },
                    { name: 'Payment & Payout', href: '/user/edit-profile/payment-setting', current: true },
                ])
                break;
           default:
               break;
       }
    }, [location]);
    
    return (
        <div className=" max-w-7xl mx-auto p-5">
            <div className="space-y-3">
                <div>
                    <div>
                        <h3 className="text-3xl leading-6 font-semibold text-gray-900 py-5">My account</h3>
                    </div>
                </div>
                <div className="pt-2">
                    <TapComponent tabs={tabs} setTaps={setTaps}/>                       
                </div>
                <div>
                    <Switch>
                        <PrivateRoute exact path="/user/edit-profile" component={EditAccountPersonalInfoComponent}/>
                        <PrivateRoute path="/user/edit-profile/security-setting" component={EditAccountSecuritySettingComponent}/>
                        <PrivateRoute path="/user/edit-profile/payment-setting" component={EditAccountPaymentSettingComponent}/>
                    </Switch>
                </div>
            </div>     
        </div>
    )
}
