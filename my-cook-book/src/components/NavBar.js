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
                id="recipes"
                to="/recipes"
                activeStyle={activeStyles}
            >
                Recipes
            </NavLink>
            <NavLink
                id="add-a-recipe"
                to="/add-a-recipe"
                exact
                activeStyle={activeStyles}
            >
                Add a Recipe
            </NavLink>
        </div>
    )
}

export default NavBar;
