import { Link, Navigate, Outlet } from "react-router-dom";
import { UseStateContext } from "../contexts/ContextsProvider";
import '../styling/style.css';
const DefaultLayout = () => {
    const {user, token} = UseStateContext();
    // debugger;
    if (!token) {
        return (<Navigate to="/login"/>);
    }
    const onLogout = (ev) => {
        localStorage.removeItem("ACCESS_TOKEN");
        ev.preventDefault();
    }
    return (
        <div id="defaultLayout">
            <aside>
                <Link to="/Dashboard">Dashboard</Link>
                <Link to="/users">Users</Link>
            </aside>
            <div className="content">
                <header>
                    <h1>Welcome {user.name}</h1>
                    <a href="#" className="btn-logout" onClick={onLogout}>logout</a>
                </header>
                <div>
                    <p>User Info</p>
                </div>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default DefaultLayout;