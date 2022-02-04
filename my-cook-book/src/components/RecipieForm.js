import React, { useState } from "react";

function RecipieForm() {
    const [formData, setFormData] = useState({
        source: "",
        name: "",
        author: "",
        image: "",
        servings: "",
        calories: "",
        prepTime: "",
        cookTime: "",
        ingredients: [],
        directrions: []
    })

    function handleFormChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleAddIngredientInput() {
        // this does not work
        return (
            <input type="text" name="ingredient" placeholder="ingredient" />
        )
    }

    function handleAddDirectionInput() {
        // placeholder
        return null
    }

    return (
        <div>
            <h2>Add a New Recipie</h2>
            <form>
                <label htmlFor="source">Source: </label>
                <input
                    type="text"
                    name="source"
                    id="source"
                    placeholder="Where is this recipie from"
                    value={formData.source}
                    onChange={handleFormChange}
                />
                <br></br>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Recipie name"
                    value={formData.author}
                    onChange={handleFormChange}
                    required
                />
                <br></br>
                <label htmlFor="author">Author: </label>
                <input
                    type="text"
                    name="author"
                    id="author"
                    placeholder="Who created this recipie"
                    value={formData.author}
                    onChange={handleFormChange}
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
                    onChange={handleFormChange}
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
                    onChange={handleFormChange}
                    required
                />
                <br></br>
                <label htmlFor="calories">Calories: </label>
                <input
                    type="text"
                    name="calories"
                    id="calories"
                    placeholder="calories per serving"
                    value={formData.calories}
                    onChange={handleFormChange}
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
                    onChange={handleFormChange}
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
                    onChange={handleFormChange}
                    required
                />
                <br></br>
                <br></br>
                <div id="ingredients">
                    <h3>Ingredients</h3>
                    <p>
                        Enter all ingredient details on 1 line per ingredient
                        <br></br>
                        Example: 1 tablespoon garlic (minced)
                    </p>
                    <button onClick={handleAddIngredientInput}>Add New Ingredient</button>
                </div>
                <div id="directions">
                    <h3>Directions</h3>
                    <p>Add one step per line</p>
                    <button onClick={handleAddDirectionInput}>Add New Direction</button>
                </div>
                <br></br>
                <input type="submit" value="Add Recipie"/>
            </form>
        </div>
    )
}

export default RecipieForm;
