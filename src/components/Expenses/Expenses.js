import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState("2020");
  const pickedYearHandler = (pickedYear) => {
    setfilteredYear(pickedYear);
  };
  const filteredList = props.expenses.filter(
    (expenses) => expenses.date.getFullYear().toString() === filteredYear
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearSaved={pickedYearHandler}
        />
        <ExpensesChart expenses={filteredList} />
        <ExpensesList filteredList={filteredList} />
      </Card>
    </li>
  );
}

export default Expenses;
