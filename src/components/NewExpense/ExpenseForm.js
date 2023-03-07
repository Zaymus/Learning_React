import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, "0");
	var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
	var yyyy = today.getFullYear();

	// const [enteredTitle, setEnteredTitle] = useState("");
	// const [enteredAmount, setEnteredAmount] = useState("0.01");
	// const [enteredDate, setEnteredDate] = useState(`${yyyy}-${mm}-${dd}`);

	const [userInput, setUserInput] = useState({
		enteredTitle: "",
		enteredAmount: "0.01",
		enteredDate: `${yyyy}-${mm}-${dd}`,
	});

	const titleChangeHandler = (event) => {
		// setEnteredTitle(event.target.value);

		setUserInput((prevState) => {
			return { ...prevState, enteredTitle: event.target.value };
		});
	};
	const amountChangeHandler = (event) => {
		// setEnteredAmount(event.target.value);
		setUserInput((prevState) => {
			return { ...prevState, enteredAmount: event.target.value };
		});
	};
	const dateChangeHandler = (event) => {
		// setEnteredDate(event.target.value);
		setUserInput((prevState) => {
			return { ...prevState, enteredDate: event.target.value };
		});
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const expenseData = {
			title: userInput["enteredTitle"],
			amount: userInput["enteredAmount"],
			date: new Date(userInput["enteredDate"]),
		};

		props.onSaveExpenseData(expenseData);
		setUserInput({
			enteredTitle: "",
			enteredAmount: "0.01",
			enteredDate: `${yyyy}-${mm}-${dd}`,
		});
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						onChange={titleChangeHandler}
						value={userInput["enteredTitle"]}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						onChange={amountChangeHandler}
						value={userInput["enteredAmount"]}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						value={userInput["enteredDate"]}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
