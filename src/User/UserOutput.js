import React from "react";

const UserOutput = (props) => {
    return (
        <div className="output">
           <p>Welcome, {props.name}!</p>
           <p>This is my first React assignment!</p>
        </div>
    );
};

export default UserOutput;