import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, selectedFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    selectedFilterYear(selectedYear);
  };

  return (
    <div>
    <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
      />
        {props.items.map((expense) => (
      <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
      />
        ))}
        
    </Card>
    </div>
  );
};

export default Expenses;
