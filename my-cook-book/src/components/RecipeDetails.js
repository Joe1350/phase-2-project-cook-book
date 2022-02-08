import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";

function RecipeDetails({ recipes }) {
    const [recipe, setRecipe] = useState(
        {
            ingredients: ["ingredient"],
            directions: ["step"]
        }
    )
    const params = useParams();

    useEffect(() => {
        recipes.find(recipe => (
            recipe.id === params.recipeId ? setRecipe(recipe) : null
        ))
    }, [recipe])

    useDocumentTitle(`My Cook Book | ${recipe.name}`, recipe)

    const ingredientsList = recipe.ingredients.map(ingredient => {
        return <li key={ingredient}>{ingredient}</li>
    })

    const directionsList = recipe.directions.map(step => {
        return <li key={step}>{step}</li>
    })

    return (
        <div id="recipe-details">
            <h2><a target="_blank" href={recipe.source}>{recipe.name}</a></h2>
            <small>{recipe.author}</small>
            <br></br>
            <br></br>
            <img id="recipe-details-image" src={recipe.image} />
            <div id="recipe-details-description-block">
                <p id="recipe-details-description">{recipe.description}</p>
                <p>Prep Time: {recipe.prepTime} minutes | Cook Time: {recipe.cookTime} minutes</p>
                <p>{recipe.calories} Calories per serving | {recipe.servings} servings</p>
            </div>
            <div id="recipe-ingredients-and-directions">
                <h3>Ingredients</h3>
                <ul>
                    {ingredientsList}
                </ul>
                <h3>Directions</h3>
                <ol>
                    {directionsList}
                </ol>
            </div>
            {/* will add back in when I decide to add recipe notes feature <div
                style={{
                    backgroundColor: "white",
                    marginTop: "25px",
                    border: "solid black 1px",
                    padding: "10px",
                }}
            >
                <h3>Notes</h3>
                <p>{recipe.notes}</p>
            </div> */}
        </div>
    )
}

export default RecipeDetails;
