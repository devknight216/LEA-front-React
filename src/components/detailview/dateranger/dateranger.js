import React from 'react'
import { RangePicker } from 'react-trip-date'

function DateRangerComponent({autoResponsive}) {
    const handleChange = (days) => {
        console.log('Selected Datas', days);
    }
    return (
        <div>
            {
                autoResponsive?
                    <RangePicker
                        onChange={handleChange}
                        disabledBeforeToday={true}
                        disabledDays={['2021-8-28']}
                        autoResponsive={true}
                        disabled
                    />
                :
                    <RangePicker
                        onChange={handleChange}
                        disabledBeforeToday={true}
                        disabledDays={['2021-8-28']}
                        autoResponsive={false}
                        numberOfMonths={1}
                    />
            }
        </div>
    )
}

export default DateRangerComponent
