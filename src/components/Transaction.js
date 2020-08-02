import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <>
      <li className={transaction.amount > 0 ? 'plus' : 'minus'}>
        {transaction.text}
        <div className='history_amount_delBtn'>
          <span>
            {sign}${Math.abs(transaction.amount)}
          </span>
          <button
            onClick={() => deleteTransaction(transaction.id)}
            className='delete-btn'
          >
            <img src={require('../images/dustbin.svg')} alt='delete' />
          </button>
        </div>
      </li>
    </>
  );
};
