import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

const getItem = JSON.parse(localStorage.getItem('localState'));

// Initial State
const initialState = {
  // transactions: [
  //   { id: 1, text: 'Flower', amount: -50 },
  //   { id: 2, text: 'Salary', amount: 300 },
  //   { id: 3, text: 'Book', amount: -100 },
  //   { id: 4, text: 'Camera', amount: 400 },
  // ],

  // ************ setting initial data to localStorage ************
  transactions: getItem ? getItem.transactions : [],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // ********** setting data after re-rendering ***********
  useEffect(() => {
    localStorage.setItem('localState', JSON.stringify(state));
  }, [state]);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
