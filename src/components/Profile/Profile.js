import React, { useEffect, useState } from 'react';

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
        <div>
          <h2>{userDetails.firstName + " " + userDetails.lastName}</h2>
          <p>{userDetails.email}</p>
          {/* Display other user details here */}
        </div>
      )}
    </div>
  );
}

export default Profile;
