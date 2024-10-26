// src/components/Admin/AdminRoutes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminSidebar from './AdminSidebar'; // Adjust import path if necessary
import AdminDashboard from './Dashboard'; // Ensure correct path
import ManageUsers from './ManageUsers'; // Ensure correct path

const AdminRoutes = () => {
    return (
        <div className="flex min-h-screen">
            <AdminSidebar />
            <div className="flex-grow p-4">
                <Routes>
                    <Route path="dashboard" element={<AdminDashboard />} /> {/* Dashboard route */}
                    <Route path="users" element={<ManageUsers />} /> {/* Manage users route */}
                    {/* Add more admin routes here if needed */}
                </Routes>
            </div>
        </div>
    );
};

export default AdminRoutes;
