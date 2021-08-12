import React, { useState, useEffect } from 'react'
import KitchenImg from 'assets/imgs/property/kitchen.jpg';
import DetailViewComponent from 'components/admin/manageitem/detailview'
import FilterNavComponent from 'components/admin/manageitem/filternav'
import ItemsTableComponent from 'components/admin/manageitem/itemtable'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProperties } from 'reduxstore/propertyreducer/slice'

function ManageNewPropertyItemPage() {
    //Get Alll Properties
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllProperties());
    }, []);

    //Get Selected Item
    const [selected, getSelected ] = useState();

    return (
        <div>
            <FilterNavComponent/>
            <div className="border rounded-xl mt-5">
                <div className="py-6">
                    <div className="flex-1 relative z-0 flex overflow-hidden">
                        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none p-4">
                            <ItemsTableComponent getSelected = {getSelected}/>
                        </main>
                        <aside className="hidden relative xl:flex xl:flex-col flex-shrink-0 w-96 p-4">
                            <DetailViewComponent selected = { selected }/>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageNewPropertyItemPage
