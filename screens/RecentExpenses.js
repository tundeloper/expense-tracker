import React from 'react'
import { Text, View } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

export default function RecentExpenses() {
  return <ExpensesOutput expensesPeriod='last 7 days' />
}
