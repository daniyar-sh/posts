import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navbar__links">
                <Link to='/About'>О сайте </Link>
                <Link to='/posts'> Посты</Link>
                <Link to='/login'> зарегестрироватся</Link>

            </div>
      </div>
    );
};

export default Navbar;