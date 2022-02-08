import React, { useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Filter from "./Filter";
// import Sort from "./Sort";
import RecipesList from "./RecipesList";
import RecipeDetails from "./RecipeDetails";
import useDocumentTitle from "../hooks/useDocumentTitle";

function RecipesPage({ recipes }) {
    const [filterBy, setFilterBy] = useState("all")

    const match = useRouteMatch()

    useDocumentTitle("My Cook Book | Recipes")

    function handleFilterByChange(e) {
        setFilterBy(e.target.value)
    }

    return (
        <div id="recipe-list">
            <div id="filter-and-sort">
                <Filter filterBy={filterBy} onFilterByChange={handleFilterByChange} />
                {/* <Sort /> */}
            </div>
            <Switch>
                <Route exact path="/recipes">
                    <RecipesList recipes={recipes} category={filterBy} />
                </Route>
                <Route path={`${match.url}/:recipeId`}>
                    <RecipeDetails recipes={recipes} />
                </Route>
            </Switch>
        </div>
    )
}

export default RecipesPage;
