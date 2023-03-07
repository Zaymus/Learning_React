import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterUpdateHandler = (year) => {
		setFilteredYear(year);
	};

	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onFilterUpdate={filterUpdateHandler}
			/>
			<ExpenseItem
				title={props.expenses[0].title}
				cost={props.expenses[0].cost}
				date={props.expenses[0].date}
			/>
			<ExpenseItem
				title={props.expenses[1].title}
				cost={props.expenses[1].cost}
				date={props.expenses[1].date}
			/>
			<ExpenseItem
				title={props.expenses[2].title}
				cost={props.expenses[2].cost}
				date={props.expenses[2].date}
			/>
			<ExpenseItem
				title={props.expenses[3].title}
				cost={props.expenses[3].cost}
				date={props.expenses[3].date}
			/>
		</Card>
	);
};

export default Expenses;
