import React, { useEffect, useState } from "react";
import RecipieListing from "./RecipieListing";
import useDocumentTitle from "../hooks/useDocumentTitle";

function RecipieListings({ recipies, category }) {
    const [filteredRecipies, setFilteredRecipies] = useState([])
    useDocumentTitle('My Cook Book | Recipies')

    function fetchRecipies() {
        fetch("http://localhost:3001/recipies")
            .then(r => r.json())
            .then(setFilteredRecipies)
    }

    function filterRecipies() {
        let newRecipies = []
            recipies.filter(recipie => {
                if (recipie.category === category) {
                    newRecipies.push(recipie)
                }
            })
            setFilteredRecipies(newRecipies)
    }

    useEffect(() => {
        if (category === "all") {
            fetchRecipies()
        } else {
            filterRecipies()
        }
    }, [category])

    return (
        <div>
            {filteredRecipies.map(recipie => (
                recipie ? <RecipieListing key={recipie.id} recipie={recipie} /> : null
            ))}
        </div>
    )
}

export default RecipieListings;
