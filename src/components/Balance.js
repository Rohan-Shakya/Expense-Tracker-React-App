import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  // ****** calculating total ********
  const total = amounts.reduce((acc, item) => {
    return (acc += item);
  }, 0);

  return (
    <>
      <h4>
        Your Balance : <span className='total'>${total}</span>
      </h4>
    </>
  );
};
