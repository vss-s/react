import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import Styles from './FriendList.module.css';

const FriendList = ({ friends = [] }) => (
  <ul className={Styles.friendList}>
    {friends.map(item => (
      <FriendListItem key={item.id} {...item} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
