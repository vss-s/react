import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Statistic.module.css';

const backgroundColorGenerator = () =>
  `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;

const Statistic = ({ title, stats = [] }) => (
  <section className={Styles.statistics}>
    {title && <h2 className={Styles.title}>{title}</h2>}

    <ul className={Styles.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li
          key={id}
          style={{ backgroundColor: backgroundColorGenerator() }}
          className={Styles.item}
        >
          <span className={Styles.label}>{label}</span>
          <span className={Styles.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistic.propType = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ).isRequired,
};

export default Statistic;
