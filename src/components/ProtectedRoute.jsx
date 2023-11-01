import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AppLayout from "./AppLayout";
import useAuth from "../hooks/UseAuth";

const ProtectedRoute = () => {
  const { auth } = useAuth();

  if (!auth.isAuthed) {
    return <Navigate to="/login" />;
  }

  // if (!roles.includes(auth.tokenParsed.role)) {
  //   console.error("არ გაქვთ უფლება");
  // }

  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};

export default ProtectedRoute;
