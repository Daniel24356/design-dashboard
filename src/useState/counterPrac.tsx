import { ChangeEvent, useState } from "react"

 interface Employee{
    firstName: string,
    lastName: string,
    job: string
 }
 

const counterPractice = () => {
     const [employee, setEmployee] = useState<Employee>({firstName: "",lastName: "",job:""});
   
     const handleFirstName = (e:ChangeEvent<HTMLInputElement>) => {
          setEmployee((prevEmployee) => ({
                ...prevEmployee,
                firstName: e.target.value
          }))
        }

          const handleLastName = (e:ChangeEvent<HTMLInputElement>) => {
            setEmployee((prevEmployee) => ({
                  ...prevEmployee,
                  firstName: e.target.value
            }))
        }
          
            const handleJob = (e:ChangeEvent<HTMLInputElement>) => {
                setEmployee((prevEmployee) => ({
                      ...prevEmployee,
                      firstName: e.target.value
                }))
            }
        
     return(
        <>
          <p>
            <label htmlFor="First Name">First Name:</label>
            <input type="text" onChange={handleFirstName}  value={employee.firstName}/>
          </p>

          <p>
            <label htmlFor="Last Name">Last Name:</label>
            <input type="text" onChange={handleLastName} value={employee.lastName} />
          </p>

          <p>
            <label htmlFor="Job">Job:</label>
            <input type="text" onChange={handleJob} value={employee.job} />
          </p>

          <h2>Employee Information</h2>
        <p>First Name: {employee.firstName}</p>
        <p>Last Name: {employee.lastName}</p>
        <p>Job Title: {employee.job}</p>

        </>
     )
}
    

  export default counterPractice