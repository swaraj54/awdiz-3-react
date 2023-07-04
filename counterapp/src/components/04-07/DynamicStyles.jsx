import React, { useState } from 'react';
const DynamicStyles = () => {
    const [backgroundColor, setBackgroundColor] = useState('red');
    const handleButtonClick = () => {
        setBackgroundColor('blue');
    };
    const styles = {
        backgroundColor: backgroundColor,
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer'
    };
    return (
        <div style={styles} onClick={handleButtonClick}>
            Click me to change background color!
        </div>
    );
};

export default DynamicStyles