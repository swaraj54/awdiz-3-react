import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [userData, setUserData] = useState({ email: "", password: "" })
    const router = useNavigate();

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userData.email && userData.password) {
            var flag = false;
            const allUsers = JSON.parse(localStorage.getItem("Users"));
            for (var i = 0; i < allUsers.length; i++) {
                if (allUsers[i].email == userData.email && allUsers[i].password == userData.password) {
                    localStorage.setItem("Currrent-user", JSON.stringify(allUsers[i]))
                    setUserData({ email: "", password: "" })
                    toast.success("Login Successfull.")
                    router('/')
                    flag = true;
                    break;
                }
            }
            if (flag == false) {
                toast.error("Please Check your email & password.")
            }

        } else {
            toast.error("Please fill the all fields.")
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email </label><br />
                <input value={userData.email} type='email' onChange={handleChange} name="email" /><br />
                <label>Password</label><br />
                <input value={userData.password} type='password' onChange={handleChange} name='password' /><br />
                <input type='submit' value="Login" /><br />
            </form>
        </div>
    )
}

export default Login