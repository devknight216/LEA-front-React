import BookHistoryAdminComponent from 'components/admin/booking/bookhistory'
import BookUsersComponent from 'components/admin/booking/bookusertable'
import React from 'react'

function BookingManagementPage() {
    return (
        <div className="h-screen flex overflow-hidden bg-white">
            <div className="flex-1 relative z-0 flex overflow-hidden">
                <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
                    <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                        <div className="h-full overflow-y-auto border border-gray-200 rounded-lg p-3" >
                            <p className="font-semibold text-lg">Booking History</p>
                            <BookHistoryAdminComponent/>
                        </div>
                    </div>
                </main>
                <aside className="hidden relative xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96  border-gray-200">
                    <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                        <div className="h-full overflow-y-auto border border-gray-200 rounded-lg py-3">
                            <p className=" font-extrabold text-gray-600 text-lg text-center">Properties</p>
                            <BookUsersComponent/>   
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default BookingManagementPage;
