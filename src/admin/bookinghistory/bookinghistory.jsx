import BookHistoryAdminComponent from "components/admin/booking/bookhistory";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllReservation } from "reduxstore/bookreducer/action";

function BookingManagementPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllReservation());
  }, []);

  return (
    <div className="">
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="h-full overflow-y-auto border border-gray-200 rounded-lg p-3">
          <p className="font-semibold text-lg">Booking History</p>
          <BookHistoryAdminComponent />
        </div>
      </div>
    </div>
  );
}

export default BookingManagementPage;
