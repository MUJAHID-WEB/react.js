import React from 'react'
import {Link} from 'react-router-dom'

export default function Links() {
    return (
        <div>
            <Link to='/home'>Home Page</Link> <br />
            <Link to='/about'>About Page</Link>

        </div>
    )
}
