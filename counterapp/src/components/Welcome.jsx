import { useState } from "react";

function Welcome() {

    const [swaraj, setCount] = useState("Pooja"); // 1000 => 8976
    console.log(swaraj, "- swaraj")

    return (
        <div>
            <h2>Welcome</h2>
            <button onClick={() => setCount(true)}>Click to Change data</button>
        </div>
    )
}


export default Welcome;