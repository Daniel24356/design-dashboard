  interface StudentProps{
     firstName: string;
     lastName: string;
     age: number;
     gender?: "Male" | "Female"
  }
  
   const Students = ({firstName, lastName , age, gender}:StudentProps) => {
         return <div>
            Students
            <p>
               FullName: {firstName} {lastName}
            </p>
            <p>
                Age:{age}
            </p>
            <p>
                gender: {gender}
            </p>
            
         </div>
   }

   export default Students