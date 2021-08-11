import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
    return (
        <div className='text-center text-3xl py-20'>
            404 Not found <Link to="/" className='underline'>Go to Home</Link>
        </div>
    )
}

export default NotFoundPage
