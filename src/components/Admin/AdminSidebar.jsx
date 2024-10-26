// src/components/Admin/AdminSidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div className="bg-gray-800 text-white w-64 p-4">
            <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/admin/dashboard" className={({ isActive }) => (isActive ? 'text-blue-400' : '')}>
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/users" className={({ isActive }) => (isActive ? 'text-blue-400' : '')}>
                            Manage Users
                        </NavLink>
                    </li>
                    {/* Add more sidebar links as needed */}
                </ul>
            </nav>
        </div>
    );
};

export default AdminSidebar;
