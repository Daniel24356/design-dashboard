import { ChangeEvent, useState } from 'react'

interface Employee {
    firstName: string
    lastName: string
    jobTitle: string
}

const EmployeeInfo = () => {
    const [employee, setEmployee] = useState<Employee>({ firstName: '', lastName: '', jobTitle: '' })

    const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmployee((prevEmployee) => ({
            ...prevEmployee,
            firstName: e.target.value
        }))
    }
    const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmployee((prevEmployee) => ({
            ...prevEmployee,
            lastName: e.target.value
        }))
    }
    const handleJobTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmployee((prevEmployee) => ({
            ...prevEmployee,
            jobTitle: e.target.value
        }))
    }
    return (
        <>
            <p>
                <label htmlFor="First Name">First Name: </label>
                <input type="text" onChange={handleFirstNameChange} value={employee.firstName} />
            </p>
            <p>
                <label htmlFor="Last Name">Last Name: </label>
                <input type="text" onChange={handleLastNameChange} value={employee.lastName} />
            </p>
            <p>
                <label htmlFor="Job Title">Job Title: </label>
                <input type="text" onChange={handleJobTitleChange} value={employee.jobTitle} />
            </p>

            <h2>Employee Information</h2>
            <p>First Name: {employee.firstName}</p>
            <p>Last Name: {employee.lastName}</p>
            <p>Job Title: {employee.jobTitle}</p>

        </>
    )
}

export default EmployeeInfo