import axios from "axios";
import { useEffect, useState } from "react";

interface IUser {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const UserList = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                console.log(response.data);

                const userData: IUser[] = response.data
                setUsers(userData);
            } catch (error) {
                console.error("Error fetching user" + error);
            }
        }
        fetchUsers();
    }, []);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default UserList