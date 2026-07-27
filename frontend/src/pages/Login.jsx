import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css"
function Login()
{
    const navigate = useNavigate();

    const [err,setErr] = useState("none")
    const [errM,setErrM] = useState("")
    const [err2,setErr2] = useState("none")
    const [errM2,setErrM2] = useState("")

    const [form,changeForm] = useState(
        {
            username: "",
            password: ""
        }
    )
    function handleChange(e)
    {
        changeForm({
            ...form,
            [e.target.name]: e.target.value
        }
    );
    }
    function handleSubmit(e)
        {
            e.preventDefault();//allows to purely handle the react execution using javascript
            // console.log("hello from submit button")
            // console.log(form);

            fetch("/api/login", {
                method: "POST",
                headers : {
                    "Content-type": "application/json"
                },
                body : JSON.stringify(form)
            }).then(res => res.json())
            .then(data => {
                if(data.success){
                    setErr("none")
                    navigate("/home")
            }
            else{
                setErrM(data.message)
                setErr("block")
            }
        })
            .catch(err => console.log(err))
        }
        
        fetch("/api/check")
        .then(res => res.json())
        .then(data => {
            if(!data.success)
            {
                setErrM2(data.message)
                setErr2("block")
            }
        })

    return(
        <>
        <h1>User Management System</h1>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div>
                <label htmlFor="unm">UserName: </label>
                <input
                value={form.username}
                onChange={(e)=>handleChange(e)}
                type="text"
                name="username"
                id="unm"/>
            </div>
            <div>
                <label htmlFor="pwd">Password: </label>
                <input 
                value={form.password}
                onChange={(e)=>handleChange(e)}
                type="password" 
                name="password" 
                id="pwd" />
            </div>
            <button type="submit">Submit</button>
            <div style={{display: err, color:"red"}}>
                {errM}
            </div>
             <div style={{display: err2, color:"red"}}>
                {errM2}
            </div>
        </form>
        </>
    )
}
export default Login