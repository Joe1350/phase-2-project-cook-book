import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import RecipieFormDetails from "./RecipieFormDetails";
import RecipieFormIngredients from "./RecipieFormIngredients";
import RecipieFormDirections from "./RecipieFormDirections";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { v4 as uuid } from "uuid";

function RecipieForm({ setRecipies }) {
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
    const history = useHistory()

    useDocumentTitle("My Cook Book | Add a Recipie")

    function handleFormChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmitForm(e) {
        e.preventDefault()
        let prepTimeInput = formData.prepTime
        const newRecipie = {
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
        fetch("http://localhost:3001/recipies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newRecipie)
        })
        .then(r => r.json())
        .then(newRecipie => setRecipies(newRecipie))
        history.push(`/recipies/${newRecipie.id}`)
    }

    return (
        <div id="form">
            <h2>Add a New Recipie</h2>
            <form onSubmit={handleSubmitForm}>
                <RecipieFormDetails
                    formData={formData}
                    onFormChange={handleFormChange}
                />
                <RecipieFormIngredients
                    ingredientInputList={ingredientInputList}
                    setIngredientInputList={setIngredientInputList}
                />
                <RecipieFormDirections
                    directionsInputList={directionsInputList}
                    setDirectionsInputList={setDirectionsInputList}
                />
                <input id="submit" type="submit" value="Add Recipie"/>
            </form>
        </div>
    )
}

export default RecipieForm;
