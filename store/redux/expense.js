import { createSlice } from "@reduxjs/toolkit";

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

const expenseSlice = createSlice({
    name: 'favorites',
    initialState: {
        DUMMY_EXPENSES
    },
    reducers: {
        add: (state, action) => {
            const id = new Date().toDateString + Math.random().toString()
            state = [{...action.payload, id: id}, ...state]
        },
        update: (state, action) => {
            const updateExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id)
            const updateExpense = state[updateExpenseIndex];
            const updatedItem = {
                ...updateExpense,
                ...action.payload.data
            }
            const updatedExpense = [...state]
            updatedExpense[updateExpenseIndex] = updatedItem
            state = updateExpense
        },
        remove: (state, action) => {
            state = state.filter((expense) => state.expenses !== action.payload)
         }
    }
})

export default expenseSlice.reducer;
export const addFavorite = expenseSlice.actions.addFavorite
export const removeFavorite = expenseSlice.actions.removeFavorite