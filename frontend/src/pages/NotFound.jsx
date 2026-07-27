import { useNavigate } from "react-router-dom"
function NotFound()
{
    const navigate = useNavigate();
    return (
        <>
        <h1>This page doesn't exists, please redirect to Home page</h1>
        <button onClick={()=>navigate("/home")}>Home</button>
        </>
    )
}
export default NotFound