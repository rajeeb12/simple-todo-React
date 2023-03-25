import React, { useState } from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

function NewExpense(props)
{
    const [showForm, setShowForm] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
        };
        props.onAddExpense(expenseData);
        setShowForm(false);
        console.log(expenseData);
    };


    const showFormHandler = () =>{
        setShowForm(true);
    }
    const notShowFormHandler =() =>{
        setShowForm(false);
    }
    
    return(
        <div className='new-expense'>
            {!showForm && <button onClick={showFormHandler}>Add Expense</button>}
            {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancle={notShowFormHandler}/>}
        </div>
    );
}

export default NewExpense;