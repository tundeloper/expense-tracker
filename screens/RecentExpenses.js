import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpenseContext } from '../store/context/expenses-contest'
import { getDateMinusDays } from '../utils/date'
import { fetchExpenses } from '../utils/http'

export default function RecentExpenses() {
  const expenseCtx = useContext(ExpenseContext)

  useEffect(() => {
    async function getExpenses() {
      const expense = await fetchExpenses()
      expenseCtx.setExpenses(expense)
    }

    getExpenses()
  }, [])
  const recentExpenses = expenseCtx.expenses.filter((expense) => {
    const today = new Date()
    const date7DaysAgo = getDateMinusDays(today, 7);
    return (expense.date > date7DaysAgo && expense.date <= today)
  })
  return <ExpensesOutput expenses={recentExpenses} expensesPeriod='last 7 days' fallbackText={'No expense for the past 7 days'} />
}
 