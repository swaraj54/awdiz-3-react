import React, { useReducer } from "react";
// Reducer function
const reducer = (state, action) => { // step 3
    console.log(state, "- state")
    console.log(action, "- action")
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 }; // step 4
        case "DECREMENT":
            return { count: state.count - 1 };
        case "RESET":
            return { count: 0 };
        case "PAYLOAD":
            return { count: state.count + action.payload }; // step 4
        default:
            return state;
    }
};
const UseReducer = () => {
    // Initial state
    const initialState = { count: 0 }; // step 5 updated state
    // useReducer hook
    const [state, dispatch] = useReducer(reducer, initialState); // step 2
    // Event handlers
    const increment = () => {
        console.log("Step 1 - inside incremet function")
        dispatch({ type: "INCREMENT" });
    };

    const decrement = () => {
        dispatch({ type: "DECREMENT" });
    };

    const reset = () => {
        dispatch({ type: "RESET" });
    };

    const payload = () => {
        dispatch({ type: "PAYLOAD", payload: 98765 })
    }

    return (
        <div>
            <h2>Count: {state.count}</h2>
            <button onClick={increment}>Increment</button> {/* step 0 */}
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={payload}>Add payload</button>
        </div>
    );
};


export default UseReducer