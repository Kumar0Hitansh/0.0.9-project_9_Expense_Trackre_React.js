import React, { useState } from "react";
import "./App.css";
import ExpenceItem from "./components/ExpenceItem";

import NewExpence from "./components/NewExpence";

let expensesData = [
  { id: 0, date: new Date(2023, 3, 15), title: "collage fees", amount: 30000 },
  { id: 1, date: new Date(2023, 3, 16), title: "mess", amount: 4000 },
  { id: 2, date: new Date(2023, 3, 17), title: "hostel fee ", amount: 40000 },
  { id: 3, date: new Date(2023, 3, 18), title: "transport", amount: 5000 },
  { id: 4, date: new Date(2023, 3, 19), title: "stationary", amount: 3000 },
];

function App() {
  const [expenses, setExpenses] = useState(expensesData);

  const addExpenseHandeler = (expence) => {
    const updateexpenses = [expence, ...expenses];

    setExpenses(updateexpenses);

    // console.log (expence);
  };

  return (
    <div className="App">
      <h1>EXPENSE TRACKER ON REACT.JS</h1>

      <NewExpence onAddExpense={addExpenseHandeler} />

      {expenses.map((expenses) => (
        <ExpenceItem date={expenses.date} title={expenses.title} price={expenses.amount} />
      ))}

      {/*       
      <ExpenceItem date={expenses[1].date} title={expenses[1].title} price={expenses[1].amount} />      
      <ExpenceItem date={expenses[2].date} title={expenses[2].title} price={expenses[2].amount} />      
      <ExpenceItem date={expenses[3].date} title={expenses[3].title} price={expenses[3].amount} />
      <ExpenceItem date={expenses[4].date} title={expenses[4].title} price={expenses[4].amount} />
       */}
    </div>
  );
}

export default App;
