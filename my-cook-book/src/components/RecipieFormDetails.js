import React from "react";

function RecipieFormDetails({ formData, onFormChange }) {
    return (
        <div>
            <label htmlFor="name">Name: </label>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Recipie name"
                value={formData.name}
                onChange={onFormChange}
                required
            />
            <br></br>
            <label htmlFor="description">Description: </label>
            <input
                type="text"
                name="description"
                id="description"
                placeholder="Short description"
                value={formData.description}
                onChange={onFormChange}
                required
            />
            <br></br>
            <label htmlFor="category">Category: </label>
            <select
                name="category"
                value={formData.category}
                onChange={onFormChange}
            >
                <option>Choose a category</option>
                <option value="appetizers">Appetizers</option>
                <option value="beverages">Beverages</option>
                <option value="breakfast">Breakfast</option>
                <option value="desserts">Desserts</option>
                <option value="main dishes">Main Dishes</option>
                <option value="salads">Salads</option>
                <option value="side dishes">Side Dishes</option>
                <option value="soups and stews">Soups and Stews</option>
            </select>
            <br></br>
            <br></br>
            <label htmlFor="source">Source: </label>
            <input
                type="text"
                name="source"
                id="source"
                placeholder="Where is this recipie from"
                value={formData.source}
                onChange={onFormChange}
            />
            <br></br>
            <label htmlFor="author">Author: </label>
            <input
                type="text"
                name="author"
                id="author"
                placeholder="Who created this recipie"
                value={formData.author}
                onChange={onFormChange}
                required
            />
            <br></br>
            
            <label htmlFor="image">Image: </label>
            <input
                type="url"
                name="image"
                id="image"
                placeholder="url"
                value={formData.image}
                onChange={onFormChange}
            />
            <br></br>
            <br></br>
            <label htmlFor="servings">Servings: </label>
            <input
                type="text"
                name="servings"
                id="servings"
                placeholder="servings"
                value={formData.servings}
                onChange={onFormChange}
                required
            />
            <br></br>
            <label htmlFor="calories">Calories: </label>
            <input
                type="text"
                name="calories"
                id="calories"
                placeholder="Calories per serving"
                value={formData.calories}
                onChange={onFormChange}
                required
            />
            <br></br>
            <br></br>
            <label htmlFor="prepTime">Prep Time: </label>
            <input
                type="text"
                name="prepTime"
                id="prepTime"
                placeholder="In minutes"
                value={formData.prepTime}
                onChange={onFormChange}
                required
            />
            <br></br>
            <label htmlFor="cookTime">Cook Time: </label>
            <input
                type="text"
                name="cookTime"
                id="cookTime"
                placeholder="In minutes"
                value={formData.cookTime}
                onChange={onFormChange}
                required
            />
            <br></br>
            <br></br>
        </div>
    )
}

export default RecipieFormDetails;
