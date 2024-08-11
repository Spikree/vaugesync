import './UserProfileLeft.css'
import React from 'react'

const UserProfileLeft = () => {
    return (
        <div className='user-profile-left-bar'>
            <div className="profile-pic">
                <h1>AM</h1>
            </div>

            <div className="name">
                Avishkar Mahalingpure
            </div>

            <div className="user-profile-options">
                <ul>
                    <li>
                        account security
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default UserProfileLeft