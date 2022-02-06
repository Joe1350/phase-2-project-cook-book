import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipieDetails({ recipies }) {
    const [recipie, setRecipie] = useState(
        {
            ingredients: ["ingredient"],
            directions: ["step"]
        }
    )
    const params = useParams();

    useEffect(() => {
        recipies.find(recipie => (
            recipie.id === params.recipieId ? setRecipie(recipie) : null
        ))
    }, [recipie])

    useEffect(() => {
        document.title = `My Cook Book | ${recipie.name}`
    }, [recipie])

    const ingredientsList = recipie.ingredients.map(ingredient => {
        return <li key={ingredient}>{ingredient}</li>
    })

    const directionsList = recipie.directions.map(step => {
        return <li key={step}>{step}</li>
    })

    return (
        <div id="recipie-details">
            <h2><a target="_blank" href={recipie.source}>{recipie.name}</a></h2>
            <small>{recipie.author}</small>
            <br></br>
            <br></br>
            <img id="recipie-details-image" src={recipie.image} />
            <div id="recipie-details-description-block">
                <p id="recipie-details-description">{recipie.description}</p>
                <p>Prep Time: {recipie.prepTime} minutes | Cook Time: {recipie.cookTime} minutes</p>
                <p>{recipie.calories} Calories per serving | {recipie.servings} servings</p>
            </div>
            <div id="recipie-ingredients-and-directions">
                <h3>Ingredients</h3>
                <ul>
                    {ingredientsList}
                </ul>
                <h3>Directions</h3>
                <ol>
                    {directionsList}
                </ol>
            </div>
            {/* will add back in when I decide to add recipie notes feature <div
                style={{
                    backgroundColor: "white",
                    marginTop: "25px",
                    border: "solid black 1px",
                    padding: "10px",
                }}
            >
                <h3>Notes</h3>
                <p>{recipie.notes}</p>
            </div> */}
        </div>
    )
}

export default RecipieDetails;
