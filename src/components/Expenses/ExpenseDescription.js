const ExpenseDescription = (props) => {
	return (
		<div className="expense-item__description">
			<h2>{props.title}</h2>
			<div className="expense-item__price">${props.cost}</div>
		</div>
	);
};

export default ExpenseDescription;
