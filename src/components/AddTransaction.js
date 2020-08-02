import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '' || amount === '') {
      alert('Transactions cannot be empty!!');
    } else {
      const newTransaction = {
        id: Math.floor(Math.random() * 1000000),
        text,
        amount: +amount,
      };

      addTransaction(newTransaction);
      setText('');
      setAmount('');
    }
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='forms'>
          <div className='form-control'>
            <label htmlFor='text'>Text</label>
            <input
              type='text'
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder='For eg. Salary '
            />
          </div>
          <div className='form-control2'>
            <label htmlFor='amount'>Amount</label>
            <input
              type='number'
              id='amount'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder='For eg. 10000 (-100 for expense) '
            />
          </div>
        </div>

        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
};
