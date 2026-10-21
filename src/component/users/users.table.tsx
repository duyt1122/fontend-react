
import { useEffect, useState } from 'react'
// import '../../styles/users.css'
import Table, { ColumnsType } from 'antd/es/table';

interface IUser {
    name: String;
    email: String;
    age: number;
}
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
        const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkdXl0cmluaDEwNjIyMkBnbWFpbC5jb20iLCJBVVRIT1JJVElFUyI6WyJSRUFEIiwiUk9MRV9VRVIiLCJGQUNUT1JfUEFTU1dPUkQiXSwiZXhwIjoxNzkyNjgyNjU4LCJpYXQiOjE3OTI1OTYyNTh9.YPidsyryHVjHrlYjpIGWN3rxwra6T4l3zgxK8sO0Rw0"

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

    const columns: ColumnsType<IUser> = [
        {
            title: "Email",
            dataIndex: "email",
            render: (value, record) => {
                return (
                    <div>{record.email}</div>
                )
            }
        },
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Age",
            dataIndex: "age",
        }
    ];
    return (
        <div>
            <h2>Table Users</h2>

            <Table columns={columns} dataSource={listUsers} rowKey={"id"} />
            {/* <table>
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
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table> */}
        </div>
    )
}

export default UsersTable