import React from "react";
import "./style.css";
import { FaSearch } from "react-icons/fa";

const Search = () => {
    return (
        <div className="search__navbar">
        <div className="search">
            <form className="search__form" action="#" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="جستجو" className="search__input" />

                <button type="submit" className="search__icon">
                    <FaSearch />
                </button>
            </form>
        </div>
        </div>
    );
};

export default Search;
