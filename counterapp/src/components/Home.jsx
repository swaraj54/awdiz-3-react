import { useEffect, useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './../context/Auth.context';

function Home() {

    const { state, login, logout } = useContext(AuthContext);
    // console.log(state, "- state from context in home file")

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const router = useNavigate()

    useEffect(() => {
        console.log(state?.user?.email,"state?.user?.email")
        if (state?.user?.email) {
            setIsUserLoggedIn(true);
        } else {
            setIsUserLoggedIn(false);
        }
    }, [state])


    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Welcome to Awdiz Store</h1>
            <div>
                {isUserLoggedIn ? <div onClick={() => logout()}>Logout</div> : <button onClick={() => router('/login')}>Login</button>}
            </div>

        </div>
    )
}

export default Home;