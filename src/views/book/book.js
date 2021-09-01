import BookDetailComponent from 'components/book/bookdetail';
import PropertyDetailComponent from 'components/book/propertydetail';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPropertyById } from 'reduxstore/propertyreducer/action';
import qs from 'qs';
import { getDaysArray } from 'shared/function';

function BookPage({ match }) {

    const dispatch = useDispatch();
    useEffect(() => {       
       dispatch(getPropertyById(match.params.id))
    }, [])

    const query = qs.parse(location.search, { ignoreQueryPrefix: true });
    const property = useSelector((state) => state.properties.property);
    const guestInfo = useSelector((state) => state.auth.user);

    //Booking info
    const [bookData, setBookData] = useState({
        hostId: property?.hostInfo?.userId,
        guestId: guestInfo?.userID,
        adult: parseInt(query.adult),
        children: parseInt(query.children),
        infants: parseInt(query.infants),
        pets: parseInt(query.pets),
        checkedin: query.checkedin,
        checkedout: query.checkedout,
        totalCost: 0,
        dateArray: [],
        status: null
    })

    useEffect(() => {
        const dates = getDaysArray(bookData.checkedin, bookData.checkedout);
        setBookData({
            ...bookData,
            dateArray: dates,
            hostId: property?.hostInfo?.userId,
            totalCost: (parseInt(property?.nightlyRate) * dates.length) + (property?.depositFee | 0) + ((property?.petAllowFee?.fee | 0)*bookData.pets)
        })
    }, [property])

    return (
        <div className="bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto py-10 gap-5">
                <div>
                    <PropertyDetailComponent setBookData={setBookData} bookData={bookData}/>
                </div>
                <div>
                    <BookDetailComponent setBookData={setBookData} bookData={bookData}/>
                </div>
            </div>
                                
        </div>
    )
}

export default BookPage
