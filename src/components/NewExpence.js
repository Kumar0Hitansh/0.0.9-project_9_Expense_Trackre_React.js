import React from "react";
import "./NewExpence.css";

import FormExpence from "./FormExpence";

function NewExpence(props) {
  const saveExpensedataHandeler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.floor(Math.random() * 100000000000000).toString(),
      ...enteredExpenseData,
    };

    props.onAddExpense(expenseData);

    // console.log(expenseData);
  };

  return (
    <div className="new-expence">
      <FormExpence onSaveExpenseData={saveExpensedataHandeler} />
    </div>
  );
}

export default NewExpence;
