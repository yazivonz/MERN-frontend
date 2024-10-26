import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../User/AuthContext"; // Ensure the path is correct

const ProtectedRoute = () => {
    const { user } = useAuth(); // Use the custom hook to access user

    // If user is not authenticated, redirect to login
    return user ? <Outlet /> : <Navigate to="/user/login" />;
};

export default ProtectedRoute;
