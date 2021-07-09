import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState("2020");
  const pickedYearHandler = (pickedYear) => {
    setfilteredYear(pickedYear);
  };
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearSaved={pickedYearHandler}
        />
      {
       props.expenses.map(expense => <ExpenseItem 
        title = {expense.title} 
        amount = {expense.amount}
        date = {expense.date}
        />
        )
      }
       

      </Card>
    </div>
  );
}

export default Expenses;
