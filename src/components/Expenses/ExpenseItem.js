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
		<li>
			<Card className="expense-item">
				<ExpenseDate date={props.date} />
				<ExpenseDescription title={title} amount={props.amount} />
				<button onClick={clickHandler}>Change Title</button>
			</Card>
		</li>
	);
};

export default ExpenseItem;
