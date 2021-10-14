import React from "react";
import LogoImg from "./logo.png";
import LogoSmall from "./logo-small.png";
import "./style.css"

const Logo = () => {
    return (
        <>
            <img src={LogoImg} alt="logoSite" className="hidden show-large" />
            <img src={LogoSmall} alt="logoSmall" className="hidden show-small" />
        </>
    );
};

export default Logo;
