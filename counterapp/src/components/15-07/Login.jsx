import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './../../context/Auth.context';

function Login() {

    const { state, login } = useContext(AuthContext);
    // console.log(state, "- state from context in home file")

    const [userData, setUserData] = useState({ email: "", password: "" })
    const router = useNavigate();
    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userData.email && userData.password) {
            const users = JSON.parse(localStorage.getItem("Users")); // accessed localstorage

            var flag = false;
            for (var i = 0; i < users.length; i++) {
                if (users[i].email == userData.email && users[i].password == userData.password) {
                    flag = true; // re-assign
                    login(users[i]);
                    alert("Login successfull.");
                    setUserData({ email: "", password: "" })
                    router('/');
                    break;
                }
            }
            if (flag == false) {
                return alert("Please check credentails.")
            }

        } else {
            alert("Please fill the all fields.. ")
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label><br />
                <input type="email" name='email' onChange={handleChange} /><br />
                <label>Password</label><br />
                <input type="password" name="password" onChange={handleChange} /><br />
                <input type="submit" value='Login' /><br />
            </form>
            <button onClick={() => router("/register")}>Register</button>
        </div>
    )
}

export default Login;