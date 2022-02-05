import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipieDetails({ recipies }) {
    const [recipie, setRecipie] = useState([])
    const params = useParams();

    useEffect(() => {
        const recipieToDisplay = recipies.find(recipie => (
            recipie.id === params.recipieId ? recipie : null
        ))
        setRecipie(recipieToDisplay)
    }, [recipie])

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
            <h2>{recipie.name}</h2>
        </div>
    )
}

export default RecipieDetails;
