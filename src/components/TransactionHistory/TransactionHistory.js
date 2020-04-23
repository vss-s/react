import React from 'react';
import PropTypes from 'prop-types';
import Styles from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => (
  <table className={Styles.transactionHistory}>
    <thead>
      <tr>
        <th className={Styles.tableTitle}>Type</th>
        <th className={Styles.tableTitle}>Amount</th>
        <th className={Styles.tableTitle}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {transactions.map(item => (
        <tr className={Styles.tableRows} key={item.id}>
          <td className={Styles.tableCells}>{item.type}</td>
          <td className={Styles.tableCells}>{item.amount}</td>
          <td className={Styles.tableCells}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ),
};

export default TransactionHistory;
