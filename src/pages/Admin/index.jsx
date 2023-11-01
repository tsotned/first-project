import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";

const Admin = () => {
  const { auth } = useAuth();

  if (auth.tokenParsed.role !== "Admin") {
    return <Navigate to="/login" />;
  }

  return <div>Admin</div>;
};

export default Admin;
