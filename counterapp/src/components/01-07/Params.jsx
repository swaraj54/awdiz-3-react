import { useNavigate } from "react-router-dom";

function Params() {
    const router = useNavigate();
    function goto(){
        router('/single-product/897654678')
    }
    return (
        <div>
            <button onClick={goto}>Click to go somewhere...</button>
        </div>
    )
}

export default Params;