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
                            "2021-08-24",
                            "2021-08-25",
                            "2021-08-26",
                            "2021-08-27",
                            "2021-08-29",
                            "2021-08-30",
                            "2021-08-31"
                        ]}
                        autoResponsive={true}
                        disabled
                    />
                :
                    <RangePicker
                        onChange={handleChange}
                        disabledBeforeToday={true}
                        disabledDays={[
                            "2021-08-24",
                            "2021-08-25",
                            "2021-08-26",
                            "2021-08-27",
                            "2021-08-29",
                            "2021-08-30",
                            "2021-08-31"
                        ]}
                        autoResponsive={false}
                        numberOfMonths={1}
                    />
            }
        </div>
    )
}

export default DateRangerComponent
