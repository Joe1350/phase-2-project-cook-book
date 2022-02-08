import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import RecipeFormDetails from "./RecipeFormDetails";
import RecipeFormIngredients from "./RecipeFormIngredients";
import RecipeFormDirections from "./RecipeFormDirections";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { v4 as uuid } from "uuid";

function RecipeForm({ setRecipes }) {
    const [formData, setFormData] = useState({
        source: "",
        name: "",
        author: "",
        image: "",
        description: "",
        servings: "",
        calories: "",
        category: "",
        prepTime: "",
        cookTime: "",
    })
    const [ingredientInputList, setIngredientInputList] = useState([""])
    const [directionsInputList, setDirectionsInputList] = useState([""])
    // const history = useHistory()

    useDocumentTitle("My Cook Book | Add a Recipe")

    function handleFormChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmitForm(e) {
        e.preventDefault()
        let prepTimeInput = formData.prepTime
        const newRecipe = {
            id: uuid(),
            source: formData.source,
            author: formData.author,
            image: formData.image,
            name: formData.name,
            description: formData.description,
            servings: parseInt(formData.servings),
            calories: parseInt(formData.calories),
            category: formData.category,
            prepTime: parseInt(prepTimeInput),
            cookTime: parseInt(formData.cookTime),
            totalTime: (parseInt(prepTimeInput) + parseInt(formData.cookTime)),
            ingredients: ingredientInputList,
            directions: directionsInputList,
            notes: []
        }
        fetch("http://localhost:3001/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newRecipe)
        })
        .then(r => r.json())
        .then(newRecipe => setRecipes(newRecipe))
        // history.push(`/recipes/${newRecipe.id}`)
    }

    return (
        <div id="form">
            <h2>Add a New Recipe</h2>
            <form onSubmit={handleSubmitForm}>
                <RecipeFormDetails
                    formData={formData}
                    onFormChange={handleFormChange}
                />
                <RecipeFormIngredients
                    ingredientInputList={ingredientInputList}
                    setIngredientInputList={setIngredientInputList}
                />
                <RecipeFormDirections
                    directionsInputList={directionsInputList}
                    setDirectionsInputList={setDirectionsInputList}
                />
                <input id="submit" type="submit" value="Add Recipe"/>
            </form>
        </div>
    )
}

export default RecipeForm;
