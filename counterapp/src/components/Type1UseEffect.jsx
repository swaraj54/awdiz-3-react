import { Component, useEffect, useState } from "react";

function Type1UseEffect() { // when state changes/updates , Component re-render on browser
    const [counter, setCounter] = useState(0);
    const [swaraj, setSwaraj] = useState(1234);

    useEffect(() => {  // it'll execute the code when component re-render on browser
        console.log("Inside UseEffect!")
        // alert("Welcome!")
    });

    function addCounter() {
        setCounter((preValue) => preValue + 1)
    }

    function addSwaraj() {
        setSwaraj((preValue) => preValue + 1)
    }


    return (
        <div>
            <h1>Type1UseEffect</h1>
            <h1>{counter}</h1>
            <button onClick={addCounter}>Add counter</button>
            <h1>{swaraj}</h1>
            <button onClick={addSwaraj}>Add swaraj</button>
        </div>
    )
}

export default Type1UseEffect;