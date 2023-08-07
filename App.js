import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MangeExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
const Stack = createNativeStackNavigator()
const BotomTabs = createBottomTabNavigator()
import GlobalStyles from './constants/styles';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './components/UI/IconButton';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';
import ExpenseContextProvider from './store/context/expenses-contest';

function ExpenpesesOverview() {
  return (
    <BotomTabs.Navigator screenOptions={{
      headerStyle: { backgroundColor: GlobalStyles().colors.primary500 },
      headerTintColor: 'white',
      tabBarStyle: { backgroundColor: GlobalStyles().colors.primary500 },
      tabBarActiveTintColor: GlobalStyles().colors.accent500
    }}>
      <BotomTabs.Screen name='RecentExpenses' component={RecentExpenses} options={{
        title: 'Recent Expenses',
        tabBarLabel: 'Recent',
        tabBarIcon: ({color, size}) => <Ionicons color={color} name='hourglass' size={size} />
      }} />
      <BotomTabs.Screen name='AllExpenses' component={AllExpenses} options={({ navigation, route }) => {
        function expenseHandler() {
          navigation.navigate('ManageExpense')
        }
        return {
        title: 'All Expenses',
        tabBarLabel: 'All Expenses',
        tabBarIcon: ({color, size}) => <Ionicons color={color} name='calendar' size={size} />,
        headerRight: ({tintColor}) => <IconButton icon={'add'} color={tintColor}  size={30} onPress={expenseHandler}/>,
        }
      }}/>
    </BotomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      {/* <Provider store={store}> */}
        <ExpenseContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='ExpensesOverview' screenOptions={{
          headerStyle: { backgroundColor: GlobalStyles().colors.primary500 },
          headerTintColor: 'white',
        }}>
          <Stack.Screen name='ExpensesOverview' component={ExpenpesesOverview} options={{headerShown: false,}}/> 
          <Stack.Screen name='ManageExpense' component={MangeExpenses} options={{
            title: 'manage expense',
            presentation: 'modal',
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
      </ExpenseContextProvider>
      {/* </Provider> */}
    </>
  );
}
