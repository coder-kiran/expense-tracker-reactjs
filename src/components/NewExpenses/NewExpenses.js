import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
   const expenseData = {
     ...enteredExpenseData,
     id: Math.random().toString()
   }
   console.log(expenseData)
   props.onAddExpense(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
