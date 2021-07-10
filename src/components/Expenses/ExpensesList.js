import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'
const ExpensesList = (props) => {
  if (props.filteredList.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses .</h2>;
  }
  return props.filteredList.map((expense) => (
    <ul className="expenses-list">
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    </ul>
  ));
};
export default ExpensesList;
