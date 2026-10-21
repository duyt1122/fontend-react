
import { useEffect, useState } from 'react'
// import '../../styles/users.css'
import Table, { ColumnsType } from 'antd/es/table';
import { Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

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

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2>Table Users</h2>
                <div>
                    <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
                        Add New
                    </Button>
                </div>

            </div>


            <Table columns={columns} dataSource={listUsers} rowKey={"id"} />
            <Modal
                title="Basic Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>

        </div>
    )
}

export default UsersTable