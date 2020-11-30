const TransactionReducer = ((state, action) => {
    switch(action.type){
       case "ADD_TRANSACTION": {
          return [action.payload, ...state]
       }
       case "DELETE_TRANSACTION":
            state = state.filter((item) => {
              return item.id !== action.id
           })
           return state
       default : 
           return state
    }
   })
   
   export default TransactionReducer;