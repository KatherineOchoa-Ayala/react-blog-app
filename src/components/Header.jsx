import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext.jsx";

function Header() {
    const { user, isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate("/login");
    };
    return (
        <header>
            <h1>Beans Blog</h1>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>

                {isAuthenticated ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                        <Link to="/login">Login</Link>
                )}
            </nav>
            {isAuthenticated && <p>Welcome, {user.username}!</p>}
        </header>
    );
}

export default Header;