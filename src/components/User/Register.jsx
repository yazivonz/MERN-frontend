import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SNSImage from '../../assets/img/SNS.png';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegisterClick = async (e) => {
    e.preventDefault(); // Prevent form submission

    // Example registration logic here
    try {
      // Your registration logic (e.g., API call) goes here

      // If successful, navigate to the login page or another page
      navigate('/user/login');
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#e9e6de] to-[#0c3a6d]"> 
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        {/* Form Section */}
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Register</h2>
          <p className="text-xs mt-4 text-[#002D74]">Create an account to get started</p>

          <form onSubmit={handleRegisterClick} className="flex flex-col gap-4">
            <input 
              className="p-2 mt-8 rounded-xl border" 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state on change
              required 
            />
            <input 
              className="p-2 rounded-xl border w-full" 
              type="password" 
              name="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update state on change
              required 
            />
            <button type="submit" className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
              Register
            </button>
          </form>

          <div className="mt-5 text-xs flex justify-between items-center text-[#002D74]">
            <p>Already have an account?</p>
            <button onClick={() => navigate('/user/login')} className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Login</button>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:block hidden w-1/2">
          <img className="rounded-2xl" src={SNSImage} alt="Register Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Register;
