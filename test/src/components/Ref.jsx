// import React, { useRef, useState } from 'react';
// function Ref() {
//     // const inputRef = useRef(null);
//     // const handleClick = () => {
//     //     inputRef.current.focus();
//     // };
//     const [counter, setCounter] = useState(0)
//     return (
//         <div>
//             {/* <input ref={inputRef} type="text" />
//             <button onClick={handleClick}>Focus Input</button> */}
//             <h1>Counter - {counter}</h1>
//             <button onClick={() => setCounter((prev) => prev + 1)}>Add</button>
//         </div>
//     );
// }

// import { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom/client";

// function Ref() {
//     const [inputValue, setInputValue] = useState("");
//     const count = useRef(0);
//     // const count = {
//     //     current: 0
//     // }

//     useEffect(() => {
//         count.current = count.current + 1;
//     });

//     return (
//         <>
//             <input
//                 type="text"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//             />
//             <h1>Render Count: {count.current}</h1>
//         </>
//     );
// }

import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function Ref() {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");
    const renderCount = useRef(0)

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    })

    return (
        <>
            <h1>Render count - {renderCount.current}</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>
        </>
    );
}


export default Ref