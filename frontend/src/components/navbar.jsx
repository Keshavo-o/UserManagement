import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css"

function Navbar() {
    const navigate = useNavigate();

    function handleLogout()
    {
        console.log("trying to logout")
        fetch("/api/logout")
        .then(res => res.json())
        .then(data => {
            console.log("logged out successfully")
            navigate("/")
    })
    }

    return (
        <nav className="navbar">
            <div className="logo">
                <h2>User Management System</h2>
            </div>

            <div className="nav-links">
                <Link to="/home">Show Users</Link>
                <Link to="/home/add">Add User</Link>

                <button onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    );
}

export default Navbar;