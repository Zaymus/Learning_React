import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDescription from "./ExpenseDescription";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
	const [title, setTitle] = useState(props.title);

	const clickHandler = () => {
		setTitle("Updated!");
	};

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<ExpenseDescription title={title} cost={props.cost} />
			<button onClick={clickHandler}>Change Title</button>
		</Card>
	);
};

export default ExpenseItem;
