import React from "react";
import "./User.css"

const UserInput = (props) => {
    return (
        <div className="input">
            <input type="text" onChange={props.change} value={props.value}/>
        </div>
    )
};

export default UserInput;