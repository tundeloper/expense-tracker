import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpenseContext } from '../store/context/expenses-contest'
import { getDateMinusDays } from '../utils/date'

export default function RecentExpenses() {
  const { expenses } = useContext(ExpenseContext)
  console.log(expenses)
  const recentExpenses = expenses.filter((expense) => {
    const today = new Date()
    const date7DaysAgo = getDateMinusDays(today, 7);
    return (expense.date > date7DaysAgo && expense.date <= today)
  })
  return <ExpensesOutput expenses={recentExpenses} expensesPeriod='last 7 days' />
}
 