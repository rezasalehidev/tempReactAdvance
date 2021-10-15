import React from "react";
import "./style.css";

const Nav = () => {
    return (
        <ul className="nav__lists">
            <li className="nav__list">
                <a href="/" className="nav__link">خانه</a>
            </li>
            <li className="nav__list">
                <a href="/" className="nav__link">مدرسین</a>
            </li>
            <li className="nav__list">
                <a href="/" className="nav__link">دوره ها</a>
            </li>
            <li className="nav__list">
                <a href="/" className="nav__link">درباره ما</a>
            </li>
        </ul>
    );
};

export default Nav;
