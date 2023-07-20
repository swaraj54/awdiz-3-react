import { createContext, useEffect, useReducer } from "react";


export const AuthContext = createContext();

const initialState = { user: null };

function reducer(state, action) { // action : {type : 'login/logout/swaraj', payload : userData}
    switch (action.type) {
        case "login":
            return { user: action.payload } // re-assign
        case "logout":
            return { user: null } // re - assign
        default:
            return state;
    }
}

// hof , hoc -- accpet another component as a props ,  it'll take entry point of application, index.js
const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const login = (userData) => {

        localStorage.setItem("Current-user", JSON.stringify(userData))
        dispatch({
            type: 'login',
            payload: userData
        })
    }

    const logout = () => {

        localStorage.removeItem("Current-user");
        dispatch({ type: 'logout' })
    }

    useEffect(() => {
        const isUserPresent = JSON.parse(localStorage.getItem("Current-user"));
        if (isUserPresent) {
            dispatch({
                type: 'login',
                payload: isUserPresent
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ state, login, logout }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;