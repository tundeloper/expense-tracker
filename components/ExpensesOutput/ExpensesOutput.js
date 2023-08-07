import { FlatList, StyleSheet, View,Text } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import GlobalStyles from "../../constants/styles";

export default function ExpensesOutput({ expenses, expensesPeriod, fallbackText}) {
    let content = <Text></Text>
  return (
    <View style={styles.container}>
        <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
          <ExpensesList expenses={expenses} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 20,
        paddingBottom: 2,
        backgroundColor: GlobalStyles().colors.primary700,
        flex: 1
    }
})