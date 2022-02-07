import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import RecipiesList from "./RecipiesList";
import RecipieDetails from "./RecipieDetails";
import useDocumentTitle from "../hooks/useDocumentTitle";

function RecipiesPage({ recipies }) {
    const match = useRouteMatch()

    useDocumentTitle("My Cook Book | Recipies")

    return (
        <div id="recipie-list">
            {/* <div id="category-filter">
                <label htmlFor="category">Filter By: </label>
                <select name="category" value={null} onChange={null}>
                    <option value="all">Choose a Category...</option>
                    <option value="appetizers">Appetizers</option>
                    <option value="beverages">Beverages</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="desserts">Desserts</option>
                    <option value="main dishes">Main Dishes</option>
                    <option value="salads">Salads</option>
                    <option value="side dishes">Side Dishes</option>
                    <option value="soups and stews">Soups and Stews</option>
                </select>
            </div> */}
            {/* <div id="sort">
                <label htmlFor="sort">Sort By: </label>
                <select name="sort" value={null} onChange={null}>
                    <option value="name">Name</option>
                    <option value="total time">Time</option>
                    <option value="calories">Calories</option>
                    <option value="servings">Servings</option>
                </select>
            </div> */}
            <Switch>
                <Route exact path="/recipies">
                    <RecipiesList recipies={recipies} />
                </Route>
                <Route path={`${match.url}/:recipieId`}>
                    <RecipieDetails recipies={recipies} />
                </Route>
            </Switch>
        </div>
    )
}

export default RecipiesPage;
