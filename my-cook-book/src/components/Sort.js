import React from "react";

function Sort() {
    return (
        <div id="sort">
            <label htmlFor="sort">Sort By: </label>
            <select name="sort" value={""} onChange={null}>
                <option value="name">Name</option>
                <option value="total time">Time</option>
                <option value="calories">Calories</option>
                <option value="servings">Servings</option>
            </select>
        </div>
    )
}

export default Sort;
