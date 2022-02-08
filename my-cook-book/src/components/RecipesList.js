import React, { useEffect, useState } from "react";
import RecipeListing from "./RecipeListing";
import useDocumentTitle from "../hooks/useDocumentTitle";

function RecipeListings({ recipes, category }) {
    const [filteredRecipes, setFilteredRecipes] = useState([])
    
    useDocumentTitle('My Cook Book | Recipes')

    function fetchRecipes() {
        fetch("http://localhost:3001/recipes")
            .then(r => r.json())
            .then(setFilteredRecipes)
    }

    function filterRecipes() {
        let newRecipes = []
            recipes.filter(recipe => {
                if (recipe.category === category) {
                    newRecipes.push(recipe)
                }
            })
            setFilteredRecipes(newRecipes)
    }

    useEffect(() => {
        if (category === "all") {
            fetchRecipes()
        } else {
            filterRecipes()
        }
    }, [category])

    return (
        <div>
            {filteredRecipes.map(recipe => (
                recipe ? <RecipeListing key={recipe.id} recipe={recipe} /> : null
            ))}
        </div>
    )
}

export default RecipeListings;
