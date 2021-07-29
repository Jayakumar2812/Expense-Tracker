import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DummyExpenses = [
  {
    id: 'e1',
    title: 'Chess board',
    amount: 120,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2', 
    title: 'Table-Fan', 
    amount: 2500, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Fault In Our Stars-book',
    amount: 250,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Mosquito-Bat',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const  App = (props)=> {
  const[expenses,setExpenses]=useState(DummyExpenses)


  const addExpenseHandler =(expense)=>{
    setExpenses(prevExpenses =>{
      return [expense,...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses}/>
      <p> this is also visible</p>
    </div>
  );
}

export default App;
