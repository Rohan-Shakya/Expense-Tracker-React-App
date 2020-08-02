import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
export const Filter = (props) => {
  const { transactions } = useContext(GlobalContext);

  const filter = (
    <div className='filterClass'>
      <h3>History</h3>
      <ul>
        <li
          className={
            props.filtered.allFilterToggler
              ? 'activatedFilter'
              : 'deactivatedFilter'
          }
          onClick={props.allToggler}
        >
          All
        </li>
        <li
          className={
            props.filtered.incomeFilterToggler
              ? 'activatedFilter'
              : 'deactivatedFilter'
          }
          onClick={props.incomeToggler}
        >
          Income
        </li>
        <li
          className={
            props.filtered.expenseFilterToggler
              ? 'activatedFilter'
              : 'deactivatedFilter'
          }
          onClick={props.expenseToggler}
        >
          Expense
        </li>
      </ul>
    </div>
  );

  return <div>{transactions.length > 0 ? filter : ''}</div>;
};
