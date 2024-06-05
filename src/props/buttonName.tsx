     import './buttonName.css'

    interface BtnProps{
       label:string;
       onclick(): void;
       disabled?: boolean;
       color?: "primary" | "secondary" | "readOnly";
    }
       
   const  Button = ({label, onclick, disabled = false,color = 'primary'}:BtnProps) => {
     const btnStyle = `button ${color} ${disabled} disabled:''` 
    return (
       <button className={btnStyle} onClick={onclick} disabled={disabled}>{label}</button>
    )
}

export default Button