import React from "react";
import "./style.css";
import { FaBookMedical,FaFacebookMessenger,FaAngleDoubleLeft } from "react-icons/fa";

const Nav = () => {
    return (
        <ul className="nav__lists">
            <li className="nav__list">
                <a href="/" className="nav__link">
                    خانه
                </a>
            </li>
            <li className="nav__list">
                <a href="/" className="nav__link">
                    مدرسین
                </a>

                <ul className="nav_sublists1">
                    <li>
                        <a href="/"><FaBookMedical/>اقای کرمی</a>
                    </li>
                    <li>
                        <a href="/"><FaFacebookMessenger/>اقای مجیدی</a>
                    </li>
                    <li className="nav_sublist">
                        <a href="/">سایر<FaAngleDoubleLeft/></a>
                        <ul className="nav_sublists2">
                            <li>
                                <a href="/">اقای احمدی</a>
                            </li>
                            <li>
                                <a href="/">اقای حسنی</a>
                            </li>
                            <li>
                                <a href="/">خانم محسنی</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="nav__list">
                <a href="/" className="nav__link">
                    دوره ها
                </a>
            </li>
            <li className="nav__list">
                <a href="/" className="nav__link">
                    درباره ما
                </a>
            </li>
        </ul>
    );
};

export default Nav;
