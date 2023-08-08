import { StyleSheet, View, Text } from "react-native";
import Input from "./Input";


export default function ExpenseForm() {
    function amountChangeHandler(params) { }
    
  return (
      <View style={styles.form}>
        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputRow}>
        <Input label={'Amount'} style={styles.rowInput} textInputConfig={{
            keyboardType: 'number-pad',
            onChangeText: amountChangeHandler
        }} />
        <Input label={'Date'} style={styles.rowInput} textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: () => {}
        }}/>
        </View>
        <Input label={'Description'} textInputConfig={{
            multiline: true,
            // autoCorrect: true
            // autoCapitalize: "none"
        }}/>
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
    }
})