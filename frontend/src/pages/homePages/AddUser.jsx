import "./addUser.css";
import { useState } from "react";
import {useNavigate} from "react-router-dom"

function AddUsers() {
    const navigate = useNavigate();
    const [err,setErr] = useState(false);

    const[user,setUser] = useState({
        username: "",
        email: "",
        age: "",
        role:""
    })

    function handleChange(e)
    {
        setUser({...user,
            [e.target.name]: e.target.value}
        )
    }

    function handleSubmit(e)
    {
        e.preventDefault();

        // console.log(user)

        fetch("/api/user/add",{
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success)
        {
            console.log(data)
            navigate("/home")
            return null
        }
            else{
                console.log(data.message)
                setErr(true)
            }
        })

    }

    return (
        <div className="add-user-container">
            <h1>Add New User</h1>

            <form onSubmit={handleSubmit} className="add-user-form">
                <div className="form-group">
                    <label>Name</label>
                    <input onChange={handleChange} name="username" value={user.username} type="text" placeholder="Enter name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input onChange={handleChange} name="email" value={user.email} type="email" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Age</label>
                    <input onChange={handleChange} name="age" value={user.age} type="text" placeholder="Enter Age" />
                </div>

                <div className="form-group">
                    <label>Role</label>
                    <select onChange={handleChange} name="role" value={user.role} onChange={handleChange}>
                        <option value="">Select Role</option>
                        <option value="Backend developer">Backend developer</option>
                        <option value="HR">HR</option>
                        <option value="Frontend developer">Frontend developer</option>
                        <option value="Cloud engineer">Cloud engineer</option>
                        <option value="AI/ML expert">AI/ML expert</option>
                        <option value="App tester">App tester</option>
                    </select>
                </div>
                {err?<div style={{color:"red"}}>Fields can't be empty</div>:null}
                <button type="submit">Add User</button>
            </form>
        </div>
    );
}

export default AddUsers;