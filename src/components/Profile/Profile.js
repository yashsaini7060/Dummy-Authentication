import React, { useEffect, useState } from 'react';
import "./Profile.css"
function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchUserDetails = async () => {
      const response = await fetch(`https://dummyjson.com/users/${user.id}`);
      const data = await response.json();
      setUserDetails(data);
      console.log(data)
      localStorage.setItem('userDetails', JSON.stringify(data));
    };

    fetchUserDetails();
  }, [user.id]);

  return (
    <div>
      {userDetails && (
        <div className='content'>
          <div className="card">
          <img  className='profile' src={userDetails.image} alt="" />
          <h2>{userDetails.firstName + " " + userDetails.maidenName + " " + userDetails.lastName}</h2>
          <p className='email'>{userDetails.email}</p>
          <p className='phone'>{userDetails.phone}</p>
          <p className='address'>{userDetails.address.address}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
