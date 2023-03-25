import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [year, setYear] = useState("2020");

  const ExpenseYearHandler = (enteredYearData) => {
    setYear(enteredYearData);
    console.log("Expens.js");
    console.log(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    // important point
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter Selected={year} onExpenseYear={ExpenseYearHandler} />
      <ExpensesChart expenses= {filteredExpenses}/>
      <ExpenseList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
