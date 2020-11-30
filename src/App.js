import './App.css';
import React from 'react'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Amount from './components/Amount';
import AddTransaction from './components/AddTransaction';
import Transaction from './components/Transaction';
import {ExpenseProvider} from './components/ContextProvider';

function App() {
  return (
      <ExpenseProvider>
        <Header></Header>
        <Amount></Amount>
        <Transaction></Transaction>
        <AddTransaction></AddTransaction>
      </ExpenseProvider>
  );
}

export default App;
