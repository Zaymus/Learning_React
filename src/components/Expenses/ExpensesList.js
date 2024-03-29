import React from 'react';
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const expensesList = (props) => {
	if (props.items.length === 0) {
		return <h2 className="expenses-list_fallback">Found no expenses.</h2>
	}

  return <ul className="expenses-list">
    {props.items.map((expense) => {
			return <ExpenseItem 
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
		})}
  </ul>
}

export default expensesList;