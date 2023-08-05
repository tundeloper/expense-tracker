import { FlatList, StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import GlobalStyles from "../../constants/styles";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.9,
        date: new Date('2022-3-6')
    },
    {
        id: 'e2',
        description: 'A pair of shoes',
        amount: 99.29,
        date: new Date('2023-8-4')
    },
    {
        id: 'e3',
        description: 'some bananas',
        amount: 59.9,
        date: new Date('2023-8-1')
    },
    {
        id: 'e4',
        description: 'A book',
        amount: 14.99,
        date: new Date('2023-8-5')
    },
    {
        id: 'e5',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2022-8-1')
    },
    {
        id: 'e6',
        description: 'A pair of shoes',
        amount: 59.9,
        date: new Date('2022-3-6')
    },
    {
        id: 'e7',
        description: 'A pair of shoes',
        amount: 99.29,
        date: new Date('2023-8-4')
    },
    {
        id: 'e8',
        description: 'some bananas',
        amount: 59.9,
        date: new Date('2023-8-1')
    },
    {
        id: 'e9',
        description: 'A book',
        amount: 14.99,
        date: new Date('2023-8-5')
    },
    {
        id: 'e10',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2022-8-1')
    },
]

export default function ExpensesOutput({expenses, expensesPeriod}) {
  return (
    <View style={styles.container}>
        <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
          <ExpensesList expenses={DUMMY_EXPENSES} />
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