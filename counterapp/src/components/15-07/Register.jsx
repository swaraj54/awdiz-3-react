import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [userData, setUserData] = useState({ name: "", email: "", password: "" });
    const router = useNavigate();

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    // console.log(userData, "- userdata")

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userData.name && userData.email && userData.password) {

            const array = JSON.parse(localStorage.getItem("Users")) || [];
            const userDataObj = {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                cart : []
            };
            // console.log(array, "-array")
            array.push(userDataObj);
            // console.log(array, "-array after push")
            localStorage.setItem("Users", JSON.stringify(array)); /// set, not update

            // const ls = JSON.parse(localStorage.getItem("Test")) || [];
            // // console.log(ls, "-ls")
            // ls.push(userData);

            // console.log(ls, "- updated ls") // 2



            // localStorage.setItem("Test", JSON.stringify(ls))


            alert("Registeration Successfull..")
            router('/login')
        } else {
            alert("Please fill the all fields..")
        }
    }


    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label><br />
                <input type='text' name='name' onChange={handleChange} /><br />
                <label>Email</label><br />
                <input type='email' name='email' onChange={handleChange} /><br />
                <label>Password</label><br />
                <input type='password' name='password' onChange={handleChange} /><br />
                <input type='submit' value='Register' /><br />
            </form>
        </div>
    )
}

export default Register