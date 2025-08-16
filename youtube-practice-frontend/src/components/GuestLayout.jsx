import { Navigate, Outlet } from "react-router-dom";
import { UseStateContext } from "../contexts/ContextsProvider";
const GuestLayout = () => {
  const { token } = UseStateContext();
  if (token) {
    return <Navigate to="/users" />;
  }
  return (
    <div className="guest-layout">
      Para sa mga guest lang to mga kupal
      <div className="login-container">
        <div className="login-box">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default GuestLayout;
