//   import { createContext, useReducer } from "react"
  
//     const AppReducer = (state:any, action:any) => {
//          switch(action.type){
//             case 'ADD_EXPENSE':
//             return{
//                 ...state,
//                 expenses: [...state.expenses,action.payload]
//             }
//            default:
//             return state;
//          }
//     }

//   const initialState = {
//     budget: 2000,
//     expenses: [
//         {id:12, label:'shopping', cost:40 },
//         {id:13, label:'holiday', cost:400 },
//     ],
//   }

//  export const AppContext = createContext();

//  export const AppProvider = (props:any) => {
//      const [state, dispatch] = useReducer(AppReducer, initialState);
//      return(
//         <AppContext.Provider value={{
//             budget: state.budget,
//             expanses:state.budget,
//             dispatch,
//         }}></AppContext.Provider>
//      )
//  }