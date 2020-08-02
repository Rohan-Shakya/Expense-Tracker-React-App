import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { GlobalProvider } from './context/GlobalState';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { Filter } from './components/Filter';
import { TransactionList } from './components/TransactionList';

function App() {
  const [state, setState] = useState({
    allFilterToggler: true,
    incomeFilterToggler: false,
    expenseFilterToggler: false,
  });

  // Filter Toggler Methods Start.
  const allToggler = () => {
    if (!state.allFiltered) {
      setState({
        allFilterToggler: true,
        incomeFilterToggler: false,
        expenseFilterToggler: false,
      });
    }
  };

  const incomeToggler = () => {
    if (!state.incomeFilterToggler) {
      setState({
        allFilterToggler: false,
        incomeFilterToggler: true,
        expenseFilterToggler: false,
      });
    }
  };

  const expenseToggler = () => {
    if (!state.expenseFilterToggler) {
      setState({
        allFilterToggler: false,
        incomeFilterToggler: false,
        expenseFilterToggler: true,
      });
    }
  };
  // Filter Toggler Methods End.
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <AddTransaction />
        <Balance />
        <IncomeExpense />
        <Filter
          filtered={state}
          allToggler={allToggler}
          incomeToggler={incomeToggler}
          expenseToggler={expenseToggler}
        />
        <TransactionList filtered={state} />
      </div>
    </GlobalProvider>
  );
}

export default App;
