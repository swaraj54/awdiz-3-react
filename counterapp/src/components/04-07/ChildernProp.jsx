import React from 'react';

const Swaraj = ({ children }) => {    // Step 2 , children = login
    return (
        <button>
            {children} 
                        {/* // Step 3 */}
        </button>
    );
};

const ChildernProp = () => {
    return (
        <div>
            <Swaraj>Login</Swaraj> 
                                     {/* // Step 1 */}
        </div>
    );
};

export default ChildernProp