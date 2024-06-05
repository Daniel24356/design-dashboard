   import './displayB.css'
  interface BtnProps{
    label:string;
    cost: number;
    color?: "primary" | "secondary" | "readOnly";
 }
    
const  BudgetB = ({label, cost, color}:BtnProps) => {
  const btnStyle = `button ${color} ` 
 return (
      <>
      <div className="all">
       <div className="newAll">
        <p className="label" >{label}</p>
        <p className="cost">{cost}</p>
        </div>
        </div>
         {/* <button className={btnStyle}>{label}</button> */}
      </>
   
 )
}

export default BudgetB