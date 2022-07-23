import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enterdTitle, setEnteredTitle] = useState("");

  const [enterdAmount, setEnteredAmount] = useState("");

  const [enterdDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   setEnteredAmount: "",
  //   setEnteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    // setUserInup({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    // setUserInput({ ...userInput, setEnteredAmount: event.target.value });
  };

  const dateChangeHandler = (event) => {
    // setUserInput({ ...userInput, setEnteredDate: event.target.value });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
