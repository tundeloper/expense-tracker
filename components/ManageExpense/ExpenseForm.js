import { StyleSheet, View, Text } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/Button";
import { getFormattedDate } from "../../utils/date";


export default function ExpenseForm({ isEditing, onCancel, onSubmit, defaultVal }) {
    // console.log(defaultVal)
    const [inputVal, setInputVal] = useState({
        amount: defaultVal ? defaultVal.amount.toString() : '',
        date: defaultVal  ? getFormattedDate(defaultVal.date) : '',
        description: defaultVal? defaultVal.description : '',
    })
    function inputChangedHandler(identifier, enteredText) {
        setInputVal(curInput => ({...curInput, [identifier]: enteredText}))
    }

    function submitHandler() {
        const expenseData = {
            amount: +inputVal.amount,
            date: new Date(inputVal.date),
            description: inputVal.description
        }

        const amountIsValid = isNaN(expenseData.amount) && expenseData.amount > 0
        const dateIsValid = expenseData.date.toDateString() === 'Invalid Date'
        onSubmit(expenseData)
    }
    
  return (
      <View style={styles.form}>
        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputRow}>
        <Input label={'Amount'} style={styles.rowInput} textInputConfig={{
            keyboardType: 'number-pad',
            onChangeText: inputChangedHandler.bind(this, 'amount'),
            value: inputVal.amount,
        }} />
        <Input label={'Date'} style={styles.rowInput} textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, 'date'),
            value: inputVal.date
        }}/>
        </View>
        <Input label={'Description'} textInputConfig={{
            multiline: true,
            // autoCorrect: true
            // autoCapitalize: "none"
            onChangeText: inputChangedHandler.bind(this, 'description'),
            value: inputVal.description
        }}/>
        <View style={styles.buttons}>
            <Button style={styles.button} mode='flat' onPress={onCancel}>Cancel</Button>
            <Button style={styles.button} onPress={submitHandler}>{isEditing ? 'Update' : 'Add'}</Button>
      </View>
    </View>
  )
}

const style = StyleSheet.create({

})

const styles = StyleSheet.create({
    form: {
        paddingTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginVertical: 24,
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowInput: {
        flex: 1
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
})