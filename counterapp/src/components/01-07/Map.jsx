import React from 'react'

const Map = (props) => {
    console.log(props.myUsers, "HEREE")
    return (
        <div>
            {props.kuchBhi && props?.kuchBhi.map((str) => (
                <div key={str}>
                    <h2>{str}</h2>
                </div>
            ))}

            <button onClick={() => props?.setMyUsers([...props.myUsers, "Awdiz"])}>Add user</button>
            {props.myName && props.myName}

        </div>
    )
}

export default Map