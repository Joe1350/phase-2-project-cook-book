import React from "react";
import RecipieListing from "./RecipieListing";
import useDocumentTitle from "../hooks/useDocumentTitle";

function RecipieListings({ recipies }) {
    useDocumentTitle('My Cook Book | Recipies')

    return (
        <div>
            {recipies.map(recipie => (
                recipie ? <RecipieListing key={recipie.id} recipie={recipie} /> : null
            ))}
        </div>
    )
}

export default RecipieListings;
