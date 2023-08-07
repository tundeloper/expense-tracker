import { FlatList, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

const renderExpenseItem = ({item} ) => {
    // console.log(item)
    return <ExpenseItem amount={item.amount} description={item.description} date={item.date} id={item.id} />
}

export default function ExpensesList({ expenses }) {
    
  return (
    <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id}/>
  )
}
