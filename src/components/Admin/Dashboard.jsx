// src/components/Admin/Dashboard.jsx
import React from 'react';

const Dashboard = () => {
    return (
        <div className="flex-1 p-6 bg-gray-100">
            <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Cards for displaying information */}
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="font-semibold">Total Users</h2>
                    <p className="text-2xl">1,234</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="font-semibold">Total Sales</h2>
                    <p className="text-2xl">$12,345</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="font-semibold">Pending Orders</h2>
                    <p className="text-2xl">56</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
