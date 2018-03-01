import React from 'react';

const withClassMod = (WrappedCompoenent,className) => {
    
    const withClassMod = (props) => (
        <div className={className}>
            <WrappedCompoenent {...props} />
        </div>
    )

    return withClassMod;

}

export default withClassMod;