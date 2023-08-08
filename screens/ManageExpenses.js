import { useContext, useLayoutEffect, } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import GlobalStyles from "../constants/styles";
import Button from "../components/UI/Button";
import { ExpenseContext } from "../store/context/expenses-contest";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
// import { useSelector, useDispatch } from 'react-redux'


export default function MangeExpenses({ route, navigation }) {
  const ctx = useContext(ExpenseContext)
  const editedExpenseId = route.params?.expenseId
  const isEditing = !!editedExpenseId

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
  
  const confirmHandler = () => {
    // isEditing ? ctx.UpdateExpense() : ctx.addExpense()
    if (isEditing) {
      ctx.updateExpense(editedExpenseId, {description: 'Test!!!!', date: new Date(), amont: 29.99})
    } else {
      ctx.addExpense({description: 'Test', date: new Date(), amount: 19.99})
    }
    navigation.goBack()
  }
  
  return (
    <View style={styles.container}>
      <ExpenseForm />
      <View style={styles.buttons}>
        <Button style={styles.button} mode='flat' onPress={cancelHandler}>Cancel</Button>
        <Button style={styles.button} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
      </View>
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles().colors.primary200,
    alignItems: 'center'
   }
})