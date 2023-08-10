import { StyleSheet, View, Text, Alert } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/Button";
import { getFormattedDate } from "../../utils/date";
import GlobalStyles from "../../constants/styles";


export default function ExpenseForm({ isEditing, onCancel, onSubmit, defaultVal }) {
    // console.log(defaultVal)
    const [inputs, setInputs] = useState({
        amount: {
            value: defaultVal ? defaultVal.amount.toString() : '',
            isValid: true
        },
        date: {
            value: defaultVal ? getFormattedDate(defaultVal.date) : '',
            isValid: true
        },
        description:{
            value: defaultVal ? defaultVal.description : '',
            isValid: true},
    })
    function inputChangedHandler(identifier, enteredText) {
        setInputs(curInput => ({ ...curInput, [identifier]: { value: enteredText, isValid: true } }))
    }

    function submitHandler() {
        const expenseData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value
        }

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0
        const dateIsValid = expenseData.date.toDateString() !== 'Invalid Date'
        const descIsValid = expenseData.description.trim().length > 0
        
        if (!amountIsValid || !dateIsValid || !descIsValid) {
            // Alert.alert('Invalid Input', 'Please Check your input valu es')
            return setInputs(curInputs => {
                return {
                    amount: { value: curInputs.amount.value, isValid: amountIsValid },
                    date: {value: curInputs.date.value, isValid: dateIsValid},
                    description: {value: curInputs.description.value, isValid: descIsValid},
                }
            })
        }
        onSubmit(expenseData)
    }

    const formIsInvalid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid
    
  return (
      <View style={styles.form}>
        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputRow}>
        <Input label={'Amount'} style={styles.rowInput} invalid={!inputs.amount.isValid} textInputConfig={{
            keyboardType: 'number-pad',
            onChangeText: inputChangedHandler.bind(this, 'amount'),
            value: inputs.amount.value,
        }} />
        <Input label={'Date'} style={styles.rowInput} invalid={!inputs.date.isValid} textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, 'date'),
            value: inputs.date.value
        }}/>
        </View>
        <Input label={'Description'} invalid={!inputs.description.isValid}  textInputConfig={{
            multiline: true,
            // autoCorrect: true
            // autoCapitalize: "none"
            onChangeText: inputChangedHandler.bind(this, 'description'),
            value: inputs.description.value
        }}/>
        {formIsInvalid && <Text style={styles.errorText}>Invalid input valus - Please check your entered data</Text>}
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
    errorText: {
        textAlign: 'center',
        color: GlobalStyles().colors.error500,
        margin: 8
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