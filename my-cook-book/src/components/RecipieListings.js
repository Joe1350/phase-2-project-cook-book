import React from "react";
import { Link } from "react-router-dom";

function RecipieListings({ recipies }) {
    const renderRecipies = recipies.map(recipie => {
        return (
            <div key={recipie.id}>
                <Link to={`/recipies/${recipie.id}`}>
                    <article
                        style={{
                            display: "flex",
                            backgroundColor: "cornsilk",
                            border: "solid black 1px",
                            width: "70%",
                            marginLeft: "10%",
                            marginBottom: "10px",
                        }}
                    >
                        <img 
                            style={{
                                width: "25%",
                                height: "100%",
                                margin: "auto",
                                marginLeft: "10px",
                                marginRight: "10px",
                                marginTop: "10px",
                                marginBottom: "10px"
                            }}
                            src={recipie.image}
                        />
                        <div style={{ marginRight: "10px" }}>
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
