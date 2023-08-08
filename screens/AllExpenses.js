import React, { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpenseContext } from '../store/context/expenses-contest'

export default function AllExpenses() {
  const {expenses} = useContext(ExpenseContext)
  return <ExpensesOutput expenses={expenses} expensesPeriod="Total" fallbackText={'No registered expense found'} />
}
