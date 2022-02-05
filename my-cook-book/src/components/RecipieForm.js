import React, { useState } from "react";

// this most certainly needs to be broken up in to components

function RecipieForm({ onSetRecipies }) {
    const [formData, setFormData] = useState({
        source: "",
        name: "",
        author: "",
        image: "",
        description: "",
        servings: "",
        calories: "",
        // category (needs to be a dropdown)
        prepTime: "",
        cookTime: "",
    })
    const [ingredientInputList, setIngredientInputList] = useState([""])
    const [directionsInputList, setDirectionInputList] = useState([""])

    function handleFormChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleIngredientInputChange(e, index) {
        const ingredientsList = [...ingredientInputList]
        ingredientsList[index] = e.target.value
        setIngredientInputList(ingredientsList)
    }

    function handleAddIngredientInputFieldClick(e) {
        e.preventDefault()
        setIngredientInputList([...ingredientInputList, e.target.value])
    }

    function handleDirectionInputChange(e, index) {
        const directionsList = [...directionsInputList]
        directionsList[index] = e.target.value
        setDirectionInputList(directionsList)
    }

    function handleAddDirectionInputFieldClick(e) {
        e.preventDefault()
        setDirectionInputList([...directionsInputList, e.target.value])
    }

    function handleSubmitForm(e) {
        e.preventDefault()
        let prepTimeInput = formData.prepTime
        const newRecipie = {
            source: formData.source,
            author: formData.author,
            image: formData.image,
            name: formData.name,
            description: formData.description,
            servings: parseInt(formData.servings),
            calories: parseInt(formData.calories),
            category: "", // formData.category,
            prepTime: parseInt(prepTimeInput),
            cookTime: parseInt(formData.cookTime),
            totalTime: (parseInt(prepTimeInput) + parseInt(formData.cookTime)),
            ingredients: ingredientInputList,
            directions: directionsInputList,
            notes: []
        }
        fetch("http://localhost:3001/recipies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newRecipie)
        })
        .then(r => r.json())
        .then(newRecipie => onSetRecipies(newRecipie))
        // setRecipies(newRecipie) ?
        // I also want to be redirected to the recipieDetails page on submit
    }

    return (
        <div id="form">
            <h2>Add a New Recipie</h2>
            <form onSubmit={handleSubmitForm}>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Recipie name"
                    value={formData.name}
                    onChange={handleFormChange}
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
                    onChange={handleFormChange}
                    required
                />
                <br></br>
                {/* category dropdown */}
                {/* <br></br> */}
                <br></br>
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
                        Use 1 line per ingredient and measurement
                        <br></br>
                        Example: 1 tablespoon garlic (minced)
                    </p>
                    {ingredientInputList.map((value, i) => {
                        return (
                            <div key={`${i}ingredient`}>
                                <input
                                    name="ingredient"
                                    value={value}
                                    onChange={e => handleIngredientInputChange(e, i)}
                                />
                                {
                                    ingredientInputList.length - 1 === i ?
                                    <button
                                        onClick={handleAddIngredientInputFieldClick}
                                    >
                                        Add
                                    </button> :
                                    null
                                }
                            </div>
                        )
                    })}
                </div>
                <div id="directions">
                    <h3>Directions</h3>
                    <p>Add one step per line</p>
                    {directionsInputList.map((value, i) => {
                        return (
                            <div key={`${i}direction`}>
                                <input
                                    name="directions"
                                    value={value}
                                    onChange={e => handleDirectionInputChange(e, i)}
                                />
                                {
                                    directionsInputList.length - 1 === i ?
                                    <button
                                        onClick={handleAddDirectionInputFieldClick}
                                    >
                                        Add
                                    </button> :
                                    null
                                }
                            </div>
                        )
                    })}
                </div>
                <br></br>
                <input type="submit" value="Add Recipie"/>
            </form>
        </div>
    )
}

export default RecipieForm;
