import React, {useState} from 'react';
import './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94,
    date: new Date(2021, 2, 24),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 294,
    date: new Date(2021, 3, 24),
  },
  {
    id: "e3",
    title: "Tv",
    amount: 300,
    date: new Date(2022, 5, 24),
  },
  {
    id: "e4",
    title: "Desk",
    amount: 450,
    date: new Date(2023, 8),
  },
];

function App() {
  const [expenses, setExpenses]= useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) =>{
    setExpenses( (prevExpense) => {
      return [expense, ...prevExpense];
    });
  }
  console.log(expenses);

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
