import React from "react";
import { Link } from "react-router-dom";

function RecipeListing({ recipe }) {
    return (
        <div>
            <Link id="recipe-listing" to={`/recipes/${recipe.id}`}>
                <article>
                    <img id="recipe-listing-image" src={recipe.image} />
                    <div id="recipe-listing-details">
                        <h2>{recipe.name}</h2>
                        <div id="black-text">
                            <small>{recipe.author}</small>
                            <br></br>
                            <small>
                                Total Time: {recipe.totalTime} minutes | {recipe.calories} Calories per serving | {recipe.servings} servings
                            </small>
                            <p>{recipe.description}</p>
                        </div>
                    </div>
                </article>
            </Link>
        </div>
    )
}

export default RecipeListing;
