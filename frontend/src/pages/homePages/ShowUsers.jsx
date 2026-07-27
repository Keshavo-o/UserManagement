import {useEffect,useState} from "react"
import "./showUser.css"

function ShowUsers()
{
    const [users,setUsers] = useState([])

    useEffect(()=>{
        fetch("/api/user")
        .then(res => res.json())
        .then(data => {
            setUsers(data.users)
        })
    },[])
    console.log(users)
    return (
        <>
        <table>
            <thead>
            <tr>
                <th>Serial no.</th>
                <th>_id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Role</th>
                <th colSpan="2">Actions</th>
            </tr>
            </thead>
            <tbody>
                {users.map((item,index)=>{
                    return <tr key={index}>
                        <th>{index + 1}</th>
                        <th>{users[index]._id}</th>
                        <th>{users[index].username}</th>
                        <th>{users[index].email}</th>
                        <th>{users[index].age}</th>
                        <th>{users[index].role}</th>
                        <th><button style={{backgroundColor:"blue"}}>Edit</button></th>
                        <th><button>Delete</button></th>
                    </tr>
                })}
            </tbody>
        </table>
        </>
    )
}
export default ShowUsers