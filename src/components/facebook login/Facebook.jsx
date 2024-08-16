import React, { useState } from 'react';
import FacebookLogin from '@greatsumini/react-facebook-login';
import './Facebook.css'

function Facebook() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);

  const responseFacebook = (response) => {
    setLoading(false);
    if (response && response.accessToken) {
      setIsLoggedIn(true);
      setUserData(response);
    } else {
      console.error('Login failed or user denied permissions.');
    }
  };

  const componentClicked = () => {
    setLoading(true);
    console.log('clicked');
  };

  return (
    <div className='facebook-login'> 
      {isLoggedIn ? (
        <div>
          <p>Welcome, {userData.name}!</p>
          <img src={userData.picture.data.url} alt="Profile" />
          <button
            onClick={() => {
              setIsLoggedIn(false);
              setUserData({});
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <>
          {loading && <p>Loading...</p>}
          <FacebookLogin
            appId="291702253998214"
            autoLoad={false}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook}
          />
        </>
      )}
    </div>
  );
}

export default Facebook;
