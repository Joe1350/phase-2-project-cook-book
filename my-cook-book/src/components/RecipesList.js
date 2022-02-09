import React, { useEffect, useState } from "react";
import RecipeListing from "./RecipeListing";
import useDocumentTitle from "../hooks/useDocumentTitle";

function RecipeList({ recipes, category }) {
    const [filteredRecipes, setFilteredRecipes] = useState([])
    
    useDocumentTitle('My Cook Book | Recipes')

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
            setFilteredRecipes(recipes)
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

export default RecipeList;
