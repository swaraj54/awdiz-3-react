import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0); //  0 => 1 , step 4
    console.log(counter, "- counter")
    function add() { // step 2
        setCounter((prevValue) => prevValue + 1) // step 3
    }
    function subract(){
        setCounter((prevValue)=> prevValue - 1)
    }

    return (
        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={add}>+ Add by 1</button>
            {/* step 1 */}
            <button onClick={subract}>- Subtract by 1</button>
        </div>
    )
}

export default Counter;