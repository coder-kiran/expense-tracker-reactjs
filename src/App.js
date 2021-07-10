import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpenses";
// const DUMMY_EXPENSE = [
//   {
//     id:"e1",
//     title: "I will show your expenses here..",
//     amount: "amount here",
//     date: new Date("2021-07-09")
//   }
// ]
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
