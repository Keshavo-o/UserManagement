import {useEffect,useState} from "react"
import "./showUser.css"
import { useNavigate } from "react-router-dom"

function ShowUsers()
{
    const navigate = useNavigate()

    const [users,setUsers] = useState([])
    const [page,setPage] = useState(1)
    const [count,setCount] = useState(0)
    const[max,setMax] = useState(0)
    const [refresh,setRefresh]= useState(0)

    // console.log(max)    
    // console.log(page)
    useEffect(()=>{
        console.log("fetching")
        fetch(`/api/user?page=${page}`)
        .then(res => res.json())
        .then(data => {
            setUsers(data.users)
            setMax(data.maxpages)
        })
    },[page,refresh])

    function deleteUser(_id)
    {
        // console.log("trying to delete user with id: ",_id)
        fetch(`/api/user/delete?_id=${_id}`).
        then(res=>res.json())
        .then(data => {
            console.log(data)
            setRefresh(refresh+1)
        })
    }
    // console.log(users)
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
                    return (<tr key={index}>
                        <th>{index + 1 + count}</th>
                        <th>{users[index]._id}</th>
                        <th>{users[index].username}</th>
                        <th>{users[index].email}</th>
                        <th>{users[index].age}</th>
                        <th>{users[index].role}</th>
                        <th><button onClick={()=>navigate(`edit/${users[index]._id}`)} style={{backgroundColor:"blue"}}>Edit</button></th>
                        <th><button onClick={()=>deleteUser(users[index]._id)}>Delete</button></th>
                    </tr>)
                    
                })}
            </tbody>
        </table>
        <div style={{display:"flex"}}>
        <div style={{margin:"auto", marginTop: "20px",width:"200px", textAlign: "right" }}>
            <button onClick={()=>{
                if(page>1){
                setPage(page-1)
                setCount(count-10)
                }
            }} style={{backgroundColor:"#3b89bd"}}>Previous</button>
        </div>
        <div style={{margin:"auto", marginTop: "20px",width:"200px", textAlign: "right" }}>
            <button onClick={()=>{
                if(page<max)
                {
                setPage(page+1)
                setCount(count+10)
                }
            }} style={{backgroundColor:"green"}}>Next →</button>
        </div>
        </div>
        <br/>
        </>
    )
}
export default ShowUsers