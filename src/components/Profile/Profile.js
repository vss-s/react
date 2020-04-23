import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats/Stats';
import Styles from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={Styles.profile}>
    <div className={Styles.description}>
      <img src={avatar} alt="user avatar" className={Styles.avatar} />
      <p className={Styles.name}>{name}</p>
      <p className={Styles.tag}>@{tag}</p>
      <p className={Styles.location}>{location}</p>
    </div>
    <Stats {...stats} />
  </div>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Profile;
