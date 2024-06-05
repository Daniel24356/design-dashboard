//     import { useContext, useState } from 'react';
//     import { AppContext} from '../content/AppContent';
//      import (v4 as uuid4) from 'uuid'
//     import './fBudget.css'
//     // import { FieldValues, useForm} from "react-hook-form"



//    function FBudget(){
//     const { dispatch } = useContext(AppContext)
//        const [name, setname] = useState('');
//        const [cost, setcost] = useState('')
   
      

//      const onSubmit = (event) => {
//       event.preventDefault();
      
//         const expense = {
//           id: uuidv4(),
//           label: name,
//           cost: parseInt(cost),
//         };
//         dispatch({
//           type: 'ADD_EXPENSE'
//         })
//      }
    
//       // function displayMenuItems(menuItem) {
//       //   let displayMenu = menuItem.map((item) => {
//       //     return `
//       //    <article class="menu-item">
//       //     <img src=${item.img} class="photo" alt="${item.title}">
//       //     <div class="item-info">
//       //      <header>
//       //        <h4>${item.title}</h4>
//       //        <h4 class="price">${item.price}</h4>
//       //      </header>
//       //       <p class="item-text">${item.desc}</p>
//       //     </div>
//       //  </article>
//       //     `;
//       //   })
//       //   displayMenu = displayMenu.join("")
//       // }

//     return (
//         <>
//         <div className='all'>
//          <form className="grocery-form" onSubmit={onSubmit}>
//         <p className="alert"></p>
//         <h3 className='text-b'>Family Budget</h3>
//         <div className="form-control">
//          <input
//           type="text" 
//          value={name}
//          onChange={(event) => setname(event.target.value)}
//           id="budget"
//            placeholder="Budget" />
         
//           <input 
//           type="text"
//          value={cost}
//          onChange={(event) => setcost(event.target.value)}
//            id="price" 
//            placeholder="price" />

//           <button type="submit" className="add-btn">+</button>
//         </div>
//        </form>
//        </div>
//         </>
//     )
//    }

//    export default FBudget