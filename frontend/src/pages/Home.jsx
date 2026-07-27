import { useNavigate } from "react-router-dom"
function Home()
{
    const navigate = useNavigate();
    fetch("/api/check",{
        method: "GET",
        credentials: "include",

    }).then(res => res.json())
    .then(data => {
        if(!data.success)
        {
            navigate("/")
        }
    })
    return (
        <>
        <h1>This is Home page</h1>
        </>
    )
}
export default Home