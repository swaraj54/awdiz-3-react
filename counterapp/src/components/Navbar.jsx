import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Navbar() {
    const [user, setUser] = useState({});
    const router = useNavigate();

    useEffect(() => {
        const isUserPresent = JSON.parse(localStorage.getItem("Current-user"));
        if (isUserPresent) {
            setUser(isUserPresent)
        }
    })

    function logout() {
        localStorage.removeItem("Current-user")
        setUser({})
    }

    return (
        <div style={{ display: 'flex', justifyContent: "space-around", border: "5px solid black", width: '100%', textAlign: "center" }}>
            <div style={{ width: "10%" }}><h3 onClick={() => router('/')}>Awdiz</h3></div>
            <div style={{ display: 'flex', width: "80%", justifyContent: "right" }}>
                {user?.email ?
                    <>
                        <h3 onClick={() => router('/products-from-backend')}>Products</h3>
                        <h3 style={{ marginLeft: "40px" }}>Profile</h3>
                        <h3 onClick={logout} style={{ marginLeft: "40px" }}>Logout </h3>
                        <h3 onClick={() => router('/cart')} style={{ marginLeft: "40px" }}>Cart</h3>
                    </>
                    :
                    <h3  onClick={() => router('/login')}>Login</h3>
                }
            </div>
        </div>
    )
}

export default Navbar;