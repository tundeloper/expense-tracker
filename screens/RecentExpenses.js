import React, { useContext, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpenseContext } from '../store/context/expenses-contest'
import { getDateMinusDays } from '../utils/date'
import { fetchExpenses } from '../utils/http'
import LoadingOverlay from '../components/UI/LoadingOverlay'
import ErrorOverlay from '../components/UI/ErrorOverlay'

export default function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState()

  const expenseCtx = useContext(ExpenseContext)

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true)
      try {
        const expense = await fetchExpenses()
        expenseCtx.setExpenses(expense)
      } catch (error) {
        setError('Could not fetch expenses')
      }
      setIsFetching(false)
    }

    getExpenses()
  }, [])

  function errorHandler() {
    setError(null)
  }

  if(error && !isFetching) return <ErrorOverlay message={error} onConfirm={errorHandler} />

  if(isFetching) return <LoadingOverlay />

  const recentExpenses = expenseCtx.expenses.filter((expense) => {
    const today = new Date()
    const date7DaysAgo = getDateMinusDays(today, 7);
    return (expense.date > date7DaysAgo && expense.date <= today)
  })
  return <ExpensesOutput expenses={recentExpenses} expensesPeriod='last 7 days' fallbackText={'No expense for the past 7 days'} />
}
 