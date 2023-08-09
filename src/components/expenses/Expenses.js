import { useState } from "react";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

 
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filteredChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
