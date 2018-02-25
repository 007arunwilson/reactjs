import React from 'react';

const withClassMod = (WrappedCompoenent,className) => {

    return (props) => (
        <div className={className}>
            <WrappedCompoenent {...props} />
        </div>
    )

}

export default withClassMod;