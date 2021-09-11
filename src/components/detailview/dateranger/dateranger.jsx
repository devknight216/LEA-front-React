import React, { useState, useEffect } from "react";
import { RangePicker } from "react-trip-date";
import { getDaysArray } from "shared/function";

function DateRangerComponent({ autoResponsive, setCheckInOut, property }) {
  //Disabel selected days.
  const [days, setDays] = useState([]);
  useEffect(() => {
    property?.reservations?.forEach((reservation) => {
      setDays((prev) => [...prev, ...getDaysArray(reservation.from, reservation.to)]);
    });
  }, [property]);

  return (
    <div>
      {autoResponsive ? (
        <RangePicker onChange={setCheckInOut} disabledBeforeToday={true} disabledDays={days} autoResponsive={true} disabled />
      ) : (
        <RangePicker
          onChange={setCheckInOut}
          disabledBeforeToday={true}
          disabledDays={days}
          autoResponsive={false}
          numberOfMonths={1}
        />
      )}
    </div>
  );
}

export default DateRangerComponent;
