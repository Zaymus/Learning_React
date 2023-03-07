import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
	const expenses = [
		{
			title: "Toilet Paper",
			cost: 94.12,
			date: new Date(2020, 7, 14),
		},
		{
			title: "New TV",
			cost: 799.49,
			date: new Date(2021, 2, 12),
		},
		{
			title: "Car Insurance",
			cost: 294.67,
			date: new Date(2021, 2, 28),
		},
		{
			title: "New Desk (Wooden)",
			cost: 450,
			date: new Date(2021, 5, 12),
		},
	];

	const addExpenseHandler = (expense) => {};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={expenses} />
		</div>
	);
}

export default App;
