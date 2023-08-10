import axios from "axios";

const BACKEND_URL = 'https://expense-tracker-c762d-default-rtdb.firebaseio.com';

export async function storeExpense(expenseData) {
    const response = await axios.post(`${BACKEND_URL}/expenses.json`, expenseData)
    const id = response.data.name
    return id 
} 

export function updatedExpense(id, expenseData) {
    axios.put(`${BACKEND_URL}/expenses/${id}.json`, expenseData)
}

export  function deleteExpense(id) {
    return axios.delete(`${BACKEND_URL}/expenses/${id}.json`)
}


export async function fetchExpenses() {
    const response = await axios.get(`${BACKEND_URL}/expenses.json`);

    const expense = []
    for (const key in response.data) {
        // if (Object.hasOwnProperty.call(response.data, key)) {
            const expenseObj = {
                id: key,
                amount: response.data[key].amount,
                date: new Date(response.data[key].date),
                description: response.data[key].description
            }

            expense.push(expenseObj)
        // }
    }

    return expense
}