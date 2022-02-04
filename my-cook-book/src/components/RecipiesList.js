import React from "react";
import RecipieDetails from "./RecipieDetails";

function RecipiesList({ recipies }) {
    const recipiesList = recipies.map(recipie => {
        return <RecipieDetails key={recipie.id} recipie={recipie} />
    })

    return (
        <div>
            {recipiesList}
        </div>
    )
}

export default RecipiesList;