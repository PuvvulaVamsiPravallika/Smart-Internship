
import React from 'react';
import './ProfilePicture.css';

const ProfilePicture = ({ url }) => {
  return (
    <div className="profile-picture">
      <img src={url} alt="Profile" />
    </div>
  );
};

export default ProfilePicture;



