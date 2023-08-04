import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
// import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MangeExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GlobaStyles } from './constants/styles';

const Stack = createNativeStackNavigator()
const BotomTabs = createBottomTabNavigator()

function ExpenpesesOverview() {
  console.log(GlobaStyles)
  return (
    <BotomTabs.Navigator screenOptions={{
      headerStyle: {backgroundColor: 'red'}
    }}>
      <BotomTabs.Screen name='RecentExpenses' component={RecentExpenses} />
      <BotomTabs.Screen name='AllExpenses' component={AllExpenses} />
    </BotomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='ExpensesOverview'>
          <Stack.Screen name='ExpensesOverview' component={ExpenpesesOverview} options={{headerShown: false}}/> 
          <Stack.Screen name='ManageExpense' component={MangeExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
