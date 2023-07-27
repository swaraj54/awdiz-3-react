import React, { useContext } from 'react'
import { AuthContext } from './Context/AuthContext'

const Home = () => {
    const { state, Logout } = useContext(AuthContext);
    console.log(state)
    return (
        <div>Home {state?.user?.name}
        </div>
    )
}

export default Home