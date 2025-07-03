import { Link } from "react-router";
import { useAuth } from "./security/AuthContext";
import { useContext } from "react";
function Header() {

    const authContext=useAuth();
    const isAuthenticated = authContext.isAuthenticated;
    function logout() {
        authContext.logout();
    }
    return (
            <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <Link className="navbar-brand ms-2 fs-2 fw-bold text-black" to="/welcome">Todo App</Link>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                {isAuthenticated && <li className="nav-item fs-5"><Link className="nav-link" to="/welcome">Home</Link></li>}
                                {isAuthenticated &&  <li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li>}
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            {!isAuthenticated &&  <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>}
                            {isAuthenticated &&  <li className="nav-item fs-5"><Link className="nav-link" to="/logout" onClick={logout}>Logout</Link></li>}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    );
}
export default Header;