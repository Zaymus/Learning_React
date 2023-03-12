import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");
	var filteredExpenses = props.items.filter(expense => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	const filterUpdateHandler = (year) => {
		setFilteredYear(year);
	};

	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onFilterUpdate={filterUpdateHandler}
			/>
			<ExpensesList items={filteredExpenses}/>
		</Card>
	);
};

export default Expenses;
