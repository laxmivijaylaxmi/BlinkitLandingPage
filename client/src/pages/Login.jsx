import React, { useState } from 'react';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Mock login validation
        if (data.email === "test@example.com" && data.password === "password123") {
            toast.success("Login successful!");
            localStorage.setItem('accesstoken', 'mockAccessToken');
            setData({ email: "", password: "" });
            navigate("/");
        } else {
            toast.error("Invalid email or password");
        }
    };

    return (
        <section className='w-full container mx-auto px-2 mt-8'>
            <div className='bg-gray-300 my-4 w-full max-w-sm mx-auto rounded p-5'>
                <form className='grid gap-4 py-4' onSubmit={handleSubmit}>
                    <div className='grid gap-1'>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            id='email'
                            className='bg-blue-50 p-2 border rounded outline-none focus:border-primary-200'
                            name='email'
                            value={data.email}
                            onChange={handleChange}
                            placeholder='Enter your email'
                        />
                    </div>
                    <div className='grid gap-1'>
                        <label htmlFor='password'>Password:</label>
                        <div className='bg-blue-50 p-2 border rounded flex items-center focus-within:border-primary-200'>
                            <input
                                type={showPassword ? "text" : "password"}
                                id='password'
                                className='w-full outline-none'
                                name='password'
                                value={data.password}
                                onChange={handleChange}
                                placeholder='Enter your password'
                            />
                            <div onClick={() => setShowPassword(!showPassword)} className='cursor-pointer'>
                                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                            </div>
                        </div>
                        <Link to="/forgot-password" className='block ml-auto hover:text-blue-500'>Forgot password?</Link>
                    </div>
                    <button 
                        className='bg-green-800 hover:bg-green-700 text-white py-2 rounded font-semibold my-3 tracking-wide' 
                        disabled={!data.email || !data.password}
                    >
                        Login
                    </button>
                </form>
                <p>
                    Don't have an account? <Link to="/register" className='font-semibold text-green-700 hover:text-green-800'>Register</Link>
                </p>
            </div>
        </section>
    );
};

export default Login;
