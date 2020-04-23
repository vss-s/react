import React from 'react';
import PropTypes from 'prop-types';
import Styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline = false }) => {
  const statusClasses = [Styles.status];
  isOnline && statusClasses.push(Styles.active);
  return (
    <li className={Styles.item}>
      <span className={statusClasses.join(' ')}></span>
      <img className={Styles.avatar} src={avatar} alt={name} width="48" />
      <p className={Styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
