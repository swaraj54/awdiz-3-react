import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const [userCart, setUserCart] = useState([]);
    const router = useNavigate();

    console.log(userCart, "- userCart")

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("Current-user"));
        if (user?.email) {
            const allUsers = JSON.parse(localStorage.getItem("Users"));
            for (var i = 0; i < allUsers.length; i++) {
                if (allUsers[i].email == user.email && allUsers[i].password == user.password) {
                    setUserCart(allUsers[i].cart)
                    break;
                }
            }
        } else {
            alert("Please login to watch all cart products.");
            router('/login')
        }
    }, [])

    return (
        <div>
            <h1>Cart</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                {userCart.length && userCart.map((pro) => (
                    <div style={{ width: "22%", height: "700px", border: "2px solid black", padding: "30px" }}>
                        <img style={{ width: "100%", height: "500px" }} src={pro.image} />
                        <h3>Title : {pro.title}</h3>
                        <h4>Price : {pro.price}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart