import { useEffect, useState } from "react";
import axios from 'axios';

function Type2UseEffecct() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {  // it'll execute the code only on first render of component, (first time page open, hard refersh)
        // console.log("Inside useEffect")
        alert('Welcome!')

        async function getProducts() {
            const res = await axios.get("https://fakestoreapi.com/products");
            console.log(res.data,"- res.data")
        }
        getProducts();

        //we request backend url, and then backend return respond to us 
        // real case examples -  notification to user, advertisement, message , get product from backend
    }, [])

    // window.onload = function (){
    //     console.log("Hello")
    // }

    function addCounter() {
        setCounter((prevValue) => prevValue + 1)
    }

    return (
        <div>
            <h1>Type2UseEffecct</h1>
            <h1>{counter}</h1>
            <button onClick={addCounter}>Add count</button>

        </div>
    )
}

export default Type2UseEffecct;