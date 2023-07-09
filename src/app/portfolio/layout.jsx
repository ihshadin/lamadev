import React from 'react';

const layout = ({ children }) => {
    return (
        <div>
            <h1 className='text-8xl font-bold'>Out Works</h1>
            {children}
        </div>
    );
};

export default layout;