import React from 'react';

function MyComponentWithWrapper({ name }) {
    return (
        <div style={{ backgroundColor: 'lightgray', padding: '20px' }}>
            {name}
        </div>
    )
}

function Wrapper() {
    return <MyComponentWithWrapper name="John" />;
}
export default Wrapper;

