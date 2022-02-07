import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Filter from "./Filter";
import Sort from "./Sort";
import RecipiesList from "./RecipiesList";
import RecipieDetails from "./RecipieDetails";
import useDocumentTitle from "../hooks/useDocumentTitle";

function RecipiesPage({ recipies }) {
    const match = useRouteMatch()

    useDocumentTitle("My Cook Book | Recipies")

    return (
        <div id="recipie-list">
            <div id="filter-and-sort">
                <Filter />
                <Sort />
            </div>
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
