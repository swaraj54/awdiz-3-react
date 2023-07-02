import { useNavigate } from "react-router-dom";

function Xyz() {
    const router = useNavigate();

    function goTo(){
        router('/single-pro/987654678')
    }

    return (
        <div>
            <button onClick={goTo}>Go to single proudct page...</button>
        </div>
    )
}

export default Xyz;
