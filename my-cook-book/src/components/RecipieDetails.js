import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipieDetails({ recipies }) {
    const [recipie, setRecipie] = useState(recipies[0])
    const params = useParams();

    useEffect(() => {
        recipies.find(recipie => (
            recipie.id === params.recipieId ? setRecipie(recipie) : null
        ))
    }, [recipie])

    const ingredientsList = recipie.ingredients.map(ingredient => {
        return <li key={ingredient}>{ingredient}</li>
    })

    const directionsList = recipie.directions.map(step => {
        return <li key={step}>{step}</li>
    })

    return (
        <div
            style={{
                width: "70%",
                backgroundColor: "cornsilk",
                marginLeft: "10%",
                border: "solid black 1px",
                padding: "25px",
            }}
        >
            <h2><a target="_blank" href={recipie.source}>{recipie.name}</a></h2>
            <small>{recipie.author}</small>
            <br></br>
            <br></br>
            <img style={{ width: "33%" }} src={recipie.image} />
            <div
                style={{
                    backgroundColor: "white",
                    width: "70%",
                    marginLeft: "10%",
                    marginTop: "10px",
                    border: "solid black 1px",
                    padding: "10px",
                    textAlign: "center"
                }}
            >
                <p style={{ width: "90%", marginLeft: "5%" }}>{recipie.description}</p>
                <p>Prep Time: {recipie.prepTime} minutes | Cook Time: {recipie.cookTime} minutes</p>
                <p>{recipie.calories} Calories per serving | {recipie.servings} servings</p>
            </div>
            <div
                style={{
                    backgroundColor: "white",
                    marginTop: "25px",
                    border: "solid black 1px",
                    padding: "10px",
                }}
            >
                <h3>Ingredients</h3>
                <ul>
                    {ingredientsList}
                </ul>
                <h3>Directions</h3>
                <ol>
                    {directionsList}
                </ol>
            </div>
        </div>
    )
}

export default RecipieDetails;
