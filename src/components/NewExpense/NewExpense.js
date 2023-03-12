import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
	const [addExpense, setAddExpense] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		setAddExpense(false);
		props.onAddExpense(expenseData);
	}

	const cancelExpenseHandler = () => {
		setAddExpense(false);
	}

	const addExpenseHandler = () => {
		setAddExpense(true);
	}

	return (
		<div className="new-expense">
			{!addExpense && <button onClick={addExpenseHandler}>Add new expense</button>}
			{addExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpense={cancelExpenseHandler} />}
			
		</div>
	);
}

export default NewExpense;