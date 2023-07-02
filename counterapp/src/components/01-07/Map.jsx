import React from 'react'
import { useNavigate } from 'react-router-dom'

const Map = (props) => {
    const router = useNavigate();
    console.log(props.myUsers, "HEREE")
    return (
        <div>
            {props.kuchBhi && props?.kuchBhi.map((str) => (
                <div onClick={() => router(`/single-pro/${str}`)} key={str}>
                    <h2>{str}</h2>
                </div>
            ))}

            <button onClick={() => props?.setMyUsers([...props.myUsers, "Awdiz"])}>Add user</button>
            {props.myName && props.myName}

        </div>
    )
}

export default Map