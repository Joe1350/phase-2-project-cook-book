import React from "react";
import RecipieListings from "./RecipieListings";

function RecipiesList({ recipies }) {
    const recipiesList = recipies.map(recipie => {
        return <RecipieListings key={recipie.id} recipie={recipie} />
    })

    return (
        <div style={{ marginTop: "25px" }}>
            {recipiesList}
        </div>
    )
}

export default RecipiesList;