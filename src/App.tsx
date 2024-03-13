import ExpenseList from "./Expense-Tracker/components/ExpenseList";
import Form from "./components/Form";

function App() {
  const expenses = [
    { id: 1, description: "aaa", amount: 10, category: "utilities" },
    { id: 1, description: "bbb", amount: 10, category: "utilities" },
  ];
  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => console.log("Delete", id)}
      ></ExpenseList>
    </div>
  );
}
export default App;
