import { useParams, useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";


function EditUser()
{
    const navigate = useNavigate()

    const { id } = useParams();
    // console.log(id)

    const [user,setUser] = useState({
        username: "",
        email: "",
        age: "",
        role: ""

    })  
    const[err,setErr] = useState(false)

//     useEffect(() => {
//     console.log("Current role:", user.role);
// }, [user.role]);

    useEffect(()=>{
        console.log("fetching details of user: ",id)
        fetch(`/api/user/singleuser?id=${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setUser({
                username:data.user.username,
                email:data.user.email,
                age:data.user.age,
                role:data.user.role
        })
        })
    },[id])
    
 


    function handleSubmit(e)
    {
        e.preventDefault()
        console.log("inside hanlde submt function, changing details to: ",user)
        fetch(`/api/user/edit?id=${id}`,{
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            navigate("/home")
    })
    }


    function handleChange(e)
    {
        // console.log("inside handle change button")
        const temp = {...user,
            [e.target.name]: e.target.value
        }
        setUser(temp) 
    }


    return(
        <>
        <div className="add-user-container">
            <h1>Edit User</h1>

            <form onSubmit={handleSubmit} className="add-user-form">
                <div className="form-group">
                    <label style={{color:"blue"}}>User Id:</label>
                    <input onChange={handleChange} readOnly value={id} type="text"/>
                </div>
                <div className="form-group">
                    <label style={{color:"green"}}>Name</label>
                    <input onChange={handleChange} name="username" value={user.username} type="text" placeholder="Enter name" />
                </div>

                <div className="form-group">
                    <label style={{color:"green"}}>Email</label>
                    <input onChange={handleChange} name="email" value={user.email} type="email" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label style={{color:"green"}}>Age</label>
                    <input onChange={handleChange} name="age" value={user.age} type="text" placeholder="Enter Age" />
                </div>

                <div className="form-group">
                    <label style={{color:"green"}}>Role</label>
                    <input value={user.role} readOnly type="text" />
                </div>

                <div className="form-group">
                    <label  style={{color:"red"}}>Change Role</label>
                    <select onChange={handleChange} name="role" value={user.role} onChange={handleChange}>
                        <option value={user.role}>{user.role}</option>
                        <option value="Backend developer">Backend developer</option>
                        <option value="HR">HR</option>
                        <option value="Frontend developer">Frontend developer</option>
                        <option value="Cloud engineer">Cloud engineer</option>
                        <option value="AI/ML expert">AI/ML expert</option>
                        <option value="App tester">App tester</option>
                    </select>
                </div>
                {err?<div style={{color:"red"}}>Fields can't be empty</div>:null}
                <button type="submit">Edit User</button>
            </form>
        </div>
        </>
    )
}
export default EditUser