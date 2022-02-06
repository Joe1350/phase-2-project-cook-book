import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import RecipieListings from "./RecipieListings";
import RecipieDetails from "./RecipieDetails";
import useDocumentTitle from "../hooks/useDocumentTitle";

function RecipiesList({ recipies }) {
    const match = useRouteMatch()

    useDocumentTitle("My Cook Book | Recipies")

    return (
        <div id="recipie-list">
            <Switch>
                <Route exact path="/recipies">
                    <RecipieListings recipies={recipies} />
                </Route>
                <Route path={`${match.url}/:recipieId`}>
                    <RecipieDetails recipies={recipies} />
                </Route>
            </Switch>
        </div>
    )
}

export default RecipiesList;
