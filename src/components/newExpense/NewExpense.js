import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  //adding props
  const [isEdditing, setIsEdditing] = useState(false);

  //Child-to-Parent Component Communication (Bottom-up)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsEdditing(false);
  };
  const startEdditingHandler = () => {
    setIsEdditing(true);
  };

  const stopEdditingHandler = () => {
    setIsEdditing(false);
  };

  return (
    <div className="new-expense">
      {!isEdditing && (
        <button onClick={startEdditingHandler}> Add New Expense</button>
      )}
      {isEdditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEdditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
