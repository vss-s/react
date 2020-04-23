import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Stats.module.css';

const Stat = ({ followers = 0, views = 0, likes = 0 }) => (
  <ul className={Styles.stats}>
    <li className={Styles.statsItem}>
      <span className={Styles.label}>Followers</span>
      <span className={Styles.quantity}>{followers}</span>
    </li>
    <li className={Styles.statsItem}>
      <span className={Styles.label}>Views</span>
      <span className={Styles.quantity}>{views}</span>
    </li>
    <li className={Styles.statsItem}>
      <span className={Styles.label}>Likes</span>
      <span className={Styles.quantity}>{likes}</span>
    </li>
  </ul>
);

Stat.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Stat;
