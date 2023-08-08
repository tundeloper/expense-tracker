import { createContext, useReducer } from "react";

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

export const ExpenseContext = createContext({
    expenses: [],
    addExpense: ({description, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description, amount, date}) => {},
})

function expenseReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toDateString + Math.random().toString()
            return [{...action.payload, id: id}, ...state]
        case 'UPDATE':
            const updateExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id)
            const updateExpense = state[updateExpenseIndex];
            const updatedItem = {
                ...updateExpense,
                ...action.payload.data
            }
            const updatedExpense = [...state]
            updatedExpense[updateExpenseIndex] = updatedItem
            return updatedExpense
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);    
        default:
            return state; 
    } 
}

function ExpenseContextProvider({ children }) {
    const [expenseState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES)

    function addExpense(expenseData ) {
        dispatch({type : 'ADD', payload: expenseData})
    }

    function deleteExpense(id) {
        dispatch({type : 'DELETE', payload: id})
    }

    function updateExpense(id, expenseData) {
        dispatch({type : 'UPDATE', payload: {id: id, data: expenseData}})
    }

    const value = {
        expenses: expenseState,
        addExpense,
        deleteExpense,
        updateExpense,
    }
    return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
}

export default ExpenseContextProvider