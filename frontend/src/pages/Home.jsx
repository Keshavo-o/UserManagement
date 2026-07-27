import { useNavigate, Routes, Route } from "react-router-dom"
import { useEffect } from "react";
import Navbar from "../components/navbar.jsx"
import ShowUsers from "./homePages/ShowUsers.jsx"
import AddUser from "./homePages/AddUser.jsx"

function Home()
{
    const navigate = useNavigate();

    useEffect(() => {
    fetch("/api/check", {
        method: "GET",
        credentials: "include",
    })
        .then(res => res.json())
        .then(data => {
            if (!data.success) {
                navigate("/");
            }
        });
    }, [navigate]);
    return (
        <>
        <Navbar />
        <Routes>
            <Route path='/' element={<ShowUsers />}></Route>
            <Route path='/add' element={<AddUser />}></Route>

        </Routes>
        </>
    )
}
export default Home