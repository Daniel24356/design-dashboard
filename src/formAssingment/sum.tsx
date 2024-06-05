 import {ChangeEvent, useState } from "react";

 interface INumbers{
    NumberFirst: number;
    NumberSecond: number;
}
   
   function Sum(){
    const[number, setNumber]=useState<INumbers>({NumberFirst:0,NumberSecond:0});

    const handleFirstNumberChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setNumber((prevEmployee)=>({
            ...prevEmployee,
            Number: e.target.value
        }))
        }
    const handleLastNumberChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setNumber((prevEmployee)=>({
            ...prevEmployee,
            Number: e.target.value
        }))
        }
        const onSubmit = (event:any) => {
          event.default
        }

        return(
            <>
            <form onSubmit={onSubmit}>
                <div className=''>
                    <label htmlFor="FirstNumber" className='form-label'>First Number</label>
                    <input type="number"  
                    className={`form-control`} 
                    id='' 
                    onChange={handleFirstNumberChange}
                    placeholder='no1' />
                </div>
                <div className=''>
                    <label htmlFor="SecondNumber" className='form-label'>Second Number</label>
                    <input type="number"  
                    className={`form-control`} 
                    onChange={handleLastNumberChange}
                    id='' 
                    placeholder='no2' />
                </div>
                <button className='btn btn-primary'>Add number</button>
            </form>
            <p>${number.NumberFirst + number.NumberSecond}</p>
            </>
        )
    }
    export default Sum