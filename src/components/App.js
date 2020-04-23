import React from 'react';
import Profile from './Profile/Profile';
import userData from './Profile/user.json';
import Statistic from './Statistic/Statistic';
import statisticalData from './Statistic/statistical-data.json';
import friends from './FriendList/friends.json';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

const App = () => (
  <div>
    <Profile {...userData} />
    <Statistic title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory transactions={transactions} />
  </div>
);

export default App;
