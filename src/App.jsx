import React from "react";
import { BrowserRouter as Router, Route, Routes, Outlet, useLocation } from "react-router-dom";
import { AuthProvider } from "./components/User/AuthContext"; // Correct path

import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Products from "./components/Product/Products";
import Feedbacks from "./components/Feedbacks";
import Cart from "./components/Cart/Cart";
import Register from "./components/User/Register";
import Login from "./components/User/Login";
import Profile from "./components/User/Profile"; // Import Profile component
import AdminRoutes from "./components/Admin/AdminRoutes";
import ProtectedRoute from "./components/Route/ProtectedRoute";

const App = () => {
  return (
    <AuthProvider> {/* Wrap your entire app with AuthProvider */}
      <Router>
        <Routes>
          {/* User Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="products" element={<Products />} />
            <Route path="feedbacks" element={<Feedbacks />} />
            <Route path="cart" element={<Cart />} />
            <Route path="user/login" element={<Login />} />
            <Route path="user/register" element={<Register />} />
            <Route path="user/profile" element={<Profile />} /> {/* Add this route */}
          </Route>

          {/* Admin Routes with Sidebar Layout */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                <AdminRoutes /> {/* Render AdminRoutes component here */}
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

// Custom layout for user routes to include the Navbar and Footer
const Layout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Outlet /> {/* This will render the matched child route */}
      {!isAdminRoute && <Footer />} {/* Render Footer conditionally */}
    </>
  );
};

export default App;
