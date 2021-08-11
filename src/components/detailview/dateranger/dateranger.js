import React from 'react'
import { RangePicker } from 'react-trip-date'

function DateRangerComponent() {
    const handleChange = (days) => {
        console.log('Selected Datas', days);
    }
    return (
        <div>
            <RangePicker
                onChange={handleChange}
                disabledBeforeToday={true}
                disabledDays={['2021-8-12']}
            />
        </div>
    )
}

export default DateRangerComponent
