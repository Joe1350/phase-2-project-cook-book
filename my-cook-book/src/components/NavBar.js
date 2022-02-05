import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    const activeStyles = {
        background: 'gray',
        color: 'black',
        boxShadow: "2px 2px 10px black"
    };

    return (
        <div>
            <NavLink
                id="home"
                to="/"
                exact
                activeStyle={activeStyles}
            >
                Home
            </NavLink>
            <NavLink
                id="recipies"
                to="/recipies"
                exact
                activeStyle={activeStyles}
            >
                Recipies
            </NavLink>
            <NavLink
                id="add-a-recipie"
                to="/add-a-recipie"
                exact
                activeStyle={activeStyles}
            >
                Add a Recipie
            </NavLink>
        </div>
    )
}

export default NavBar;
