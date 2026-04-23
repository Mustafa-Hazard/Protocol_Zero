


//pascal casing

import React from 'react';

function Message() {
    return (
        <div>
            {(() => {
                const name: string = "Mustafa muhammad";
                if (name.length > 131) {
                    return <h1>Hello, {name.toUpperCase()}!</h1>;
                }
                return <h1>Hello, {name}!</h1>;
            })()}
        </div>
    );
}

export default Message;