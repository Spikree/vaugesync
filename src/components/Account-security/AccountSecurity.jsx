import './AccountSecurity.css'

import React from 'react'

const AccountSecurity = () => {
  return (
    <div className='account-security'>
      <div className="header">
        <h2>Account</h2>
        <p style={{fontSize:"16px", color:"gray"}}>Edit your account settings and change your password here</p>
      </div>

      <div className="email">
          <h4>Email:</h4>
          <div>
            <p>Avishkar@gmail.com</p>
          </div>
      </div>

      <div className="change-password">
        <h2>Password</h2>
        <form action="">
        <div className="current-password">
          <input placeholder='current password' type="text" name="" id="" />
        </div>
        <div className="new-password">
          <input placeholder='Enter new password' type="text" name="" id="" />
        </div>
        <div className="retype-new-password">
          <input placeholder='Re-type new password' type="text" name="" id="" />
        </div>

          <button>Change password</button>
        </form>
      </div>
    </div>
  )
}

export default AccountSecurity