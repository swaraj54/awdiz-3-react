import { useParams } from "react-router-dom";

function SingleProduct() {




    const data = useParams();
    
    //  data = {swaraj : "897654678"}
    console.log(data, "-data here")
    return (
        <div>
            {data && data.swaraj}
        </div>
    )
}

export default SingleProduct;