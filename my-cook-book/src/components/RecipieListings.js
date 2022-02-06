import React from "react";
import { Link } from "react-router-dom";

function RecipieListings({ recipies }) {
    const renderRecipies = recipies.map(recipie => {
        return (
            <div key={recipie.id}>
                <Link id="recipie-listing" to={`/recipies/${recipie.id}`}>
                    <article>
                        <img id="recipie-listing-image" src={recipie.image} />
                        <div>
                            <h2>{recipie.name}</h2>
                            <small>{recipie.author}</small>
                            <br></br>
                            <small>
                                Total Time: {recipie.totalTime} minutes | {recipie.calories} Calories per serving | {recipie.servings} servings
                            </small>
                            <p>{recipie.description}</p>
                        </div>
                    </article>
                </Link>
            </div>
        )
    })

    return (
        <div>
            {renderRecipies}
        </div>
    )
}

export default RecipieListings;
