import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = ({ filtered }) => {
  const { transactions } = useContext(GlobalContext);

  // Setting UI according to the filter
  let toggler;
  if (filtered.allFilterToggler) {
    toggler = transactions;
  }
  if (filtered.incomeFilterToggler) {
    toggler = transactions.filter((transaction) => {
      return transaction.amount > 0;
    });
  }
  if (filtered.expenseFilterToggler) {
    toggler = transactions.filter((transaction) => {
      return transaction.amount < 0;
    });
  }

  return (
    <>
      <ul className='list'>
        {toggler &&
          toggler.map((transaction) => {
            return (
              <Transaction key={transaction.id} transaction={transaction} />
            );
          })}
      </ul>
    </>
  );
};
