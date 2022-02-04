import React from "react";

function RecipieListings({ recipie }) {
    function handleShowDetails() {
        console.log('I was clicked')
    }
    return (
        <article
            style={{
                display: "flex",
                border: "solid black 1px",
                width: "80%",
                marginLeft: "10%"
            }}
            onClick={handleShowDetails}
        >
            <img 
                style={{
                    width: "120px",
                    height: "100%",
                    margin: "10px"
                }}
                src={recipie.image}
            />
            <div>
                <h2>{recipie.name}</h2>
                <small>{recipie.author ? recipie.author : null}</small>
                <br></br>
                <small>
                    Total Time: {recipie.totalTime} | {recipie.calories} Calories per serving | {recipie.servings} servings
                </small>
                <p>{recipie.description}</p>
            </div>
        </article>

        
    )
}

export default RecipieListings;