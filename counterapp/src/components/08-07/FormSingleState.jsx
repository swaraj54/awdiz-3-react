import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormSingleState = () => {
    const [userData, setUserData] = useState({ name: "", email: "", password: "" })

    const router = useNavigate();

    // console.log(userData.email, "- userData")

    function handleChange(event) {
        console.log(event.target.value, "- value");
        console.log(event.target.name, "- name");

        setUserData({ ...userData, [event.target.name]: event.target.value }); // assign
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (!userData.name) return alert("Name is required!")
        if (!userData.email) return alert("Email is required!")
        if (!userData.password) return alert("Password is required!")
        if (userData.password.length < 8) return alert("Password length must be 8 digit and more...")

        // const res = await axios.post("/resgiter", {
        //     name: userData.name,
        //     email: userData.email,
        //     password: userData.password
        // })

        // res.data.status 

        setUserData({ name: "", email: "", password: "" })
        alert("Registeration Successfull...")
        router('/');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name : </label><br />
                <input type='text' value={userData.name} placeholder='Type your name..' name="name" onChange={handleChange} /><br />
                <label>Email : </label><br />
                <input type='email' value={userData.email} name="email" onChange={handleChange} /><br />
                <label>Password : </label><br />
                <input type='password' value={userData.password} name='password' onChange={handleChange} /><br />
                <input type='submit' value="Register" /><br />
            </form>
        </div>
    )
}

export default FormSingleState