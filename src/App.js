import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpenses";
function App() {
  const [expenses, setExpenses] = useState([]);
  const appExpenseHandler = (expensesObj) => {
    setExpenses((previousExpenses) => {
      return [expensesObj, ...previousExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={appExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
