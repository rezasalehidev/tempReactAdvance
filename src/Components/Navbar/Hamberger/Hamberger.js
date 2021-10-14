import React from "react";
import "./style.css";

const Hamberger = () => {
    return (
    <>  
    <input type="checkbox" className="nav__checkbox" id="burgermenu"></input>
    <label htmlFor="burgermenu" className="nav__label">
        <span></span>
        <span></span>
        <span></span>
    </label>

    </>)
};

export default Hamberger;
