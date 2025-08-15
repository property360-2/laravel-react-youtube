import { Navigate, Outlet } from "react-router-dom";
import { UseStateContext } from "../contexts/ContextsProvider";

const defaultLayout = () => {
    const {token} = UseStateContext();
    if (!token) {
        return (<Navigate to="/login"/>)
    }
    return (
        <div className="default-layout">
            <Outlet/>
        </div>
    );
}

export default defaultLayout;