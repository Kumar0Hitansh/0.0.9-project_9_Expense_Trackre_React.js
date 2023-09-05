import React, { useState } from "react";
import "./FormExpence.css";

function FormExpence(props) {
  // ----------------------------------------------
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandeler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandeler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandeler = (e) => {
    setEnteredDate(e.target.value);
  };
  // -----------------------------------------------

  const onSubmit = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    // console.log(expenseData);// console.log
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  // ----------------------------------------------

  return (
    <form onSubmit={onSubmit}>
      {/* --------------------------------- */}
      <div className="new-expense__controles">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandeler}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandeler}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="">date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandeler}
          />
        </div>
      </div>
      {/* ---------------------------------------- */}

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default FormExpence;
