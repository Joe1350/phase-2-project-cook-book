import React from "react";

function Filter() {
    return (
        <div id="category-filter">
            <label htmlFor="category">Filter By: </label>
            <select name="category" value={null} onChange={null}>
                <option value="all">Choose a Category...</option>
                <option value="appetizers">Appetizers</option>
                <option value="beverages">Beverages</option>
                <option value="breakfast">Breakfast</option>
                <option value="desserts">Desserts</option>
                <option value="main dishes">Main Dishes</option>
                <option value="salads">Salads</option>
                <option value="side dishes">Side Dishes</option>
                <option value="soups and stews">Soups and Stews</option>
            </select>
        </div>
    )
}

export default Filter;
