import { useState } from "react";

function Section() {

    const [isUserLogged, setIsUserLogged] = useState(true);

    // if (isUserLogged) {
    //     console.log("true")
    // } else {
    //     console.log("false")
    // }

    return (
        <div>
            Section : {isUserLogged ? <button>Logout</button> : <button>Login</button>}
        </div>
    )
}

export default Section;