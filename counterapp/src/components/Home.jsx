import { useEffect, useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const router = useNavigate()

    useEffect(() => {
        var user = JSON.parse(localStorage.getItem("Current-user"));
        console.log(user, "usr")
        if (user) {
            setIsUserLoggedIn(true);
        }
    })

    function logout() {
        localStorage.removeItem("Current-user");
        setIsUserLoggedIn(false);
        alert("Logout Successfull.")
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Welcome to Awdiz Store</h1>
            <div>
                {isUserLoggedIn ? <div onClick={logout}>Logout</div> : <button onClick={() => router('/login')}>Login</button>}
            </div>

        </div>
    )
}

export default Home;