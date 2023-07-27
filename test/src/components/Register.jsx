import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [userData, setUserData] = useState({ name: "", email: "", password: "" });

    const router = useNavigate();

    console.log(userData, "userData")
    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userData.name && userData.email && userData.password) {
            const usersArray = JSON.parse(localStorage.getItem("Users")) || [];
            usersArray.push(userData);
            localStorage.setItem("Users", JSON.stringify(usersArray))
            setUserData({ name: "", email: "", password: "" })
            router('/login');
            toast.success("Registration Successfull.")
        } else {
            toast.error("Please fill the all fields.")
        }
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>Name :</label><br />
                <input value={userData.name} type='text' onChange={handleChange} name="name" /><br />
                <label>Email :</label><br />
                <input value={userData.email} type='email' onChange={handleChange} name='email' /><br />
                <label>Password :</label><br />
                <input value={userData.password} type='password' onChange={handleChange} name='password' /><br />
                <input type='submit' value='Register' /><br />
            </form>
        </div>
    )
}

export default Register