import BookDetailComponent from 'components/book/bookdetail';
import PropertyDetailComponent from 'components/book/propertydetail';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPropertyById } from 'reduxstore/propertyreducer/action';

function BookPage({ match }) {

    const dispatch = useDispatch();
    useEffect(() => {       
       dispatch(getPropertyById(match.params.id))
    }, [])

    return (
        <div className="bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto py-10 gap-5">
                <div>
                    <PropertyDetailComponent/>
                </div>
                <div>
                    <BookDetailComponent/>
                </div>
            </div>
                                
        </div>
    )
}

export default BookPage
