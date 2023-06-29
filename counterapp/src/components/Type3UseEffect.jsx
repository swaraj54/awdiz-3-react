import { useEffect, useState } from "react";

function Type3UseEffect() {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(10);
    useEffect(() => { 
        // IT'LL EXECUTE THE CODE ON FIRST RENDER OF COMPOMENT OVER THE BROWSER
        // IF PASSED DEPENEDENCY (STATE) GET UPDATE THEN IT'LL EXECUTE THE CODE 
        console.log("Inside use effect")
    }, [counter])

    return (
        <div>
            <h1>Type 3 UseEffect</h1>
            <h1>Counter : {counter}</h1>
            <button onClick={() => setCounter((prevValue) => prevValue + 1)}>+ 1</button>
            <h1>Counter 2 : {counter2}</h1>
            <button onClick={() => setCounter2((prevValue) => prevValue + 1)}> + 1 for counter 2</button>
        </div>
    )
}

export default Type3UseEffect;