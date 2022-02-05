import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    const linkStyles = {
        display: "inline-block",
        width: "100px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "firebrick",
        textDecoration: "none",
        color: "white",
        textAlign: "center",
    };

    return (
        <div>
            <NavLink
                to="/"
                exact
                style={linkStyles}
                activeStyle={{
                    background: 'gray',
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/recipies"
                exact
                style={linkStyles}
                activeStyle={{
                    background: 'gray',
                }}
            >
                Recipies
            </NavLink>
            <NavLink
                to="/add-a-recipie"
                exact
                style={linkStyles}
                activeStyle={{
                    background: 'gray',
                }}
            >
                Add a Recipie
            </NavLink>
        </div>
    )
}

export default NavBar;
