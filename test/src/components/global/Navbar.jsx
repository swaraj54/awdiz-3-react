import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [userData, setUserData] = useState();
    const { state, Logout } = useContext(AuthContext);
    const router = useNavigate();


    useEffect(() => {
        if (state) {
            setUserData(state.user)
        }
    }, [state])

    // console.log(userData, "- userData")

    return (
        <div style={{ height: "50px", fontSize: "24px", width: "100%", border: "5px solid black", display: 'flex', justifyContent: "space-around", position: "sticky", top: "0", left: "0" }}>
            <div style={{ width: "30%", marginTop: "8px" }} onClick={() => router('/')}>E-Commerce</div>
            <div style={{ width: "60%", display: 'flex', justifyContent: "space-around", marginTop: "8px" }}>
                <div onClick={() => router('/all-products')}>All Products</div>
                {userData?.role == "Seller" && <div onClick={() => router('/add-product')}>Add Product</div>}
                {userData?.name && <div onClick={() => router('/profile')}>Profile</div>}
                {userData?.name ?
                    <div onClick={Logout}>Logout</div> :
                    <div onClick={() => router('/login')} >Login/Regsiter</div>
                }
            </div>
        </div>
    )
}

export default Navbar