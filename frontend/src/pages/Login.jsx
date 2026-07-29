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
    const [err3,setErr3] = useState("none")
    const [errM3,setErrM3] = useState("")
    const [otpHai,setOtpHai] = useState(false)
    const [otp,setOtp] = useState("")


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
                    // navigate("/home")
                    setOtpHai(true)
            }
            else{
                setErrM(data.message)
                setErr("block")
            }
        })
            .catch(err => console.log(err))
        }


        function verifyOtp()
        {
            console.log("verifying otp, you entered: ",otp)
            fetch(`/api/otp?otp=${otp}&user=${form.username}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate("/home")
        })
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
       <div className="container">
    <h1>User Management System</h1>

    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="unm">UserName:</label>
            <input
                id="unm"
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
            />
        </div>

        <div>
            <label htmlFor="pwd">Password:</label>
            <input
                id="pwd"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
            />
        </div>

        <button type="submit">Submit</button>

        <div className="error" style={{ display: err }}>
            {errM}
        </div>

        <div className="error" style={{ display: err2 }}>
            {errM2}
        </div>
    </form>

    {otpHai && (
        <div className="otp-box">
            <h3>Enter OTP</h3>

            <input
                type="text"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter 6-digit OTP"
            />
            <br />
            <br />


            <button style={{backgroundColor:"green"}} onClick={verifyOtp}>
                Verify OTP
            </button>
        </div>
    )}
</div>
        </>
    )
}
export default Login