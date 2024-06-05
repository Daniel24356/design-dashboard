import { useState } from 'react'

interface IUser {
  name: string
  age: number
}
const UserInfo = () => {
  const [user, setUser] = useState<IUser>({ name: '', age: 0 })
  return (
    <>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>

      <button onClick={() => setUser({ name: "Elisha", age: 17 })}>Users</button>
    </>
  )
}

export default UserInfo