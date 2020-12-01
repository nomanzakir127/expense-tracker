import React, {useReducer} from 'react'
import TransactionReducer from './Reducer'

let initialTransactions = []

export const MyContext = React.createContext(initialTransactions)

export const ExpenseProvider = (props) =>{

    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions)

    const addTransaction = (transObj) =>{
        dispatch({
            type: "ADD_TRANSACTION",
            payload:transObj
        })
    }

    const deleteTransaction = (id) =>{
        dispatch({
            type: "DELETE_TRANSACTION",
            id:id
        })
    }

    return (
        <>
            <MyContext.Provider value={{transactions:state, addTransaction, deleteTransaction}}>
                {props.children}
            </MyContext.Provider>
        </>
    )
}