
import { useEffect, useState } from 'react'
import '../../styles/users.css'

// interface IUser {
//     name: String;
//     email: String;
//     role: String;
// }
const UsersTable = () => {

    const [listUsers, setListUsers] = useState([]);
    useEffect(() => {
        console.log("UsersTable mounted")

        getData()
    }, [])
    const getData = (async () => {
        const res = await fetch("http://localhost:8080/auth", {
            method: "POST",
            body: JSON.stringify({
                username: "duytrinh106222@gmail.com",
                password: "123456"
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await res.json();
        const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkdXl0cmluaDEwNjIyMkBnbWFpbC5jb20iLCJBVVRIT1JJVElFUyI6WyJSRUFEIiwiUk9MRV9VRVIiLCJGQUNUT1JfUEFTU1dPUkQiXSwiZXhwIjoxNzkyMjA0OTcwLCJpYXQiOjE3OTIxMTg1NzB9.YnHbWsyiAd9ycZVULYSf65pgQ5xSzVdRQ4_q-T-fntA"

        const getUsers = await fetch("http://localhost:8080/users/all", {
            headers: {
                "Authorization": `Bearer ${access_token}`,
                "content-type": "application/json"
            }
        })
        const users = await getUsers.json();
        setListUsers(users);
        console.log("List users: ", users)

    })

    console.log("Check listUsers: ", listUsers)
    return (
        <div>
            <h2>Table Users</h2>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers.map((user: any, index) => {
                        return (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default UsersTable