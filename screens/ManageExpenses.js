import { useContext, useLayoutEffect, } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import GlobalStyles from "../constants/styles";
import Button from "../components/UI/Button";
import { ExpenseContext } from "../store/context/expenses-contest";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { storeExpense } from "../utils/http";
// import { useSelector, useDispatch } from 'react-redux'


export default function MangeExpenses({ route, navigation }) {
  const ctx = useContext(ExpenseContext)
  const editedExpenseId = route.params?.expenseId
  const isEditing = !!editedExpenseId

  const selectedExpense = ctx.expenses.find(expense => expense.id === editedExpenseId)
  useLayoutEffect(() => {
    navigation.setOptions(
    {title: isEditing ? 'Edit Expense': 'Add Expense'}
  )
  }, [navigation, isEditing])

  const deleteExpenseHandler = () => {
    ctx.deleteExpense(editedExpenseId)
    navigation.goBack()
  }

  const cancelHandler = () => {
    navigation.goBack()
  }
  const confirmHandler = async (expenseData) => {
    if (isEditing) {
      ctx.updateExpense(editedExpenseId, expenseData)
    } else {
      const id = await storeExpense(expenseData)
      ctx.addExpense({...expenseData, id})
    }
    navigation.goBack()
  }
  
  return (
    <View style={styles.container}>
      <ExpenseForm isEditing={isEditing} onSubmit={confirmHandler} onCancel={cancelHandler} defaultVal={selectedExpense} />
      
      <View style={styles.deleteContainer}>
        {isEditing && <IconButton icon={'trash'} color={GlobalStyles().colors.error500} onPress={deleteExpenseHandler} size={36}/>}
      </View>
      {/* <Text>jvakvgkdu</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles().colors.primary800
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles().colors.primary200,
    alignItems: 'center'
   }
})