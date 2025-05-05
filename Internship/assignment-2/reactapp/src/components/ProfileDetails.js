import React from 'react';
import './ProfileDetails.css';

const ProfileDetails = ({ name, email, bio }) => {
  return (
    <div className="profile-details">
      <h1>{name}</h1>
      <p className="email">{email}</p>
      <p className="bio">{bio}</p>
    </div>
  );
};
export default ProfileDetails;