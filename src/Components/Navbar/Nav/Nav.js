import React from 'react';
import Styles from "./style.module.css";

const Nav = () => {
    return (
        <ul className={Styles.nav__lists}>
            <li className={Styles.nav__list}>خانه</li>
            <li className={Styles.nav__list}>مدرسین</li>
            <li className={Styles.nav__list}>دوره ها</li>
            <li className={Styles.nav__list}>درباره ما</li>
        </ul>
    )
}

export default Nav
