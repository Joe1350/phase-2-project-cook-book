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
        color: "cornsilk",
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
                    color: 'black',
                    boxShadow: "3px 3px 10px black"
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
                    color: 'black',
                    boxShadow: "3px 3px 10px black"
                }}
            >
                Recipies
            </NavLink>
            <NavLink
                to="/add-a-recipie"
                exact
                style={linkStyles}
                activeStyle={{
                    background: '#7D7D78',
                    color: '#000',
                    boxShadow: "3px 3px 10px black"
                }}
            >
                Add a Recipie
            </NavLink>
        </div>
    )
}

export default NavBar;
