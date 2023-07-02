import React from 'react';
import { useParams } from 'react-router-dom';

const SinglePro = () => {
    const data = useParams();
    console.log(data, "- data")
    // request to backend for product details
    return (
        <div>
            <h1>Single Product</h1>
            <h2>{data.id && data.id}</h2>
        </div>
    )
}

export default SinglePro