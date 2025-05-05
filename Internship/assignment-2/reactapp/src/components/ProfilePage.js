
import React from 'react';
import ProfilePicture from './ProfilePicture';
import ProfileDetails from './ProfileDetails';
import SkillSection from './SkillSection';
import './ProfilePage.css';

const ProfilePage = () => {
  const user = {
    profilePictureUrl: 'https://via.placeholder.com/150',
    name: 'Nancharla Akhila',
    email: 'akhilanancharla185@gmail.com',
    bio: 'I am Nancharla Akhila from Vatsavai,Andhra Pradesh.I am currently pursuing my B.Tech degree in Computer Science at Seshadri Rao Gudlavalleru Engineering College.With a passion for software engineering, I have developed skills in Python, JavaScript, ExpressJS, NodeJS, SQL, Java, HTML, CSS',
    skills: [
      { name: 'web development', level: 70 },
      { name: 'Python', level:  70},
      { name: 'JavaScript', level: 75 },
      { name: 'Java', level: 75 },
      { name: 'Data Structures', level: 75 },
    ]
  };

  return (
    <div className="profile-page">
      <ProfilePicture url={user.profilePictureUrl} />
      <ProfileDetails name={user.name} email={user.email} bio={user.bio} />
      <SkillSection skills={user.skills} />
    </div>
  );
};

export default ProfilePage;
