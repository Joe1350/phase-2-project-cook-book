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
                width: "70%",
                marginLeft: "10%",
                marginBottom: "10px",
            }}
            onClick={handleShowDetails}
        >
            <img 
                style={{
                    width: "120px",
                    height: "100%",
                    margin: "auto",
                    marginLeft: "10px",
                    marginRight: "10px"
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
    )
}

export default RecipieListings;
