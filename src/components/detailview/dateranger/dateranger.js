import React from 'react'
import { RangePicker } from 'react-trip-date'

function DateRangerComponent({autoResponsive, setCheckInOut}) {
    const handleChange = (days) => {
        setCheckInOut(days);
    }
    return (
        <div>
            {
                autoResponsive?
                    <RangePicker
                        onChange={handleChange}
                        disabledBeforeToday={true}
                        disabledDays={[
                           
                        ]}
                        autoResponsive={true}
                        disabled
                    />
                :
                    <RangePicker
                        onChange={handleChange}
                        disabledBeforeToday={true}
                        disabledDays={[
                           
                        ]}
                        autoResponsive={false}
                        numberOfMonths={1}
                    />
            }
        </div>
    )
}

export default DateRangerComponent
